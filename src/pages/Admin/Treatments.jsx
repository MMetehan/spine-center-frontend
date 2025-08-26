import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getTreatments, getTreatment } from '../../api/content.service';
import api from '../../api/apiClient';
import { useAuth } from '../../contexts/AuthContext';

const Treatments = () => {
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingTreatment, setEditingTreatment] = useState(null);
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        summary: '',
        content: '',
        imageUrl: '',
    });

    useEffect(() => {
        fetchTreatments();
    }, []);

    console.log(user)

    const fetchTreatments = async () => {
        try {
            const data = await getTreatments();
            setTreatments(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching treatments:', error);
            setTreatments([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingTreatment) {
                await api.put(`/treatments/${editingTreatment.id}`, formData);
                window.toast.success('Tedavi başarıyla güncellendi.');
            } else {
                await api.post('/treatments', formData);
                window.toast.success('Tedavi başarıyla eklendi.');
            }
            await fetchTreatments();
            resetForm();
        } catch (error) {
            console.error('Error saving treatment:', error);
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = async (treatment) => {
        try {
            setEditingTreatment(treatment);
            setFormData({
                title: treatment.title || '',
                slug: treatment.slug || '',
                summary: treatment.summary || '',
                content: treatment.content || '',
                imageUrl: treatment.imageUrl || '',
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error setting treatment data:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu tedaviyi silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/treatments/${id}`);
                await fetchTreatments();
                window.toast.success('Tedavi başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting treatment:', error);
                error.response.data.details.map(err => {
                    window.toast.error(err.msg)
                })
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            slug: '',
            summary: '',
            content: '',
            imageUrl: '',
        });
        setEditingTreatment(null);
        setShowForm(false);
    };

    const generateSlug = (title) => {
        const turkishMap = {
            'ğ': 'g', 'Ğ': 'G',
            'ü': 'u', 'Ü': 'U',
            'ş': 's', 'Ş': 'S',
            'ı': 'i', 'İ': 'I',
            'ö': 'o', 'Ö': 'O',
            'ç': 'c', 'Ç': 'C'
        };

        return title
            .split('')
            .map(char => turkishMap[char] || char)
            .join('')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const handleTitleChange = (title) => {
        const slug = generateSlug(title);
        setFormData({
            ...formData,
            title,
            slug,
        });
    };

    return (
        <div>
            <Helmet>
                <title>Tedavi Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Tedavi Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni Tedavi Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingTreatment ? 'Tedavi Düzenle' : 'Yeni Tedavi Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tedavi Başlığı *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => handleTitleChange(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        placeholder="Tedavi başlığını girin..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        URL Slug
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="url-slug-buraya"
                                    />
                                    <p className="mt-1 text-sm text-gray-500">
                                        Sayfa URL'inde kullanılacak. Başlık yazılınca otomatik oluşur.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Özet Açıklama
                                    </label>
                                    <textarea
                                        value={formData.summary}
                                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        rows="3"
                                        placeholder="Tedavi hakkında kısa açıklama..."
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
                                        Detaylı İçerik *
                                    </label>
                                    <AdvancedCKEditor
                                        data={formData.content || ''}
                                        onChange={(data) => setFormData({ ...formData, content: data })}
                                        placeholder="Tedavi detaylarını buraya yazın..."
                                        minHeight="400px"
                                    />
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
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        {editingTreatment ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Treatments List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Tedaviler</h2>
                    </div>

                    {loading ? (
                        <div className="p-6 text-center">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Tedaviler yükleniyor...</p>
                        </div>
                    ) : treatments.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                            Henüz tedavi bulunmuyor. İlk tedaviyi ekleyin.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tedavi
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Slug
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Özet
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            İşlemler
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {treatments.map((treatment) => (
                                        <tr key={treatment.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img
                                                        className="h-10 w-10 rounded-lg object-cover"
                                                        src={treatment.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                                        alt={treatment.title}
                                                    />
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {treatment.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                                                    {treatment.slug}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900 max-w-xs truncate">
                                                    {treatment.summary || 'Özet yok'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleEdit(treatment)}
                                                    className="text-blue-600 hover:text-blue-900 mr-4"
                                                >
                                                    Düzenle
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(treatment.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Sil
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Treatments;