import React, { useState } from 'react';
import { submitContactForm } from '../api/content.service';

const ContactForm = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            await submitContactForm(data);
            setStatus('success');
            window.toast.success('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
            e.target.reset();
        } catch (error) {
            setStatus('error');
            window.toast.error('Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            console.error('Contact form error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Adınız Soyadınız *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adınız ve soyadınız"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        E-posta Adresiniz *
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
            </div>

            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Telefon Numaranız
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+90 5XX XXX XX XX"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Konu *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mesajınızın konusu"
                />
            </div>

            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Mesajınız *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Mesajınızı buraya yazın..."
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
                {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
            </button>

            {status === 'success' && (
                <div className="px-4 py-3 text-green-800 border border-green-200 rounded-lg bg-green-50">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
            )}

            {status === 'error' && (
                <div className="px-4 py-3 text-red-800 border border-red-200 rounded-lg bg-red-50">
                    Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                </div>
            )}
        </form>
    );
};

export default ContactForm;
