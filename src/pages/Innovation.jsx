import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getInnovations } from '../api/content.service';
import parse from 'html-react-parser';

const Innovation = () => {
    const { data: innovations, loading, error } = useFetch(getInnovations);
    const [selectedInnovation, setSelectedInnovation] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (innovation) => {
        setSelectedInnovation(innovation);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedInnovation(null);
        setShowModal(false);
    };

    const getTypeName = (type) => {
        const types = {
            'video': 'Video',
            'image': 'Görsel',
            'podcast': 'Podcast',
            'webinar': 'Webinar'
        };
        return types[type] || type;
    };

    const getCategoryName = (category) => {
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
            'planned': 'Planlanan'
        };
        return categories[category] || category;
    };

    const getStatusName = (status) => {
        const statuses = {
            'draft': 'Taslak',
            'published': 'Yayınlanmış',
            'archived': 'Arşivlenmiş',
            'active': 'Aktif',
            'inactive': 'Pasif',
            'pending': 'Beklemede'
        };
        return statuses[status] || status;
    };

    // Tüm innovation tags'lerini topla ve benzersizleştir
    const allTags = Array.isArray(innovations) ? innovations
        .flatMap(item => item.tags ? item.tags.split(',').map(tag => tag.trim()).filter(Boolean) : [])
        .filter((tag, i, arr) => tag && arr.indexOf(tag) === i) : [];

    const keywords = [
        "inovasyon", "robotik cerrahi", "3D görüntüleme", "minimal invaziv", "omurga teknolojisi", "tıbbi yenilik", "dijital sağlık", "anatolian spine center", "gelişmiş teknoloji", "modern cerrahi", "navigasyon sistemi",
        ...allTags
    ].join(', ');

    return (
        <div>
            <Helmet>
                <title>İnovasyon Merkezi | Teknoloji ve Yenilik | Anatolian Spine Center</title>
                <meta name="description" content="Omurga sağlığı alanında öncü teknolojiler, robotik cerrahi, 3D görüntüleme ve minimal invaziv tedavi yöntemleri. Geleceğin tıbbını bugün uyguluyoruz." />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="İnovasyon Merkezi | Teknoloji ve Yenilik | Anatolian Spine Center" />
                <meta property="og:description" content="Omurga sağlığı alanında öncü teknolojiler, robotik cerrahi, 3D görüntüleme ve minimal invaziv tedavi yöntemleri." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/innovation" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="İnovasyon Merkezi | Teknoloji ve Yenilik" />
                <meta name="twitter:description" content="Omurga sağlığı alanında öncü teknolojiler, robotik cerrahi ve minimal invaziv tedavi yöntemleri." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/innovation" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalOrganization",
                        "name": "Anatolian Spine Center İnovasyon Merkezi",
                        "description": "Omurga sağlığı alanında öncü teknolojiler geliştiren inovasyon merkezi",
                        "url": "https://anatolianspinecenter.com/innovation",
                        "parentOrganization": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "İnovatif Teknolojiler",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Robotik Cerrahi"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "3D Görüntüleme"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Minimal İnvaziv Cerrahi"
                                    }
                                }
                            ]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "TR",
                            "addressLocality": "İstanbul"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            İnovasyon Merkezi
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga sağlığı alanında öncü teknolojiler geliştiriyor,
                            geleceğin tedavi yöntemlerini bugünden hayata geçiriyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Innovation Areas */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            İnovasyon Alanlarımız
                        </h2>
                        <p className="text-xl text-gray-600">
                            Teknoloji ve tıbbın buluştuğu noktalarda yenilikçi çözümler geliştiriyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Robotik Cerrahi",
                                description: "Hassas ve minimal invaziv cerrahi teknolojileri",
                                icon: "🤖",
                                color: "bg-blue-100 text-blue-800",
                                features: ["DaVinci Sistemi", "Mikro Cerrahi", "Hassas Navigasyon"]
                            },
                            {
                                title: "Yapay Zeka",
                                description: "Tanı ve tedavi süreçlerinde AI destekli çözümler",
                                icon: "🧠",
                                color: "bg-purple-100 text-purple-800",
                                features: ["Görüntü Analizi", "Tahminsel Modeller", "Akıllı Tanı"]
                            },
                            {
                                title: "AR/VR Teknolojileri",
                                description: "Sanal gerçeklik ile eğitim ve cerrahi planlama",
                                icon: "🥽",
                                color: "bg-green-100 text-green-800",
                                features: ["Cerrahi Simülasyon", "Hasta Eğitimi", "3D Görselleştirme"]
                            },
                            {
                                title: "Biyomedikal Mühendislik",
                                description: "Özel implant ve protez tasarımları",
                                icon: "⚙️",
                                color: "bg-orange-100 text-orange-800",
                                features: ["3D Baskı", "Kişisel İmplantlar", "Biyomalzemeler"]
                            },
                            {
                                title: "Dijital Sağlık",
                                description: "Mobil uygulamalar ve uzaktan hasta takibi",
                                icon: "📱",
                                color: "bg-red-100 text-red-800",
                                features: ["Telemedicine", "Mobil Apps", "IoT Sensörler"]
                            },
                            {
                                title: "Veri Analitiği",
                                description: "Büyük veri analizi ile tedavi optimizasyonu",
                                icon: "📊",
                                color: "bg-yellow-100 text-yellow-800",
                                features: ["Big Data", "Machine Learning", "Predictive Analytics"]
                            }
                        ].map((area, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {area.description}
                                </p>
                                <div className="space-y-2">
                                    {area.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Innovations */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Güncel İnovasyonlarımız
                        </h2>
                        <p className="text-xl text-gray-600">
                            Şu anda geliştirmekte olduğumuz ve uygulamaya koyduğumuz yenilikler
                        </p>
                    </div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">İnovasyonlar yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">İnovasyonlar yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(innovations) && innovations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {innovations.map((innovation) => (
                                <div
                                    key={innovation.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => openModal(innovation)}
                                >
                                    <img
                                        src={innovation.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'}
                                        alt={innovation.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded ${innovation.type === 'video' ? 'bg-purple-100 text-purple-800' :
                                                innovation.type === 'image' ? 'bg-green-100 text-green-800' :
                                                    innovation.type === 'podcast' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-blue-100 text-blue-800'
                                                }`}>
                                                {getTypeName(innovation.type)}
                                            </span>
                                            <span className={`px-2 py-1 text-xs font-semibold rounded ${innovation.status === 'published' ? 'bg-green-100 text-green-800' :
                                                innovation.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                                    innovation.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                        innovation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            innovation.status === 'inactive' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-red-100 text-red-800'
                                                }`}>
                                                {getStatusName(innovation.status)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {innovation.title}
                                        </h3>
                                        <div className="text-gray-600 mb-4 line-clamp-3">
                                            {parse(innovation.content || '')}
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                                {getCategoryName(innovation.category)}
                                            </span>
                                            {innovation.startDate && (
                                                <span>
                                                    📅 {new Date(innovation.startDate).toLocaleDateString('tr-TR')}
                                                </span>
                                            )}
                                        </div>
                                        {innovation.team && (
                                            <div className="text-sm text-gray-600 mb-3">
                                                👥 {innovation.team}
                                            </div>
                                        )}
                                        <div className="text-blue-600 text-sm font-medium">
                                            Detayları görüntüle →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Yakında inovasyonlarımızı bu sayfada görebileceksiniz.</p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Innovation Detail Modal */}
            {showModal && selectedInnovation && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                İnovasyon Detayları
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Innovation Image */}
                            {selectedInnovation.image && (
                                <img
                                    src={selectedInnovation.image}
                                    alt={selectedInnovation.title}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                            )}

                            {/* Innovation Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedInnovation.title}
                            </h1>

                            {/* Innovation Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <span className="font-semibold text-gray-700">Tür:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-sm ${selectedInnovation.type === 'video' ? 'bg-purple-100 text-purple-800' :
                                        selectedInnovation.type === 'image' ? 'bg-green-100 text-green-800' :
                                            selectedInnovation.type === 'podcast' ? 'bg-orange-100 text-orange-800' :
                                                'bg-blue-100 text-blue-800'
                                        }`}>
                                        {getTypeName(selectedInnovation.type)}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-semibold text-gray-700">Kategori:</span>
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        {getCategoryName(selectedInnovation.category)}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-semibold text-gray-700">Durum:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-sm ${selectedInnovation.status === 'published' ? 'bg-green-100 text-green-800' :
                                        selectedInnovation.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                            selectedInnovation.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                selectedInnovation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    selectedInnovation.status === 'inactive' ? 'bg-orange-100 text-orange-800' :
                                                        'bg-red-100 text-red-800'
                                        }`}>
                                        {getStatusName(selectedInnovation.status)}
                                    </span>
                                </div>

                                {selectedInnovation.startDate && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Başlangıç Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedInnovation.startDate).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedInnovation.team && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">Ekip:</span>
                                        <span className="ml-2 text-gray-600">
                                            {selectedInnovation.team}
                                        </span>
                                    </div>
                                )}

                                {selectedInnovation.createdAt && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Oluşturulma Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedInnovation.createdAt).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedInnovation.tags && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">Etiketler:</span>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {selectedInnovation.tags.split(',').map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-sm"
                                                >
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Innovation Content */}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">İçerik</h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {parse(selectedInnovation.content || 'İçerik bulunmuyor.')}
                                </div>
                            </div>
                        </div>

                        <div className="sticky bottom-0 bg-white border-t px-6 py-4 text-right">
                            <button
                                onClick={closeModal}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Kapat
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Technology Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Teknoloji Yol Haritamız
                        </h2>
                        <p className="text-xl text-gray-600">
                            İnovasyon sürecimizin aşamaları ve gelecek planlarımız
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

                        {[
                            {
                                year: "2024",
                                title: "AI Destekli Tanı Sistemi",
                                description: "Yapay zeka ile otomatik görüntü analizi ve tanı desteği",
                                status: "completed",
                                side: "left"
                            },
                            {
                                year: "2024 Q2",
                                title: "AR Cerrahi Navigasyon",
                                description: "Artırılmış gerçeklik ile ameliyat sırasında 3D rehberlik",
                                status: "active",
                                side: "right"
                            },
                            {
                                year: "2024 Q3",
                                title: "Robotik Rehabilitasyon",
                                description: "Omurga fizik tedavisi için robotik yardımcı sistemler",
                                status: "development",
                                side: "left"
                            },
                            {
                                year: "2024 Q4",
                                title: "IoT Hasta Takip",
                                description: "Akıllı sensörlerle sürekli hasta monitörizasyonu",
                                status: "planned",
                                side: "right"
                            },
                            {
                                year: "2025",
                                title: "Nano Teknoloji",
                                description: "Nano düzeyde ilaç dağıtım sistemleri",
                                status: "research",
                                side: "left"
                            }
                        ].map((item, index) => (
                            <div key={index} className={`relative flex items-center ${item.side === 'left' ? 'justify-start' : 'justify-end'} mb-8`}>
                                <div className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded ${item.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                item.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                                    item.status === 'development' ? 'bg-yellow-100 text-yellow-800' :
                                                        item.status === 'planned' ? 'bg-purple-100 text-purple-800' :
                                                            'bg-gray-100 text-gray-800'
                                                }`}>
                                                {item.status === 'completed' ? 'Tamamlandı' :
                                                    item.status === 'active' ? 'Aktif' :
                                                        item.status === 'development' ? 'Geliştirme' :
                                                            item.status === 'planned' ? 'Planlandı' : 'Araştırma'}
                                            </span>
                                            <span className="text-sm font-medium text-gray-600">{item.year}</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Lab */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            İnovasyon Laboratuvarımız
                        </h2>
                        <p className="text-xl text-gray-600">
                            En son teknolojilerle donatılmış araştırma ve geliştirme merkezi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                metric: "15",
                                label: "Aktif Proje",
                                description: "Süren inovasyon projeleri"
                            },
                            {
                                metric: "25",
                                label: "Patent Başvurusu",
                                description: "Yapılan patent başvuru sayısı"
                            },
                            {
                                metric: "8",
                                label: "Teknoloji Ortağı",
                                description: "İşbirliği yaptığımız teknoloji şirketleri"
                            },
                            {
                                metric: "50M TL",
                                label: "AR-GE Yatırımı",
                                description: "Son 3 yılda yapılan toplam yatırım"
                            }
                        ].map((stat, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {stat.metric}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {stat.label}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration */}
            <section className="py-20 bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        İnovasyon Ortaklığı
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Teknoloji şirketleri, üniversiteler ve araştırma kuruluşları ile
                        işbirliği yaparak geleceğin sağlık teknolojilerini geliştiriyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            İşbirliği Teklifimiz
                        </a>
                        <a
                            href="mailto:inovasyon@omurgaklinigi.com"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            inovasyon@omurgaklinigi.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Innovation;
