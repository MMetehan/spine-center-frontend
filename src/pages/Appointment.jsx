import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppointmentForm from '../components/AppointmentForm';

const Appointment = () => {
    return (
        <div>
            <Helmet>
                <title>Randevu Al | Online Randevu Sistemi | Anatolian Spine Center</title>
                <meta name="description" content="Anatolian Spine Center'da online randevu alın. Omurga uzmanlarımızdan kolayca randevu alabilir, disk hernisi, bel ağrısı ve boyun ağrısı için konsültasyon talep edebilirsiniz." />
                <meta name="keywords" content="randevu al, online randevu, omurga uzmanı randevu, disk hernisi randevu, bel ağrısı randevu, boyun ağrısı randevu, anatolian spine center, ortopedi randevu, nöroşirürji randevu, konsültasyon" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Randevu Al | Online Randevu Sistemi | Anatolian Spine Center" />
                <meta property="og:description" content="Anatolian Spine Center'da online randevu alın. Omurga uzmanlarımızdan kolayca randevu alabilirsiniz." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/appointment" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Randevu Al | Online Randevu Sistemi" />
                <meta name="twitter:description" content="Anatolian Spine Center'da online randevu alın. Omurga uzmanlarımızdan kolayca randevu alabilirsiniz." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/appointment" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Randevu Al",
                        "description": "Anatolian Spine Center online randevu sistemi",
                        "url": "https://anatolianspinecenter.com/appointment",
                        "mainEntity": {
                            "@type": "MedicalBusiness",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com",
                            "telephone": "+90 212 XXX XX XX",
                            "email": "info@anatolianspinecenter.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "İstanbul",
                                "addressCountry": "TR"
                            },
                            "openingHours": [
                                "Mo-Fr 08:00-18:00",
                                "Sa 09:00-17:00"
                            ],
                            "medicalSpecialty": [
                                "Orthopedics",
                                "Neurosurgery",
                                "Physical Medicine"
                            ],
                            "availableService": [
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Omurga Tedavisi"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Disk Hernisi Tedavisi"
                                },
                                {
                                    "@type": "MedicalProcedure",
                                    "name": "Minimal İnvaziv Cerrahi"
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Randevu Al
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Online randevu sistemi ile kolayca randevu oluşturun.
                            Size en uygun tarih ve saati seçerek randevunuzu planlayın.
                        </p>
                    </div>
                </div>
            </section>

            {/* Appointment Form */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Randevu Formu
                            </h2>
                            <p className="text-gray-600">
                                Lütfen aşağıdaki formu doldurun. En kısa sürede sizinle iletişime geçeceğiz.
                            </p>
                        </div>

                        <AppointmentForm />
                    </div>
                </div>
            </section>

            {/* Information */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Randevu Bilgileri
                        </h2>
                        <p className="text-xl text-gray-600">
                            Randevu sürecinde dikkat edilmesi gerekenler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Information Cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Randevu Saatleri
                            </h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                                <p>Cumartesi: 09:00 - 15:00</p>
                                <p>Pazar: Kapalı</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Gerekli Belgeler
                            </h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>• Kimlik belgesi</p>
                                <p>• Önceki tetkik sonuçları</p>
                                <p>• Sevk belgesi (varsa)</p>
                                <p>• Sigorta kartı</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                İletişim
                            </h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>Telefon: +90 212 555 12 34</p>
                                <p>WhatsApp: +90 532 555 12 34</p>
                                <p>E-posta: randevu@omurgaklinigi.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Acil Durumlar
                            </h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>Acil durumlarda 24/7 hizmet</p>
                                <p>Acil hat: +90 212 555 56 78</p>
                                <p>112 ambulans çağırabilirsiniz</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Adres
                            </h3>
                            <div className="text-gray-600 text-sm">
                                <p>Merkez Mahallesi</p>
                                <p>Sağlık Sokak No:1</p>
                                <p>Beşiktaş / İstanbul</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Otopark
                            </h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <p>Ücretsiz kapalı otopark</p>
                                <p>100 araç kapasitesi</p>
                                <p>Engelli araçları için özel alan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Sıkça Sorulan Sorular
                        </h2>
                        <p className="text-gray-600">
                            Randevu süreciyle ilgili merak edilenler
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Randevumu iptal edebilir miyim?
                            </h3>
                            <p className="text-gray-600">
                                Evet, randevunuzu 24 saat öncesinden iptal edebilirsiniz.
                                İptal için +90 212 555 12 34 numaralı telefonu arayabilirsiniz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Randevu ücreti var mı?
                            </h3>
                            <p className="text-gray-600">
                                Randevu almak ücretsizdir. Sadece muayene ücretini kliniğimizde ödeyeceksiniz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Acil durumda nasıl randevu alabilirim?
                            </h3>
                            <p className="text-gray-600">
                                Acil durumlar için direkt kliniğimize gelebilir veya
                                +90 212 555 56 78 acil hattımızı arayabilirsiniz.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Sigorta kabul ediyor musunuz?
                            </h3>
                            <p className="text-gray-600">
                                Evet, SGK ve tüm özel sigorta şirketleriyle anlaşmalıyız.
                                Randevu alırken sigorta bilgilerinizi belirtmeyi unutmayın.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
