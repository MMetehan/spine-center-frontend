import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getProjects } from '../api/content.service';
import parse from 'html-react-parser';

const Projects = () => {
    const { data: projects, loading, error } = useFetch(getProjects);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    return (
        <div>
            <Helmet>
                <title>Projelerimiz | Sağlık Projeleri | Anatolian Spine Center</title>
                <meta name="description" content="Omurga sağlığı alanında yürüttüğümüz araştırma projeleri, sosyal sorumluluk çalışmaları ve hasta odaklı projelerimiz. Toplum sağlığına katkı sağlıyoruz." />
                <meta name="keywords" content="sağlık projeleri, omurga projeleri, araştırma projeleri, sosyal sorumluluk, hasta projeleri, anatolian spine center, toplum sağlığı, medikal projeler, klinik çalışmalar" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Projelerimiz | Sağlık Projeleri | Anatolian Spine Center" />
                <meta property="og:description" content="Omurga sağlığı alanında yürüttüğümüz araştırma projeleri, sosyal sorumluluk çalışmaları ve hasta odaklı projelerimiz." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/projects" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Projelerimiz | Sağlık Projeleri" />
                <meta name="twitter:description" content="Omurga sağlığı alanında yürüttüğümüz araştırma projeleri ve sosyal sorumluluk çalışmaları." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/projects" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ResearchProject",
                        "name": "Anatolian Spine Center Projeleri",
                        "description": "Omurga sağlığı alanında yürüttüğümüz araştırma projeleri ve sosyal sorumluluk çalışmaları",
                        "url": "https://anatolianspinecenter.com/projects",
                        "provider": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "about": [
                            "Omurga Sağlığı",
                            "Araştırma Projeleri",
                            "Sosyal Sorumluluk",
                            "Hasta Odaklı Projeler"
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
            <section className="bg-gradient-to-br from-green-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Projelerimiz
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga sağlığı alanında yenilikçi projeler geliştiriyor,
                            hastalarımıza daha iyi hizmet sunmak için sürekli çalışıyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Proje Kategorileri
                        </h2>
                        <p className="text-xl text-gray-600">
                            Farklı alanlarda yürüttüğümüz projelerle omurga sağlığına katkı sağlıyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Teknoloji Geliştirme",
                                description: "Cerrahi robotlar, AR/VR uygulamaları ve dijital sağlık çözümleri",
                                icon: "🚀",
                                color: "bg-blue-100 text-blue-800"
                            },
                            {
                                title: "Eğitim ve Öğretim",
                                description: "Tıp eğitimi, hasta eğitimi ve sağlık personeli gelişim programları",
                                icon: "📚",
                                color: "bg-green-100 text-green-800"
                            },
                            {
                                title: "Toplum Sağlığı",
                                description: "Omurga sağlığı farkındalığı ve koruyucu tıp uygulamaları",
                                icon: "🏥",
                                color: "bg-purple-100 text-purple-800"
                            },
                            {
                                title: "Uluslararası İşbirlikleri",
                                description: "Küresel sağlık kuruluşları ile ortak projeler ve bilgi paylaşımı",
                                icon: "🌍",
                                color: "bg-orange-100 text-orange-800"
                            },
                            {
                                title: "Kalite Geliştirme",
                                description: "Hasta güvenliği, hizmet kalitesi ve süreç iyileştirme projeleri",
                                icon: "⭐",
                                color: "bg-yellow-100 text-yellow-800"
                            },
                            {
                                title: "Sürdürülebilirlik",
                                description: "Çevre dostu hastane işletimi ve yeşil sağlık uygulamaları",
                                icon: "🌱",
                                color: "bg-emerald-100 text-emerald-800"
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

            {/* Active Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Aktif Projelerimiz
                        </h2>
                        <p className="text-xl text-gray-600">
                            Şu anda yürüttüğümüz ve yakında tamamlanacak projelerimiz
                        </p>
                    </div>

                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Projeler yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Projeler yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(projects) && projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => openModal(project)}
                                >
                                    <img
                                        src={project.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {project.title}
                                        </h3>
                                        <div className="text-gray-600 mb-4 line-clamp-3">
                                            {parse(project.summary || '')}
                                        </div>
                                        {project.createdAt && (
                                            <div className="text-sm text-gray-500 mb-3">
                                                📅 {new Date(project.createdAt).toLocaleDateString('tr-TR')}
                                            </div>
                                        )}
                                        {project.link && (
                                            <div className="text-sm text-blue-600 mb-3">
                                                🔗 Proje Linki Mevcut
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
                                <p className="text-gray-600">Yakında projelerimizi bu sayfada görebileceksiniz.</p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Project Detail Modal */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Proje Detayları
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Project Image */}
                            {selectedProject.imageUrl && (
                                <img
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                            )}

                            {/* Project Title */}
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedProject.title}
                            </h1>

                            {/* Project Meta Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                {selectedProject.createdAt && (
                                    <div>
                                        <span className="font-semibold text-gray-700">Oluşturulma Tarihi:</span>
                                        <span className="ml-2 text-gray-600">
                                            {new Date(selectedProject.createdAt).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                )}

                                {selectedProject.link && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold text-gray-700">Proje Linki:</span>
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-blue-600 hover:text-blue-800 break-all"
                                        >
                                            {selectedProject.link} ↗
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proje Özeti</h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {parse(selectedProject.summary || 'Özet bulunmuyor.')}
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


            {/* Partnership */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Proje Ortaklığı
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Omurga sağlığı alanında yenilikçi projeler geliştirmek için sizinle işbirliği yapmaya hazırız.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Ortaklık Teklifimiz İçin İletişime Geçin
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
