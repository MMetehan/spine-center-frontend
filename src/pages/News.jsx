import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getNews } from '../api/content.service';
import parse from 'html-react-parser';

const News = () => {
    const { data: news, loading, error } = useFetch(getNews);
    const [selectedNews, setSelectedNews] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (newsItem) => {
        setSelectedNews(newsItem);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedNews(null);
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

    // Sadece yayınlanmış ve aktif haberleri göster
    const filteredNews = Array.isArray(news) ? news.filter(newsItem =>
        newsItem.status === 'published' || newsItem.status === 'active'
    ) : [];

    // Tüm news taglerini topla ve benzersizleştir
    const allTags = filteredNews
        .flatMap(item => item.tags ? item.tags.split(',').map(tag => tag.trim()).filter(Boolean) : [])
        .filter((tag, i, arr) => tag && arr.indexOf(tag) === i);

    const keywords = [
        "haberler", "duyurular", "omurga haberleri", "tıbbi gelişmeler", "etkinlikler", "basın açıklamaları", "anatolian spine center", "sağlık haberleri", "omurga sağlığı",
        ...allTags
    ].join(', ');

    return (
        <div>
            <Helmet>
                <title>Haberler ve Duyurular | Güncel Gelişmeler | Anatolian Spine Center</title>
                <meta name="description" content="Anatolian Spine Center'dan son haberler, tıbbi gelişmeler, etkinlik duyuruları ve omurga sağlığı ile ilgili güncel bilgiler." />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Haberler ve Duyurular | Güncel Gelişmeler | Anatolian Spine Center" />
                <meta property="og:description" content="Anatolian Spine Center'dan son haberler, tıbbi gelişmeler ve omurga sağlığı ile ilgili güncel bilgiler." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/news" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Haberler ve Duyurular | Güncel Gelişmeler" />
                <meta name="twitter:description" content="Anatolian Spine Center'dan son haberler, tıbbi gelişmeler ve güncel bilgiler." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/news" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Haberler ve Duyurular",
                        "description": "Anatolian Spine Center'dan güncel haberler ve duyurular",
                        "url": "https://anatolianspinecenter.com/news",
                        "mainEntity": {
                            "@type": "ItemList",
                            "name": "Haberler",
                            "description": "Omurga sağlığı ve klinik gelişmeleri ile ilgili haberler"
                        },
                        "publisher": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com",
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
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Haberler
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Kliniğimizden son haberler, gelişmeler ve sağlık ile ilgili güncel bilgiler
                        </p>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Haberler yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Haberler yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {filteredNews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNews.map((item) => (
                                <article
                                    key={item.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => openModal(item)}
                                >
                                    <img
                                        src={item.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <time dateTime={item.publishDate || item.createdAt}>
                                                {new Date(item.publishDate || item.createdAt).toLocaleDateString('tr-TR')}
                                            </time>
                                            {item.category && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-blue-600">{getCategoryName(item.category)}</span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                            {item.title}
                                        </h2>
                                        <div className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {item.summary || parse(item.content || '').props?.children?.substring(0, 150) + '...'}
                                        </div>
                                        {item.author && (
                                            <div className="text-sm text-gray-500 mb-3">
                                                👤 {item.author}
                                            </div>
                                        )}
                                        <div className="mt-2 flex flex-wrap gap-2 mb-2">
                                            {item.tags.split(',').filter(tag => tag.trim()).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                                                >
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                            Devamını Oku →
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>

            {/* News Detail Modal */}
            {showModal && selectedNews && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Haber Detayı
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {/* News Image */}
                            {selectedNews.imageUrl && (
                                <img
                                    src={selectedNews.imageUrl}
                                    alt={selectedNews.title}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                            )}

                            {/* News Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedNews.title}
                            </h1>

                            {/* News Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <span className="font-semibold text-gray-700">Kategori:</span>
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        {getCategoryName(selectedNews.category)}
                                    </span>
                                </div>

                                <div>
                                    <span className="font-semibold text-gray-700">Durum:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-sm ${selectedNews.status === 'published' ? 'bg-green-100 text-green-800' :
                                        selectedNews.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                        {getStatusName(selectedNews.status)}
                                    </span>
                                </div>

                                {selectedNews.publishDate && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Yayın Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedNews.publishDate).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedNews.author && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Yazar:</span>
                                        <span className="ml-2 text-gray-600">
                                            {selectedNews.author}
                                        </span>
                                    </div>
                                )}

                                {selectedNews.createdAt && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Oluşturulma Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedNews.createdAt).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedNews.tags && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">Etiketler:</span>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {selectedNews.tags.split(',').filter(tag => tag.trim()).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                                                >
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* News Summary */}
                            {selectedNews.summary && (
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Özet</h3>
                                    <p className="text-gray-700">
                                        {selectedNews.summary}
                                    </p>
                                </div>
                            )}

                            {/* News Content */}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">İçerik</h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {parse(selectedNews.content || 'İçerik bulunmuyor.')}
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
        </div>
    );
};

export default News;
