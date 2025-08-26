import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getFAQ } from '../../api/content.service';
import api from '../../api/apiClient';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingFaq, setEditingFaq] = useState(null);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        category: '',
        order: 0,
        status: 'active'
    });

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const data = await getFAQ();
            setFaqs(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
            setFaqs([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingFaq) {
                await api.put(`/faq/${editingFaq.id}`, formData);
                window.toast.success('SSS başarıyla güncellendi.');
            } else {
                await api.post('/faq', formData);
                window.toast.success('SSS başarıyla eklendi.');
            }
            fetchFaqs();
            resetForm();
        } catch (error) {
            console.error('Error saving FAQ:', error);
            // alert('SSS kaydedilirken bir hata oluştu.');
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = (faq) => {
        setEditingFaq(faq);
        setFormData({
            question: faq.question || '',
            answer: faq.answer || '',
            category: faq.category || '',
            order: faq.order || 0,
            status: faq.status || 'active'
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu SSS\'yi silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/faq/${id}`);
                fetchFaqs();
                window.toast.success('SSS başarıyla silindi.');
            } catch (error) {
                console.error('Error deleting FAQ:', error);
                error.response.data.details.map(err => {
                    window.toast.error(err.msg)
                })
            }
        }
    };

    const resetForm = () => {
        setFormData({
            question: '',
            answer: '',
            category: '',
            order: 0,
            status: 'active'
        });
        setEditingFaq(null);
        setShowForm(false);
    };

    return (
        <div>
            <Helmet>
                <title>SSS Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Sık Sorulan Sorular (SSS)</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Yeni SSS Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingFaq ? 'SSS Düzenle' : 'Yeni SSS Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Soru
                                    </label>
                                    <textarea
                                        value={formData.question}
                                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                        rows="3"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cevap
                                    </label>
                                    <textarea
                                        value={formData.answer}
                                        onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                        rows="6"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                            <option value="general">Genel</option>
                                            <option value="treatment">Tedavi</option>
                                            <option value="appointment">Randevu</option>
                                            <option value="surgery">Cerrahi</option>
                                            <option value="payment">Ödeme</option>
                                            <option value="insurance">Sigorta</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Sıralama
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.order}
                                            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            min="0"
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
                                            <option value="active">Aktif</option>
                                            <option value="inactive">Pasif</option>
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
                                        {editingFaq ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="mt-2 text-gray-600">SSS yükleniyor...</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {faqs.length > 0 ? faqs
                            .sort((a, b) => (a.order || 0) - (b.order || 0))
                            .map((faq) => (
                                <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900 mr-3">
                                                    {faq.question}
                                                </h3>
                                                {faq.category && (
                                                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                                                        {faq.category}
                                                    </span>
                                                )}
                                                <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${faq.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {faq.status === 'active' ? 'Aktif' : 'Pasif'}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-3">
                                                {faq.answer}
                                            </p>
                                            <div className="text-sm text-gray-500">
                                                Sıralama: {faq.order || 0}
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 ml-4">
                                            <button
                                                onClick={() => handleEdit(faq)}
                                                className="text-blue-600 hover:text-blue-900 px-3 py-1 text-sm border border-blue-200 rounded hover:bg-blue-50"
                                            >
                                                Düzenle
                                            </button>
                                            <button
                                                onClick={() => handleDelete(faq.id)}
                                                className="text-red-600 hover:text-red-900 px-3 py-1 text-sm border border-red-200 rounded hover:bg-red-50"
                                            >
                                                Sil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                            <div className="text-center py-12 bg-white rounded-lg shadow-md">
                                <p className="text-gray-500">Henüz SSS bulunmuyor. İlk soruyu ekleyin.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
