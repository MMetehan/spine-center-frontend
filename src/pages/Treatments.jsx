import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getTreatments } from '../api/content.service';
import TreatmentCard from '../components/TreatmentCard';

const Treatments = () => {
    const { data: treatments, loading, error } = useFetch(getTreatments);

    return (
        <div>
            <Helmet>
                <title>Tedavi Hizmetlerimiz | Omurga Tedavileri | Anatolian Spine Center</title>
                <meta name="description" content="Disk hernisi, spondilolistezis, skolyoz ve diğer omurga hastalıkları için modern tedavi yöntemleri. Cerrahi ve non-cerrahi çözümlerle omurga sağlığınızı koruyun." />
                <meta name="keywords" content="omurga tedavisi, disk hernisi tedavisi, spondilolistezis tedavisi, skolyoz tedavisi, boyun fıtığı, bel fıtığı, omurga cerrahisi, non-cerrahi tedavi, fizik tedavi, anatolian spine center, omurga uzmanı, ortopedi, nöroşirürji" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tedavi Hizmetlerimiz | Omurga Tedavileri | Anatolian Spine Center" />
                <meta property="og:description" content="Disk hernisi, spondilolistezis, skolyoz ve diğer omurga hastalıkları için modern tedavi yöntemleri. Cerrahi ve non-cerrahi çözümlerle omurga sağlığınızı koruyun." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/treatments" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tedavi Hizletlerimiz | Omurga Tedavileri" />
                <meta name="twitter:description" content="Disk hernisi, spondilolistezis, skolyoz ve diğer omurga hastalıkları için modern tedavi yöntemleri." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/treatments" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "name": "Tedavi Hizletlerimiz",
                        "description": "Disk hernisi, spondilolistezis, skolyoz ve diğer omurga hastalıkları için modern tedavi yöntemleri.",
                        "url": "https://anatolianspinecenter.com/treatments",
                        "mainEntity": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com",
                            "medicalSpecialty": ["Orthopedics", "Neurosurgery", "Physical Medicine"],
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "TR",
                                "addressLocality": "İstanbul"
                            }
                        },
                        "about": [
                            {
                                "@type": "MedicalCondition",
                                "name": "Disk Hernisi"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Spondilolistezis"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Skolyoz"
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Tedavi Hizmetlerimiz
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern teknoloji ve uzman kadromuzla omurga sağlığınız için
                            kapsamlı tedavi seçenekleri sunuyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Treatments Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Tedavi bilgileri yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Tedavi bilgileri yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(treatments) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {treatments.map((treatment) => (
                                <TreatmentCard key={treatment.id} treatment={treatment} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Treatment Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tedavi Kategorilerimiz
                        </h2>
                        <p className="text-xl text-gray-600">
                            Omurga sağlığınız için kapsamlı hizmet yelpazesi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Cerrahi Tedaviler',
                                description: 'Minimal invaziv ve geleneksel cerrahi yöntemler',
                                icon: '🏥',
                                treatments: ['Mikrocerrahi', 'Spinal Füzyon', 'Disk Ameliyatı', 'Tümör Cerrahisi']
                            },
                            {
                                title: 'Konservatif Tedaviler',
                                description: 'Ameliyatsız tedavi seçenekleri',
                                icon: '💊',
                                treatments: ['Fizik Tedavi', 'İlaç Tedavisi', 'Enjeksiyon', 'Korseler']
                            },
                            {
                                title: 'Rehabilitasyon',
                                description: 'Ameliyat sonrası ve konservatif rehabilitasyon',
                                icon: '🏃‍♂️',
                                treatments: ['Egzersiz Tedavisi', 'Manuel Terapi', 'Hidroterapi', 'Elektriki Stimülasyon']
                            },
                            {
                                title: 'Ağrı Yönetimi',
                                description: 'Kronik ağrı için özel protokoller',
                                icon: '🎯',
                                treatments: ['Epidural Enjeksiyon', 'Radyofrekans', 'Spinal Kord Stimülasyonu', 'Blok Tedavileri']
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {category.description}
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    {category.treatments.map((treatment, idx) => (
                                        <li key={idx}>• {treatment}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Bizi Tercih Etmelisiniz?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Omurga tedavisinde öncü yaklaşımlarımız
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Uzman Kadro',
                                description: 'Alanında uzman, deneyimli doktor ve sağlık personeli',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Modern Teknoloji',
                                description: 'Son teknoloji tıbbi cihazlar ve ameliyat odaları',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Kişisel Yaklaşım',
                                description: 'Her hastaya özel tedavi planı ve bireysel bakım',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Hızlı İyileşme',
                                description: 'Minimal invaziv tekniklerle daha hızlı iyileşme süreci',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: '24/7 Destek',
                                description: 'Acil durumlarda kesintisiz sağlık hizmeti',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: 'Kalite Garantisi',
                                description: 'Uluslararası standartlarda hizmet kalitesi',
                                icon: (
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            }
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Sağlığınız İçin Doğru Kararı Verin
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Uzman kadromuzla tanışın ve size en uygun tedavi seçeneğini birlikte belirleyin
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <a
                            href="/appointment"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Randevu Al
                        </a>
                        <a
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Bilgi Al
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Treatments;
