import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getSponsors } from '../api/content.service';

const Sponsors = () => {
    const { data: sponsors, loading, error } = useFetch(getSponsors);
    const [selectedSponsor, setSelectedSponsor] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (sponsor) => {
        setSelectedSponsor(sponsor);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedSponsor(null);
        setShowModal(false);
    };

    const getCategoryName = (category) => {
        /*
        'education', 'surgery', 'research', 'patient', 'conference', 'treatment', 'recovery', 'appointment', 'general', 'technology', 'pharmaceutical', 'equipment', 'support', 'ongoing', 'completed', 'planned', "medical", "pharmaceutical", "equipment", "research", "other"
        */
        const categories = {
            'education': 'Eğitim',
            'surgery': 'Cerrahi',
            'research': 'Araştırma',
            'patient': 'Hasta',
            'conference': 'Konferans',
            'treatment': 'Tedavi',
            'recovery': 'İyileşme',
            'appointment': 'Randevu',
            'general': 'Genel',
            'technology': 'Teknoloji',
            'pharmaceutical': 'Farmasötik',
            'equipment': 'Ekipman',
            'support': 'Destek',
            'ongoing': 'Devam Eden',
            'completed': 'Tamamlanan',
            'planned': 'Planlanan',
            'medical': 'Tıbbi',
            'other': 'Diğer'
        };
        return categories[category] || category;
    };

    const getStatusName = (status) => {
        const statuses = {
            'active': 'Aktif',
            'inactive': 'Pasif',
            'pending': 'Beklemede',
            'archived': 'Arşivlenmiş'
        };
        return statuses[status] || status;
    };

    return (
        <div>
            <Helmet>
                <title>Sponsorlar ve Ortaklar | İş Birliği | Anatolian Spine Center</title>
                <meta name="description" content="Omurga sağlığı alanında çalıştığımız değerli sponsorlar, iş ortakları ve stratejik işbirlikleri. Tıbbi teknoloji, araştırma ve eğitim ortaklarımız." />
                <meta name="keywords" content="sponsorlar, iş ortakları, tıbbi ortaklık, araştırma işbirliği, teknoloji ortakları, eğitim sponsorları, anatolian spine center, stratejik ortaklık, medikal işbirliği" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sponsorlar ve Ortaklar | İş Birliği | Anatolian Spine Center" />
                <meta property="og:description" content="Omurga sağlığı alanında çalıştığımız değerli sponsorlar, iş ortakları ve stratejik işbirlikleri." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/sponsors" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sponsorlar ve Ortaklar | İş Birliği" />
                <meta name="twitter:description" content="Omurga sağlığı alanında çalıştığımız değerli sponsorlar ve iş ortaklarımız." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/sponsors" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Sponsorlar ve Ortaklar",
                        "description": "Anatolian Spine Center'ın sponsorları ve iş ortakları",
                        "url": "https://anatolianspinecenter.com/sponsors",
                        "mainEntity": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "about": {
                            "@type": "Thing",
                            "name": "Medikal Ortaklıklar",
                            "description": "Omurga sağlığı alanında stratejik ortaklıklar"
                        },
                        "provider": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "TR",
                                "addressLocality": "İstanbul"
                            }
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sponsorlar ve Ortaklar
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga sağlığı alanında yenilikçi çözümler geliştirmek için
                            değerli sponsorlarımız ve iş ortaklarımızla birlikte çalışıyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partnership Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ortaklık Kategorileri
                        </h2>
                        <p className="text-xl text-gray-600">
                            Farklı alanlarda değerli ortaklarımızla sürdürdüğümüz işbirlikleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Teknoloji Ortakları",
                                description: "Tıbbi cihaz ve yazılım teknolojisi sağlayıcıları",
                                icon: "💻",
                                color: "bg-blue-100 text-blue-800",
                                count: "12 Ortak"
                            },
                            {
                                title: "Araştırma Kuruluşları",
                                description: "Üniversiteler ve araştırma enstitüleri",
                                icon: "🔬",
                                color: "bg-green-100 text-green-800",
                                count: "8 Kuruluş"
                            },
                            {
                                title: "İlaç Şirketleri",
                                description: "Farmasötik ve biyomedikal ürün sağlayıcıları",
                                icon: "💊",
                                color: "bg-purple-100 text-purple-800",
                                count: "15 Şirket"
                            },
                            {
                                title: "Sigorta Şirketleri",
                                description: "Sağlık sigortası ve finansal çözüm ortakları",
                                icon: "🏛️",
                                color: "bg-orange-100 text-orange-800",
                                count: "6 Şirket"
                            },
                            {
                                title: "Eğitim Kurumları",
                                description: "Tıp eğitimi ve sürekli eğitim programları",
                                icon: "🎓",
                                color: "bg-red-100 text-red-800",
                                count: "10 Kurum"
                            },
                            {
                                title: "Kamu Kuruluşları",
                                description: "Sağlık bakanlığı ve kamu hastaneleri",
                                icon: "🏥",
                                color: "bg-yellow-100 text-yellow-800",
                                count: "5 Kuruluş"
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Sponsors */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ana Sponsorlarımız
                        </h2>
                        <p className="text-xl text-gray-600">
                            Kliniğimizin gelişimi için değerli katkılar sağlayan ana sponsorlarımız
                        </p>
                    </div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Sponsorlar yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Sponsorlar yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(sponsors) && sponsors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sponsors.map((sponsor) => {
                                if (sponsor.status !== 'active') return null;
                                return (

                                    <div
                                        key={sponsor.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                        onClick={() => openModal(sponsor)}
                                    >
                                        <div className="p-6 text-center">
                                            <img
                                                src={sponsor.logo || sponsor.logoUrl || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'}
                                                alt={sponsor.name}
                                                className="h-20 mx-auto mb-4 object-contain"
                                            />
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {sponsor.name}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {sponsor.description || 'Sponsor açıklaması bulunmuyor.'}
                                            </p>
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                                    {getCategoryName(sponsor.category)}
                                                </span>
                                                <span className={`px-2 py-1 text-xs font-semibold rounded ${sponsor.status === 'active' ? 'bg-green-100 text-green-800' :
                                                    sponsor.status === 'inactive' ? 'bg-red-100 text-red-800' :
                                                        sponsor.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {getStatusName(sponsor.status)}
                                                </span>
                                            </div>
                                            {sponsor.website && (
                                                <div className="text-sm text-blue-600 mb-3">
                                                    🌐 Website Mevcut
                                                </div>
                                            )}
                                            <div className="text-blue-600 text-sm font-medium">
                                                Detayları görüntüle →
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Yakında sponsorlarımızı bu sayfada görebileceksiniz.</p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Sponsor Detail Modal */}
            {showModal && selectedSponsor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Sponsor Detayları
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Sponsor Logo */}
                            {(selectedSponsor.logo || selectedSponsor.logoUrl) && (
                                <div className="text-center mb-6">
                                    <img
                                        src={selectedSponsor.logo || selectedSponsor.logoUrl}
                                        alt={selectedSponsor.name}
                                        className="h-32 mx-auto object-contain"
                                    />
                                </div>
                            )}

                            {/* Sponsor Name */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                                {selectedSponsor.name}
                            </h1>

                            {/* Sponsor Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <span className="font-semibold text-gray-700">Kategori:</span>
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        {getCategoryName(selectedSponsor.category)}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-semibold text-gray-700">Durum:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-sm ${selectedSponsor.status === 'active' ? 'bg-green-100 text-green-800' :
                                        selectedSponsor.status === 'inactive' ? 'bg-red-100 text-red-800' :
                                            selectedSponsor.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {getStatusName(selectedSponsor.status)}
                                    </span>
                                </div>

                                {selectedSponsor.createdAt && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Ortaklık Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedSponsor.createdAt).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedSponsor.website && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Website:</span>
                                        <a
                                            href={selectedSponsor.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-blue-600 hover:text-blue-800 break-all"
                                        >
                                            {selectedSponsor.website} ↗
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Sponsor Description */}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsor Hakkında</h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {selectedSponsor.description || 'Bu sponsor hakkında detaylı bilgi bulunmuyor.'}
                                </div>
                            </div>


                        </div>

                        <div className="sticky bottom-0 bg-white border-t px-6 py-4 text-right">
                            <button
                                onClick={closeModal}
                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                Kapat
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Partnership Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ortaklık Avantajları
                        </h2>
                        <p className="text-xl text-gray-600">
                            Bizimle ortaklık kurmanın sizlere sağlayacağı avantajlar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Marka Görünürlüğü",
                                description: "Kliniğimizin tüm iletişim kanallarında marka tanıtımı",
                                icon: "👁️"
                            },
                            {
                                title: "Araştırma İşbirliği",
                                description: "Ortak araştırma projeleri ve bilimsel yayınlar",
                                icon: "🤝"
                            },
                            {
                                title: "Etkinlik Sponsorluğu",
                                description: "Konferans, seminer ve eğitim etkinliklerinde yer alma",
                                icon: "🎯"
                            },
                            {
                                title: "Ürün Geliştirme",
                                description: "Yeni ürün ve hizmetlerin geliştirilmesinde işbirliği",
                                icon: "⚡"
                            },
                            {
                                title: "Pazara Erişim",
                                description: "Sağlık sektöründe geniş network ağına erişim",
                                icon: "🌐"
                            },
                            {
                                title: "Uzman Danışmanlığı",
                                description: "Alanında uzman hekimlerden profesyonel danışmanlık",
                                icon: "💡"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            {/* <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Başarı Hikayeleri
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ortaklarımızla birlikte gerçekleştirdiğimiz başarılı projeler
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                company: "MedTech Solutions",
                                project: "Robotik Cerrahi Sistemi Entegrasyonu",
                                result: "Ameliyat sürelerinde %40 azalma",
                                year: "2023"
                            },
                            {
                                company: "BioPharm Global",
                                project: "Yenilikçi Ağrı Yönetimi Protokolü",
                                result: "Hasta memnuniyetinde %25 artış",
                                year: "2023"
                            },
                            {
                                company: "University Medical Center",
                                project: "Omurga Sağlığı Araştırma Programı",
                                result: "15 bilimsel yayın ve 3 patent",
                                year: "2022-2023"
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {story.project}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-3">
                                            {story.company}
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            <strong>Sonuç:</strong> {story.result}
                                        </p>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {story.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Partnership Levels */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Sponsorluk Seviyeleri
                        </h2>
                        <p className="text-xl text-gray-600">
                            Farklı bütçe ve ihtiyaçlara uygun sponsorluk paketleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                level: "Platinum",
                                color: "border-purple-500 bg-purple-50",
                                price: "100.000+ TL",
                                features: [
                                    "Ana sponsor logo",
                                    "Etkinlik naming rights",
                                    "Basın açıklamalarında yer alma",
                                    "Özel araştırma projesi",
                                    "Executive meeting"
                                ]
                            },
                            {
                                level: "Gold",
                                color: "border-yellow-500 bg-yellow-50",
                                price: "50.000+ TL",
                                features: [
                                    "Premium logo yerleştirme",
                                    "Etkinlik sponsorluğu",
                                    "Medya görünürlüğü",
                                    "Araştırma ortaklığı",
                                    "Quarterly review"
                                ]
                            },
                            {
                                level: "Silver",
                                color: "border-gray-500 bg-gray-50",
                                price: "25.000+ TL",
                                features: [
                                    "Standard logo",
                                    "Etkinlik katılımı",
                                    "Newsletter'da yer alma",
                                    "Ürün tanıtımı",
                                    "Monthly update"
                                ]
                            },
                            {
                                level: "Bronze",
                                color: "border-orange-500 bg-orange-50",
                                price: "10.000+ TL",
                                features: [
                                    "Website listesi",
                                    "Sosyal medya mention",
                                    "Brochure'da yer alma",
                                    "Network erişimi",
                                    "Basic support"
                                ]
                            }
                        ].map((package_, index) => (
                            <div key={index} className={`border-2 ${package_.color} rounded-lg p-6`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {package_.level}
                                </h3>
                                <p className="text-xl font-semibold text-gray-700 mb-4">
                                    {package_.price}
                                </p>
                                <ul className="space-y-2">
                                    {package_.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Bizimle Ortaklık Kurun
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Omurga sağlığı alanında yenilik yaratmak ve hasta deneyimini iyileştirmek
                        için sizinle işbirliği yapmaya hazırız.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Ortaklık Başvurusu
                        </a>
                        <a
                            href="mailto:ortaklik@omurgaklinigi.com"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                        >
                            ortaklik@omurgaklinigi.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sponsors;
