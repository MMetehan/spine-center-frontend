import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getResearches } from '../api/content.service';
import parse from 'html-react-parser';

const Research = () => {
    const { data: researches, loading, error } = useFetch(getResearches);
    const [selectedResearch, setSelectedResearch] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (research) => {
        setSelectedResearch(research);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedResearch(null);
        setShowModal(false);
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

    // Tüm research keywords'lerini topla ve benzersizleştir
    const allKeywords = Array.isArray(researches) ? researches
        .flatMap(item => item.keywords ? item.keywords.split(',').map(keyword => keyword.trim()).filter(Boolean) : [])
        .filter((keyword, i, arr) => keyword && arr.indexOf(keyword) === i) : [];

    const keywords = [
        "omurga araştırmaları", "bilimsel çalışmalar", "minimal invaziv cerrahi", "yapay zeka", "kök hücre tedavisi", "omurga cerrahisi", "spinal araştırma", "medikal araştırma", "anatolian spine center", "ortopedi araştırma", "nöroşirürji araştırma",
        ...allKeywords
    ].join(', ');

    return (
        <div>
            <Helmet>
                <title>Araştırmalarımız | Bilimsel Çalışmalar | Anatolian Spine Center</title>
                <meta name="description" content="Omurga sağlığı alanında yaptığımız bilimsel araştırmalar, yayınlar ve inovatif tedavi yöntemleri. Minimal invaziv cerrahi, yapay zeka uygulamaları ve kök hücre tedavileri." />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Araştırmalarımız | Bilimsel Çalışmalar | Anatolian Spine Center" />
                <meta property="og:description" content="Omurga sağlığı alanında yaptığımız bilimsel araştırmalar, yayınlar ve inovatif tedavi yöntemleri." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/research" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Araştırmalarımız | Bilimsel Çalışmalar" />
                <meta name="twitter:description" content="Omurga sağlığı alanında yaptığımız bilimsel araştırmalar, yayınlar ve inovatif tedavi yöntemleri." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/research" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ResearchOrganization",
                        "name": "Anatolian Spine Center Araştırma",
                        "description": "Omurga sağlığı alanında bilimsel araştırmalar yapan merkez",
                        "url": "https://anatolianspinecenter.com/research",
                        "parentOrganization": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "knowsAbout": [
                            "Minimal İnvaziv Cerrahi",
                            "Yapay Zeka Uygulamaları",
                            "Kök Hücre Tedavisi",
                            "Spinal Araştırma",
                            "Ortopedi Araştırma"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "TR",
                            "addressLocality": "İstanbul"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Araştırmalarımız
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga sağlığı alanında bilimsel araştırmalar yaparak,
                            tıp dünyasına katkı sağlıyor ve en güncel tedavi yöntemlerini hastalarımıza sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Araştırma Alanlarımız
                        </h2>
                        <p className="text-xl text-gray-600">
                            Çok disiplinli yaklaşımla omurga sağlığının farklı alanlarında çalışıyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Minimal İnvaziv Cerrahi",
                                description: "Daha az invaziv cerrahi tekniklerin geliştirilmesi ve etkinliğinin araştırılması",
                                icon: "🔬"
                            },
                            {
                                title: "Yapay Zeka Uygulamaları",
                                description: "Omurga hastalıklarının tanısında yapay zeka ve makine öğrenmesi uygulamaları",
                                icon: "🤖"
                            },
                            {
                                title: "Biyomateryal Geliştirme",
                                description: "Omurga cerrahisinde kullanılan implant ve graft materyallerinin geliştirilmesi",
                                icon: "⚗️"
                            },
                            {
                                title: "Rehabilitasyon Teknikleri",
                                description: "Omurga hastalıklarında etkili rehabilitasyon yöntemlerinin araştırılması",
                                icon: "🏃‍♂️"
                            },
                            {
                                title: "Görüntüleme Teknolojileri",
                                description: "İleri görüntüleme tekniklerinin omurga hastalıklarındaki uygulamaları",
                                icon: "📱"
                            },
                            {
                                title: "Ağrı Yönetimi",
                                description: "Kronik omurga ağrısının tedavisinde yenilikçi yaklaşımlar",
                                icon: "💊"
                            }
                        ].map((area, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="text-4xl mb-4">{area.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Published Research */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Yayınlanmış Araştırmalar
                        </h2>
                        <p className="text-xl text-gray-600">
                            Uluslararası dergilerde yayınlanan bilimsel çalışmalarımız
                        </p>
                    </div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Araştırmalar yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Araştırmalar yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(researches) && researches.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {researches.map((research) => (
                                <div
                                    key={research.id}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => openModal(research)}
                                >
                                    {research.imageUrl && (
                                        <img
                                            src={research.imageUrl}
                                            alt={research.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {research.title}
                                        </h3>
                                        <div className="text-gray-600 mb-3 line-clamp-3">
                                            {parse(research.content || '')}
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                                {getCategoryName(research.category)}
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs ${research.status === 'published' ? 'bg-green-100 text-green-800' :
                                                research.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                    research.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-blue-100 text-blue-800'
                                                }`}>
                                                {getStatusName(research.status)}
                                            </span>
                                        </div>
                                        {research.publishDate && (
                                            <div className="mt-2 text-sm text-gray-500">
                                                📅 {new Date(research.publishDate).toLocaleDateString('tr-TR')}
                                            </div>
                                        )}
                                        <div className="mt-3 text-blue-600 text-sm font-medium">
                                            Detayları görüntüle →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Yakında yayınlanmış araştırmalarımızı bu sayfada görebileceksiniz.</p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Research Detail Modal */}
            {showModal && selectedResearch && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Araştırma Detayları
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Research Image */}
                            {selectedResearch.imageUrl && (
                                <img
                                    src={selectedResearch.imageUrl}
                                    alt={selectedResearch.title}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                            )}

                            {/* Research Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedResearch.title}
                            </h1>

                            {/* Research Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <span className="font-semibold text-gray-700">Kategori:</span>
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        {getCategoryName(selectedResearch.category)}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-semibold text-gray-700">Durum:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-sm ${selectedResearch.status === 'published' ? 'bg-green-100 text-green-800' :
                                        selectedResearch.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                            selectedResearch.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                        }`}>
                                        {getStatusName(selectedResearch.status)}
                                    </span>
                                </div>

                                {selectedResearch.publishDate && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Yayın Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedResearch.publishDate).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedResearch.createdAt && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Oluşturulma Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedResearch.createdAt).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedResearch.doi && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">DOI:</span>
                                        <a
                                            href={`https://doi.org/${selectedResearch.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-blue-600 hover:text-blue-800"
                                        >
                                            {selectedResearch.doi} ↗
                                        </a>
                                    </div>
                                )}

                                {selectedResearch.keywords && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">Anahtar Kelimeler:</span>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {selectedResearch.keywords.split(',').map((keyword, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                                                >
                                                    {keyword.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Research Content */}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">İçerik</h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {parse(selectedResearch.content || 'İçerik bulunmuyor.')}
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


            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Araştırmalarımızla İlgili Bilgi Almak İster misiniz?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Bilimsel çalışmalarımız hakkında detaylı bilgi almak veya işbirliği teklifleriniz için bizimle iletişime geçin.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        İletişime Geçin
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Research;
