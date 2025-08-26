import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AdvancedCKEditor from '../../components/AdvancedCKEditor';
import { getTeam, getTeamMember } from '../../api/content.service';
import api from '../../api/apiClient';

const Team = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        bio: '',
        imageUrl: '',
        order: 1
    });

    useEffect(() => {
        fetchTeam();
    }, []);

    const fetchTeam = async () => {
        try {
            const data = await getTeam();
            setTeam(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching team:', error);
            setTeam([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingMember) {
                await api.put(`/team/${editingMember.id}`, formData);
                window.toast.success('Ekip üyesi başarıyla güncellendi.');
            } else {
                await api.post('/team', formData);
                window.toast.success('Ekip üyesi başarıyla eklendi.');
            }
            await fetchTeam();
            resetForm();
        } catch (error) {
            console.error('Error saving team member:', error);
            error.response.data.details.map(err => {
                window.toast.error(err.msg)
            })
        }
    };

    const handleEdit = async (member) => {
        try {
            const fullMember = await getTeamMember(member.id);
            setEditingMember(fullMember);
            setFormData({
                name: fullMember.name || '',
                title: fullMember.title || '',
                bio: fullMember.bio || '',
                imageUrl: fullMember.imageUrl || '',
                order: fullMember.order || 1
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching team member details:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu ekip üyesini silmek istediğinizden emin misiniz?')) {
            try {
                await api.delete(`/team/${id}`);
                await fetchTeam();
            } catch (error) {
                console.error('Error deleting team member:', error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            title: '',
            bio: '',
            imageUrl: '',
            order: 1
        });
        setEditingMember(null);
        setShowForm(false);
    };

    return (
        <div>
            <Helmet>
                <title>Ekip Yönetimi - Admin Panel</title>
            </Helmet>

            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Ekip Yönetimi</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Yeni Ekip Üyesi Ekle
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                {editingMember ? 'Ekip Üyesi Düzenle' : 'Yeni Ekip Üyesi Ekle'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ad Soyad *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                            placeholder="Dr. Ahmet Yılmaz"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Unvan *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                            placeholder="Nöroşirurji Uzmanı"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Fotoğraf URL
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.imageUrl}
                                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://example.com/photo.jpg"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Sıralama
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.order}
                                            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            min="1"
                                            placeholder="1"
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Ekip listesindeki görünüm sırası
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Biyografi *
                                    </label>
                                    <AdvancedCKEditor
                                        data={formData.bio || ''}
                                        onChange={(data) => setFormData({ ...formData, bio: data })}
                                        placeholder="Doktor biyografisini buraya yazın..."
                                        minHeight="300px"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Eğitim, deneyim, uzmanlık alanları gibi detayları ekleyin
                                    </p>
                                </div>

                                <div className="flex justify-end space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        İptal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        {editingMember ? 'Güncelle' : 'Kaydet'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Team List */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Ekip Üyeleri</h2>
                    </div>

                    {loading ? (
                        <div className="p-6 text-center">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Ekip üyeleri yükleniyor...</p>
                        </div>
                    ) : team.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                            Henüz ekip üyesi bulunmuyor. İlk üyeyi ekleyin.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Üye
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Unvan
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sıra
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            İşlemler
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {team
                                        .sort((a, b) => (a.order || 1) - (b.order || 1))
                                        .map((member) => (
                                            <tr key={member.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        {member.imageUrl ? (
                                                            <img
                                                                src={member.imageUrl}
                                                                alt={member.name}
                                                                className="h-12 w-12 rounded-full object-cover mr-4"
                                                            />
                                                        ) : (
                                                            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                                                                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                        <div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {member.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {member.title}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {member.order || 1}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => handleEdit(member)}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        Düzenle
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(member.id)}
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

export default Team;
