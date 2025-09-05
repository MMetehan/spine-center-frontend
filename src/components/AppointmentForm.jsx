import React, { useState } from 'react';
import { submitAppointment } from '../api/content.service';

const AppointmentForm = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            await submitAppointment(data);
            setStatus('success');
            window.toast.success('Randevu talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.');
            e.target.reset();
        } catch (error) {
            setStatus('error');
            window.toast.error('Randevu talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefonla arayın.');
            console.error('Appointment form error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                        Adınız *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adınız"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                        Soyadınız *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Soyadınız"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        E-posta *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="example@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Telefon *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+90 5XX XXX XX XX"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="preferredDate" className="block mb-2 text-sm font-medium text-gray-700">
                        Tercih Edilen Tarih *
                    </label>
                    <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label htmlFor="preferredTime" className="block mb-2 text-sm font-medium text-gray-700">
                        Tercih Edilen Saat *
                    </label>
                    <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">Saat seçin</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-700">
                    Bölüm *
                </label>
                <select
                    id="department"
                    name="department"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="">Bölüm seçin</option>
                    <option value="omurga-cerrahisi">Omurga Cerrahisi</option>
                    <option value="fizik-tedavi">Fizik Tedavi</option>
                    <option value="noroloji">Nöroloji</option>
                    <option value="ortopedi">Ortopedi</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Ek Notlar
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Şikayetleriniz veya ek bilgiler..."
                />
            </div>

            <div className="flex items-start">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                    Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve kabul ediyorum. *
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
                {loading ? 'Randevu Talep Ediliyor...' : 'Randevu Talep Et'}
            </button>

            {status === 'success' && (
                <div className="px-4 py-3 text-green-800 border border-green-200 rounded-lg bg-green-50">
                    Randevu talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
                </div>
            )}

            {status === 'error' && (
                <div className="px-4 py-3 text-red-800 border border-red-200 rounded-lg bg-red-50">
                    Randevu talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya telefonla arayın.
                </div>
            )}
        </form>
    );
};

export default AppointmentForm;
