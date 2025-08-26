import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getResearches, getResearch } from '../../api/content.service';
import api from '../../api/apiClient';

const Research = () => {
    const [researches, setResearches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingResearch, setEditingResearch] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        imageUrl: ''
    });

    useEffect(() => {
        fetchResearches();
    }, []);

    const fetchResearches = async () => {
        try {
            const data = await getResearches();
            setResearches(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching researches:', error);
            setResearches([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingResearch) {
                await api.put(`/researches/${editingResearch.id}`, formData);
                window.toast.success('Araştırma başarıyla güncellendi.');
            } else {
                await api.post('/researches', formData);
                window.toast.success('Araştırma başarıyla eklendi.');
            }
            fetchResearches();
            resetForm();
        } catch (error) {
            console.error('Error saving research:', error);
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = async (research) => {
        try {
            const fullResearch = await getResearch(research.id);
            setEditingResearch(fullResearch);
            setFormData({
                title: fullResearch.title || '',
                content: fullResearch.content || '',
                imageUrl: fullResearch.imageUrl || ''
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching research details:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu araştırmayı silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/researches/${id}`);
                fetchResearches();
                window.toast.success('Araştırma başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting research:', error);
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
            imageUrl: ''
        });
        setEditingResearch(null);
        setShowForm(false);
    };

    return (
        <div>
            <Helmet>
                <title>Araştırma Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Araştırma Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni Araştırma Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingResearch ? 'Araştırma Düzenle' : 'Yeni Araştırma Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Araştırma Başlığı *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        placeholder="Araştırma başlığını girin..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Görsel URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.imageUrl}
                                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        İçerik *
                                    </label>
                                    <AdvancedCKEditor
                                        data={formData.content || ''}
                                        onChange={(data) => setFormData({ ...formData, content: data })}
                                        placeholder="Araştırma içeriğini buraya yazın..."
                                        minHeight="400px"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Yayın Tarihi
                                        </label>
                                        <input
                                            type="date"
                                            value={formData.publishDate}
                                            onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
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
                                            <option value="published">Yayınlanmış</option>
                                            <option value="draft">Taslak</option>
                                            <option value="review">İnceleme</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            DOI
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.doi}
                                            onChange={(e) => setFormData({ ...formData, doi: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="10.1000/xyz123"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Anahtar Kelimeler
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.keywords}
                                            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="anahtar1, anahtar2, anahtar3"
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
                                        {editingResearch ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">Araştırmalar yükleniyor...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Araştırma
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Kategori
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Durum
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tarih
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        İşlemler
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {researches.length > 0 ? researches.map((research) => (
                                    <tr key={research.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {research.title}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {research.authors}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {research.category || 'Belirtilmemiş'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${research.status === 'published' ? 'bg-green-100 text-green-800' :
                                                research.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                {research.status === 'published' ? 'Yayınlanmış' :
                                                    research.status === 'review' ? 'İnceleme' : 'Taslak'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {research.publishDate ? new Date(research.publishDate).toLocaleDateString('tr-TR') : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(research)}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                Düzenle
                                            </button>
                                            <button
                                                onClick={() => handleDelete(research.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Sil
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                            Henüz araştırma bulunmuyor. İlk araştırmayı ekleyin.
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

export default Research;
