import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import { useAuth } from '../contexts/AuthContext';

const AdminLayout = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const isLoginPage = location.pathname === '/admin' || location.pathname === '/admin/';

    if (isLoginPage || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Outlet />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <AdminSidebar />
            <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
