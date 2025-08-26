import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getNews } from '../../api/content.service';
import api from '../../api/apiClient';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        summary: '',
        imageUrl: '',
        category: '',
        status: 'draft',
        publishDate: '',
        tags: '',
        author: ''
    });

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const data = await getNews();
            setNews(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching news:', error);
            setNews([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingNews) {
                await api.put(`/news/${editingNews.id}`, formData);
                window.toast?.success('Haber başarıyla güncellendi.');
            } else {
                await api.post('/news', formData);
                window.toast?.success('Haber başarıyla oluşturuldu.');
            }
            fetchNews();
            resetForm();
        } catch (error) {
            console.error('Error saving news:', error);
            if (error.response?.data?.details) {
                error.response.data.details.map(err => {
                    window.toast?.error(err.msg);
                });
            } else {
                window.toast?.error('Haber kaydedilirken bir hata oluştu.');
            }
        }
    };

    const handleEdit = async (newsItem) => {
        try {
            setEditingNews(newsItem);
            setFormData({
                title: newsItem.title || '',
                content: newsItem.content || '',
                summary: newsItem.summary || '',
                imageUrl: newsItem.imageUrl || '',
                category: newsItem.category || '',
                status: newsItem.status || 'draft',
                publishDate: newsItem.publishDate ? newsItem.publishDate.split('T')[0] : '',
                tags: newsItem.tags || '',
                author: newsItem.author || ''
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error setting news data:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu haberi silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/news/${id}`);
                fetchNews();
                window.toast?.success('Haber başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting news:', error);
                if (error.response?.data?.details) {
                    error.response.data.details.map(err => {
                        window.toast?.error(err.msg);
                    });
                } else {
                    window.toast?.error('Haber silinirken bir hata oluştu.');
                }
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            summary: '',
            imageUrl: '',
            category: '',
            status: 'draft',
            publishDate: '',
            tags: '',
            author: ''
        });
        setEditingNews(null);
        setShowForm(false);
    };

    const getCategoryName = (category) => {
        const categories = {
            'education': 'Eğitim',
            'surgery': 'Cerrahi',
            'research': 'Araştırma',
            'patient': 'Hasta',
            'conference': 'Konferans',
            'treatment': 'Tedavi',
            'recovery': 'İyileşme',
            'appointment': 'Randevu',
            'general': 'Genel',
            'technology': 'Teknoloji',
            'pharmaceutical': 'Farmasötik',
            'equipment': 'Ekipman',
            'support': 'Destek',
            'ongoing': 'Devam Eden',
            'completed': 'Tamamlanan',
            'planned': 'Planlanan'
        };
        return categories[category] || category;
    };

    const getStatusName = (status) => {
        const statuses = {
            'draft': 'Taslak',
            'published': 'Yayınlanmış',
            'archived': 'Arşivlenmiş',
            'active': 'Aktif',
            'inactive': 'Pasif',
            'pending': 'Beklemede'
        };
        return statuses[status] || status;
    };

    return (
        <div>
            <Helmet>
                <title>Haber Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Haber Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni Haber Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingNews ? 'Haber Düzenle' : 'Yeni Haber Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Haber Başlığı *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        placeholder="Haber başlığını girin..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Özet *
                                    </label>
                                    <textarea
                                        value={formData.summary}
                                        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        rows="3"
                                        required
                                        placeholder="Haber özetini girin..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        İçerik *
                                    </label>
                                    <AdvancedCKEditor
                                        data={formData.content || ''}
                                        onChange={(data) => setFormData({ ...formData, content: data })}
                                        placeholder="Haber içeriğini buraya yazın..."
                                        minHeight="400px"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                            Yazar
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.author}
                                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Yazar adı"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Etiketler
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.tags}
                                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="sağlık, omurga, tedavi"
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
                                        {editingNews ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">Haberler yükleniyor...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Haber
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Kategori
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Durum
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Yayın Tarihi
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        İşlemler
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {news.length > 0 ? news.map((newsItem) => (
                                    <tr key={newsItem.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    className="h-10 w-10 rounded-lg object-cover"
                                                    src={newsItem.imageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                                    alt={newsItem.title}
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {newsItem.title}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {newsItem.summary?.substring(0, 50)}...
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {getCategoryName(newsItem.category) || 'Belirtilmemiş'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${newsItem.status === 'published' ? 'bg-green-100 text-green-800' :
                                                newsItem.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                                    newsItem.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                        newsItem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            newsItem.status === 'inactive' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-red-100 text-red-800'
                                                }`}>
                                                {getStatusName(newsItem.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {newsItem.publishDate ? new Date(newsItem.publishDate).toLocaleDateString('tr-TR') : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(newsItem)}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                Düzenle
                                            </button>
                                            <button
                                                onClick={() => handleDelete(newsItem.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Sil
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                            Henüz haber bulunmuyor. İlk haberi ekleyin.
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

export default News;
