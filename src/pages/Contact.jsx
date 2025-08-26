import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>İletişim | Randevu Al | Anatolian Spine Center</title>
                <meta name="description" content="Anatolian Spine Center ile iletişime geçin. Randevu almak, bilgi almak veya sorularınız için bizimle iletişime geçebilirsiniz. İstanbul omurga kliniği iletişim bilgileri." />
                <meta name="keywords" content="iletişim, randevu al, omurga kliniği iletişim, telefon, adres, email, anatolian spine center, istanbul omurga kliniği, randevu sistemi, konsültasyon" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="İletişim | Randevu Al | Anatolian Spine Center" />
                <meta property="og:description" content="Anatolian Spine Center ile iletişime geçin. Randevu almak ve bilgi almak için bizimle iletişime geçebilirsiniz." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/contact" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="İletişim | Randevu Al" />
                <meta name="twitter:description" content="Anatolian Spine Center ile iletişime geçin. Randevu almak için bizimle iletişime geçebilirsiniz." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/contact" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "İletişim",
                        "description": "Anatolian Spine Center iletişim bilgileri ve randevu alma",
                        "url": "https://anatolianspinecenter.com/contact",
                        "mainEntity": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com",
                            "telephone": "+90 212 XXX XX XX",
                            "email": "info@anatolianspinecenter.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Örnek Mahallesi, Örnek Sokak No:1",
                                "addressLocality": "İstanbul",
                                "addressRegion": "İstanbul",
                                "postalCode": "34000",
                                "addressCountry": "TR"
                            },
                            "openingHours": [
                                "Mo-Fr 08:00-18:00",
                                "Sa 09:00-17:00"
                            ],
                            "hasMap": "https://maps.google.com"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            İletişim
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                İletişim Bilgileri
                            </h2>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                                        <p className="text-gray-600">
                                            Merkez Mahallesi, Sağlık Sokak No:1<br />
                                            Beşiktaş / İstanbul<br />
                                            34353
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+902125551234" className="hover:text-blue-600">
                                                +90 212 555 12 34
                                            </a><br />
                                            Acil Durum: +90 212 555 56 78
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:info@omurgaklinigi.com" className="hover:text-blue-600">
                                                info@omurgaklinigi.com
                                            </a><br />
                                            <a href="mailto:randevu@omurgaklinigi.com" className="hover:text-blue-600">
                                                randevu@omurgaklinigi.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                                            <p>Cumartesi: 09:00 - 15:00</p>
                                            <p>Pazar: Kapalı</p>
                                            <p className="text-red-600 font-medium">Acil durumlar: 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Bize Yazın
                            </h2>
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Konumumuz
                        </h2>
                        <p className="text-xl text-gray-600">
                            Merkezi konumumuzla kolay ulaşım imkanı
                        </p>
                    </div>

                    {/* Placeholder for Google Maps */}
                    <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-600">Google Maps konumu buraya gelecek</p>
                        </div>
                    </div>

                    {/* Transportation */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro</h3>
                            <p className="text-gray-600">Levent Metro İstasyonu - 5 dk yürüme</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Otobüs</h3>
                            <p className="text-gray-600">25, 40, 42 numaralı hatlar</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Otopark</h3>
                            <p className="text-gray-600">Ücretsiz kapalı otopark</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
