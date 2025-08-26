import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">İletişim</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>📍 Merkez Mahallesi, Sağlık Sokak No:1</p>
                            <p>📞 +90 212 XXX XX XX</p>
                            <p>✉️ info@omurgaklinigi.com</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <div className="space-y-2 text-gray-300">
                            <a href="/about" className="block hover:text-white transition-colors">
                                Hakkımızda
                            </a>
                            <a href="/team" className="block hover:text-white transition-colors">
                                Ekibimiz
                            </a>
                            <a href="/treatments" className="block hover:text-white transition-colors">
                                Tedaviler
                            </a>
                            <a href="/appointment" className="block hover:text-white transition-colors">
                                Randevu Al
                            </a>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                            <p>Cumartesi: 09:00 - 15:00</p>
                            <p>Pazar: Kapalı</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Omurga Kliniği. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
