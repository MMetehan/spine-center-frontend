import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getMedia, getMediaItem } from '../../api/content.service';
import api from '../../api/apiClient';

const Media = () => {
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingMedia, setEditingMedia] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        mediaUrl: ''
    });

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const data = await getMedia();
            setMedia(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching media:', error);
            setMedia([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingMedia) {
                await api.put(`/media/${editingMedia.id}`, formData);
                window.toast.success('Medya başarıyla güncellendi.');
            } else {
                await api.post('/media', formData);
                window.toast.success('Medya başarıyla eklendi.');
            }
            fetchMedia();
            resetForm();
        } catch (error) {
            console.error('Error saving media:', error);
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = async (mediaItem) => {
        try {
            const fullMedia = await getMediaItem(mediaItem.id);
            setEditingMedia(fullMedia);
            setFormData({
                title: fullMedia.title || '',
                description: fullMedia.description || '',
                type: fullMedia.type || 'video',
                mediaUrl: fullMedia.mediaUrl || '',
                thumbnail: fullMedia.thumbnail || '',
                publishDate: fullMedia.publishDate || '',
                category: fullMedia.category || '',
                status: fullMedia.status || 'published'
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching media details:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu medya içeriğini silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/media/${id}`);
                fetchMedia();
                window.toast.success('Medya başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting media:', error);
                error.response.data.details.map(err => {
                    window.toast.error(err.msg)
                })
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            type: 'video',
            mediaUrl: '',
            thumbnail: '',
            publishDate: '',
            category: '',
            status: 'published'
        });
        setEditingMedia(null);
        setShowForm(false);
    };

    return (
        <div>
            <Helmet>
                <title>Medya Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Medya Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni Medya Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingMedia ? 'Medya Düzenle' : 'Yeni Medya Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Başlık
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Açıklama
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows="3"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Tür
                                        </label>
                                        <select
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="video">Video</option>
                                            <option value="image">Resim</option>
                                            <option value="podcast">Podcast</option>
                                            <option value="webinar">Webinar</option>
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
                                            <option value="patient">Hasta Hikayeleri</option>
                                            <option value="conference">Konferans</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.mediaUrl}
                                        onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="https://youtube.com/watch?v=..."
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Thumbnail URL
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.thumbnail}
                                        onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="https://example.com/thumbnail.jpg"
                                    />
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
                                            Durum
                                        </label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="published">Yayında</option>
                                            <option value="draft">Taslak</option>
                                            <option value="private">Özel</option>
                                        </select>
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
                                        {editingMedia ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">Medya içerikleri yükleniyor...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {media.length > 0 ? media.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={item.thumbnail || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded ${item.type === 'video' ? 'bg-red-100 text-red-800' :
                                            item.type === 'image' ? 'bg-blue-100 text-blue-800' :
                                                item.type === 'podcast' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-green-100 text-green-800'
                                            }`}>
                                            {item.type === 'video' ? '📹 Video' :
                                                item.type === 'image' ? '🖼️ Resim' :
                                                    item.type === 'podcast' ? '🎧 Podcast' : '💻 Webinar'}
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded ${item.status === 'published' ? 'bg-green-100 text-green-800' :
                                            item.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {item.status === 'published' ? 'Yayında' :
                                                item.status === 'draft' ? 'Taslak' : 'Özel'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{item.category || 'Genel'}</span>
                                        <span>
                                            {item.publishDate ? new Date(item.publishDate).toLocaleDateString('tr-TR') : 'Tarihsiz'}
                                        </span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
                                        >
                                            Düzenle
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
                                        >
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500">Henüz medya içeriği bulunmuyor. İlk içeriği ekleyin.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Media;
