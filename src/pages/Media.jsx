import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getMedia } from '../api/content.service';

const Media = () => {
    const { data: media, loading, error } = useFetch(getMedia);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (mediaItem) => {
        setSelectedMedia(mediaItem);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedMedia(null);
        setShowModal(false);
    };

    return (
        <div>
            <Helmet>
                <title>Medya Merkezi | Basın ve Yayın | Anatolian Spine Center</title>
                <meta name="description" content="Anatolian Spine Center medya merkezi. Basın açıklamaları, videolar, röportajlar ve omurga sağlığı ile ilgili medya içeriklerimiz." />
                <meta name="keywords" content="medya merkezi, basın açıklamaları, videolar, röportajlar, sağlık haberleri, omurga medya, anatolian spine center, basın odası, medya içerikleri, tv programları" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Medya Merkezi | Basın ve Yayın | Anatolian Spine Center" />
                <meta property="og:description" content="Anatolian Spine Center medya merkezi. Basın açıklamaları, videolar ve omurga sağlığı ile ilgili medya içeriklerimiz." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/media" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Medya Merkezi | Basın ve Yayın" />
                <meta name="twitter:description" content="Anatolian Spine Center medya merkezi. Basın açıklamaları, videolar ve medya içeriklerimiz." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/media" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MediaObject",
                        "name": "Anatolian Spine Center Medya Merkezi",
                        "description": "Basın açıklamaları, videolar ve omurga sağlığı ile ilgili medya içerikleri",
                        "url": "https://anatolianspinecenter.com/media",
                        "provider": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "publisher": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "TR",
                                "addressLocality": "İstanbul"
                            }
                        },
                        "about": {
                            "@type": "Thing",
                            "name": "Omurga Sağlığı Medya İçerikleri"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Medya Merkezi
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga sağlığı alanındaki gelişmeler, haberler ve etkinliklerimizle
                            ilgili güncel bilgileri takip edin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Son Haberler
                        </h2>
                        <p className="text-xl text-gray-600">
                            Kliniğimizden son gelişmeler ve duyurular
                        </p>
                    </div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Medya içerikleri yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Medya içerikleri yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(media) && media.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {media.slice(0, 6).map((item) => (
                                <article key={item.id} onClick={() => openModal(item)} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                    <img
                                        src={item.thumbnail || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded ${item.type === 'news' ? 'bg-blue-100 text-blue-800' :
                                                item.type === 'video' ? 'bg-red-100 text-red-800' :
                                                    item.type === 'press' ? 'bg-green-100 text-green-800' :
                                                        'bg-purple-100 text-purple-800'
                                                }`}>
                                                {item.type === 'news' ? 'Haber' :
                                                    item.type === 'video' ? 'Video' :
                                                        item.type === 'press' ? 'Basın' : 'Medya'}
                                            </span>
                                            {item.publishDate && (
                                                <span className="text-xs text-gray-500">
                                                    {new Date(item.publishDate).toLocaleDateString('tr-TR')}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {item.content || item.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <button
                                                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                                            >
                                                Detayları Gör →
                                            </button>
                                            {item.author && (
                                                <span className="text-xs text-gray-500">
                                                    {item.author}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">Yakında medya içeriklerimizi bu sayfada görebileceksiniz.</p>
                            </div>
                        )
                    )}

                    {Array.isArray(media) && media.length > 6 && (
                        <div className="text-center mt-12">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Tüm Haberleri Gör
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Media Detail Modal */}
            {showModal && selectedMedia && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center space-x-3">
                                <span className={`px-3 py-1 text-sm font-semibold rounded ${selectedMedia.type === 'news' ? 'bg-blue-100 text-blue-800' :
                                    selectedMedia.type === 'video' ? 'bg-red-100 text-red-800' :
                                        selectedMedia.type === 'press' ? 'bg-green-100 text-green-800' :
                                            'bg-purple-100 text-purple-800'
                                    }`}>
                                    {selectedMedia.type === 'news' ? '📰 Haber' :
                                        selectedMedia.type === 'video' ? '🎥 Video' :
                                            selectedMedia.type === 'press' ? '📢 Basın' : '📸 Medya'}
                                </span>
                                {selectedMedia.publishDate && (
                                    <span className="text-sm text-gray-500">
                                        {new Date(selectedMedia.publishDate).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                            {/* Media Image/Video */}
                            <div className="relative">
                                {selectedMedia.type === 'video' && selectedMedia.url ? (
                                    <div className="aspect-video bg-black">
                                        {selectedMedia.url.includes('youtube.com') || selectedMedia.url.includes('youtu.be') ? (
                                            <iframe
                                                src={selectedMedia.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                allowFullScreen
                                                title={selectedMedia.title}
                                            />
                                        ) : (
                                            <video
                                                controls
                                                className="w-full h-full"
                                                poster={selectedMedia.thumbnail}
                                            >
                                                <source src={selectedMedia.url} type="video/mp4" />
                                                Tarayıcınız video oynatmayı desteklemiyor.
                                            </video>
                                        )}
                                    </div>
                                ) : (
                                    <img
                                        src={selectedMedia.thumbnail || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                                        alt={selectedMedia.title}
                                        className="w-full h-64 object-cover"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {selectedMedia.title}
                                </h2>

                                {selectedMedia.description && (
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {selectedMedia.description}
                                    </p>
                                )}

                                {selectedMedia.content && (
                                    <div className="prose max-w-none">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                            {selectedMedia.content}
                                        </div>
                                    </div>
                                )}

                                {/* Media Info */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {selectedMedia.author && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Yazar</h4>
                                                <p className="text-gray-600">{selectedMedia.author}</p>
                                            </div>
                                        )}
                                        {selectedMedia.category && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Kategori</h4>
                                                <p className="text-gray-600 capitalize">{selectedMedia.category}</p>
                                            </div>
                                        )}
                                        {selectedMedia.url && selectedMedia.type !== 'video' && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Kaynak</h4>
                                                <a
                                                    href={selectedMedia.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 break-all"
                                                >
                                                    Orijinal Kaynağa Git →
                                                </a>
                                            </div>
                                        )}
                                        {selectedMedia.publishDate && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Yayın Tarihi</h4>
                                                <p className="text-gray-600">
                                                    {new Date(selectedMedia.publishDate).toLocaleDateString('tr-TR', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Social Share */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Paylaş</h4>
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => {
                                                if (navigator.share) {
                                                    navigator.share({
                                                        title: selectedMedia.title,
                                                        text: selectedMedia.description,
                                                        url: window.location.href
                                                    });
                                                }
                                            }}
                                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                            <span>Paylaş</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Medya İletişim
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Basın mensupları ve medya temsilcileri için özel iletişim kanalımızdan
                        bizimle iletişime geçebilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:basin@omurgaklinigi.com"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            basin@omurgaklinigi.com
                        </a>
                        <a
                            href="tel:+902121234567"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            +90 212 123 45 67
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;