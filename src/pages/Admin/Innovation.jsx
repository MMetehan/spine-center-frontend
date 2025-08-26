import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getInnovations } from '../../api/content.service';
import api from '../../api/apiClient';

const Innovation = () => {
    const [innovations, setInnovations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingInnovation, setEditingInnovation] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        type: 'video',
        category: '',
        status: 'draft',
        team: '',
        startDate: '',
        image: '',
        tags: ''
    });

    useEffect(() => {
        fetchInnovations();
    }, []);

    const fetchInnovations = async () => {
        try {
            const data = await getInnovations();
            setInnovations(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching innovations:', error);
            setInnovations([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingInnovation) {
                await api.put(`/innovations/${editingInnovation.id}`, formData);
            } else {
                await api.post('/innovations', formData);
            }
            fetchInnovations();
            resetForm();
            window.toast.success('İnovasyon başarıyla kaydedildi.');
        } catch (error) {
            console.error('Error saving innovation:', error);
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = async (innovation) => {
        try {
            setEditingInnovation(innovation);
            setFormData({
                title: innovation.title || '',
                content: innovation.content || '',
                type: innovation.type || 'video',
                category: innovation.category || '',
                status: innovation.status || 'draft',
                team: innovation.team || '',
                startDate: innovation.startDate || '',
                image: innovation.image || '',
                tags: innovation.tags || ''
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error setting innovation data:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu inovasyonu silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/innovations/${id}`);
                fetchInnovations();
                window.toast.success('İnovasyon başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting innovation:', error);
                error.response.data.details.map(err => {
                    window.toast.error(err.msg)
                })
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            type: 'video',
            category: '',
            status: 'draft',
            team: '',
            startDate: '',
            image: '',
            tags: ''
        });
        setEditingInnovation(null);
        setShowForm(false);
    };

    return (
        <div>
            <Helmet>
                <title>İnovasyon Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">İnovasyon Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni İnovasyon Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingInnovation ? 'İnovasyon Düzenle' : 'Yeni İnovasyon Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        İnovasyon Başlığı *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        placeholder="İnovasyon başlığını girin..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        İçerik *
                                    </label>
                                    <AdvancedCKEditor
                                        data={formData.content || ''}
                                        onChange={(data) => setFormData({ ...formData, content: data })}
                                        placeholder="İnovasyon içeriğini buraya yazın..."
                                        minHeight="400px"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Medya Türü
                                        </label>
                                        <select
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="video">Video</option>
                                            <option value="image">Görsel</option>
                                            <option value="podcast">Podcast</option>
                                            <option value="webinar">Webinar</option>
                                            <option value="article">Makale</option>
                                            <option value="research">Araştırma</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Kategori
                                        </label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">Kategori Seçin</option>
                                            <option value="education">Eğitim</option>
                                            <option value="surgery">Cerrahi</option>
                                            <option value="research">Araştırma</option>
                                            <option value="patient">Hasta</option>
                                            <option value="conference">Konferans</option>
                                            <option value="treatment">Tedavi</option>
                                            <option value="recovery">İyileşme</option>
                                            <option value="appointment">Randevu</option>
                                            <option value="general">Genel</option>
                                            <option value="technology">Teknoloji</option>
                                            <option value="pharmaceutical">Farmasötik</option>
                                            <option value="equipment">Ekipman</option>
                                            <option value="support">Destek</option>
                                            <option value="ongoing">Devam Eden</option>
                                            <option value="completed">Tamamlanan</option>
                                            <option value="planned">Planlanan</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Durum
                                        </label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="draft">Taslak</option>
                                            <option value="published">Yayınlanmış</option>
                                            <option value="archived">Arşivlenmiş</option>
                                            <option value="active">Aktif</option>
                                            <option value="inactive">Pasif</option>
                                            <option value="pending">Beklemede</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Ekip
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.team}
                                            onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Dr. John Doe, Mühendis Jane Smith"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Başlangıç Tarihi
                                        </label>
                                        <input
                                            type="date"
                                            value={formData.startDate}
                                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Resim URL
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.image}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://example.com/image.jpg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Etiketler
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.tags}
                                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="ai, cerrahi, teknoloji"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    >
                                        İptal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        {editingInnovation ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">İnovasyonlar yükleniyor...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        İnovasyon
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tür
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Kategori
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Durum
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        İşlemler
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {innovations.length > 0 ? innovations.map((innovation) => (
                                    <tr key={innovation.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    className="h-10 w-10 rounded-lg object-cover"
                                                    src={innovation.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                                    alt={innovation.title}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {innovation.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {innovation.description?.substring(0, 50)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${innovation.type === 'video' ? 'bg-purple-100 text-purple-800' :
                                                innovation.type === 'image' ? 'bg-green-100 text-green-800' :
                                                    innovation.type === 'podcast' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-blue-100 text-blue-800'
                                                }`}>
                                                {innovation.type === 'video' ? 'Video' :
                                                    innovation.type === 'image' ? 'Görsel' :
                                                        innovation.type === 'podcast' ? 'Podcast' : 'Webinar'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {innovation.category === 'education' ? 'Eğitim' :
                                                innovation.category === 'surgery' ? 'Cerrahi' :
                                                    innovation.category === 'research' ? 'Araştırma' :
                                                        innovation.category === 'patient' ? 'Hasta' :
                                                            innovation.category === 'conference' ? 'Konferans' :
                                                                innovation.category === 'treatment' ? 'Tedavi' :
                                                                    innovation.category === 'recovery' ? 'İyileşme' :
                                                                        innovation.category === 'appointment' ? 'Randevu' :
                                                                            innovation.category === 'general' ? 'Genel' :
                                                                                innovation.category === 'technology' ? 'Teknoloji' :
                                                                                    innovation.category === 'pharmaceutical' ? 'Farmasötik' :
                                                                                        innovation.category === 'equipment' ? 'Ekipman' :
                                                                                            innovation.category === 'support' ? 'Destek' :
                                                                                                innovation.category === 'ongoing' ? 'Devam Eden' :
                                                                                                    innovation.category === 'completed' ? 'Tamamlanan' :
                                                                                                        innovation.category === 'planned' ? 'Planlanan' :
                                                                                                            innovation.category || 'Belirtilmemiş'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${innovation.status === 'published' ? 'bg-green-100 text-green-800' :
                                                innovation.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                                    innovation.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                        innovation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            innovation.status === 'inactive' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-red-100 text-red-800'
                                                }`}>
                                                {innovation.status === 'published' ? 'Yayınlanmış' :
                                                    innovation.status === 'draft' ? 'Taslak' :
                                                        innovation.status === 'archived' ? 'Arşivlenmiş' :
                                                            innovation.status === 'active' ? 'Aktif' :
                                                                innovation.status === 'inactive' ? 'Pasif' : 'Beklemede'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(innovation)}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                Düzenle
                                            </button>
                                            <button
                                                onClick={() => handleDelete(innovation.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Sil
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                            Henüz inovasyon bulunmuyor. İlk inovasyonu ekleyin.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Innovation;
