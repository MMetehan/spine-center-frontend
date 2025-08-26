import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth.service';
import { useAuth } from '../contexts/AuthContext';

const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout: authLogout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            authLogout();
            navigate('/admin');
        } catch (error) {
            console.error('Logout error:', error);
            authLogout();
            navigate('/admin');
        }
    };

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/admin/team', label: 'Ekip Yönetimi', icon: '👥' },
        { path: '/admin/treatments', label: 'Tedavi Yönetimi', icon: '🏥' },
        { path: '/admin/projects', label: 'Proje Yönetimi', icon: '�' },
        { path: '/admin/sponsors', label: 'Sponsor Yönetimi', icon: '🤝' },
        { path: '/admin/research', label: 'Araştırma Yönetimi', icon: '📚' },
        { path: '/admin/media', label: 'Medya Yönetimi', icon: '�' },
        { path: '/admin/innovation', label: 'İnovasyon Yönetimi', icon: '💡' },
        { path: '/admin/news', label: 'Haber Yönetimi', icon: '�' },
        { path: '/admin/faq', label: 'SSS Yönetimi', icon: '❓' },
        { path: '/admin/settings', label: 'Ayarlar', icon: '⚙️' },
    ];

    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
            {/* Logo */}
            <div className="p-4 border-b border-gray-700">
                <Link to="/admin/dashboard" className="text-xl font-bold text-blue-400">
                    Omurga Kliniği
                </Link>
                <p className="text-sm text-gray-400">Yönetim Paneli</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Admin</p>
                        <p className="text-xs text-gray-400">Yönetici</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Çıkış Yap
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
