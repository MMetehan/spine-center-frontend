import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getTreatment } from '../api/content.service';
import parse from "html-react-parser"

const TreatmentDetail = () => {
    const { slug } = useParams();
    const { data: treatment, loading, error } = useFetch(() => getTreatment(slug), [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error || !treatment) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h1>
                    <p className="text-gray-600 mb-6">Aradığınız tedavi bulunamadı.</p>
                    <a href="/treatments" className="text-blue-600 hover:text-blue-800">
                        Tedaviler sayfasına dön
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>{treatment?.title || treatment?.name} | Tedavi Detayı | Anatolian Spine Center</title>
                <meta name="description" content={`${treatment?.title || treatment?.name} tedavisi hakkında detaylı bilgi. ${treatment?.summary || treatment?.description || 'Omurga sağlığınız için uzman tedavi çözümleri.'}`} />
                <meta name="keywords" content={`${treatment?.title || treatment?.name}, omurga tedavisi, ${treatment?.category || 'omurga hastalığı'}, disk hernisi, bel ağrısı, boyun ağrısı, anatolian spine center, ortopedi, nöroşirürji`} />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${treatment?.title || treatment?.name} | Tedavi Detayı`} />
                <meta property="og:description" content={`${treatment?.title || treatment?.name} tedavisi hakkında detaylı bilgi. ${treatment?.summary || 'Omurga sağlığınız için uzman tedavi çözümleri.'}`} />
                <meta property="og:image" content={treatment?.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content={`https://anatolianspinecenter.com/treatments/${slug}`} />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />
                <meta property="article:author" content="Anatolian Spine Center" />
                <meta property="article:section" content="Medical Treatment" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${treatment?.title || treatment?.name} | Tedavi Detayı`} />
                <meta name="twitter:description" content={`${treatment?.title || treatment?.name} tedavisi hakkında detaylı bilgi.`} />
                <meta name="twitter:image" content={treatment?.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://anatolianspinecenter.com/treatments/${slug}`} />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "name": treatment?.title || treatment?.name,
                        "description": treatment?.summary || treatment?.description,
                        "url": `https://anatolianspinecenter.com/treatments/${slug}`,
                        "dateModified": treatment?.updatedAt || new Date().toISOString(),
                        "mainEntity": {
                            "@type": "MedicalProcedure",
                            "name": treatment?.title || treatment?.name,
                            "description": treatment?.summary || treatment?.description,
                            "procedureType": treatment?.category || "Omurga Tedavisi"
                        },
                        "provider": {
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {treatment?.title || treatment?.name || 'Tedavi Detayı'}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {parse(treatment?.summary || treatment?.description || '')}
                            </p>
                        </div>
                        <div>
                            <img
                                src={treatment?.imageUrl || treatment?.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                                alt={treatment?.title || treatment?.name || 'Tedavi'}
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Details */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            <div>
                                {parse(treatment?.content || treatment?.summary || 'Tedavi bilgileri yükleniyor...')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Bu Tedavi Size Uygun mu?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Uzman doktorlarımızla görüşerek size en uygun tedavi planını belirleyin
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

            {/* Back Button */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <a
                        href="/treatments"
                        className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    >
                        ← Tüm Tedavilere Dön
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TreatmentDetail;
