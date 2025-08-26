import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getTeamMember } from '../api/content.service';
import parse from "html-react-parser"

const TeamMember = () => {
    const { id } = useParams();
    const { data: member, loading, error } = useFetch(() => getTeamMember(id), [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error || !member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h1>
                    <p className="text-gray-600 mb-6">Aradığınız ekip üyesi bulunamadı.</p>
                    <a href="/team" className="text-blue-600 hover:text-blue-800">
                        Ekip sayfasına dön
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>{member.name} | {member.title} | Anatolian Spine Center</title>
                <meta name="description" content={`${member.name} - ${member.title}. Anatolian Spine Center'da omurga sağlığınız için uzman hekimimiz. Randevu almak için hemen iletişime geçin.`} />
                <meta name="keywords" content={`${member.name}, ${member.title}, omurga uzmanı, omurga doktoru, ortopedi uzmanı, nöroşirürji uzmanı, beyin cerrahı, omurga ameliyatı, disk hernisi tedavisi, spondilolistezis, skolyoz, anatolian spine center`} />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="profile" />
                <meta property="og:title" content={`${member.name} | ${member.title}`} />
                <meta property="og:description" content={`${member.name} - ${member.title}. Anatolian Spine Center'da omurga sağlığınız için uzman hekimimiz.`} />
                <meta property="og:image" content={member.imageUrl || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content={`https://anatolianspinecenter.com/team/${id}`} />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${member.name} | ${member.title}`} />
                <meta name="twitter:description" content={`${member.name} - ${member.title}. Anatolian Spine Center'da omurga sağlığınız için uzman hekimimiz.`} />
                <meta name="twitter:image" content={member.imageUrl || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'} />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://anatolianspinecenter.com/team/${id}`} />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": member.name,
                        "jobTitle": member.title,
                        "worksFor": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com"
                        },
                        "image": member.imageUrl || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        "description": member.description || member.bio,
                        "url": `https://anatolianspinecenter.com/team/${id}`,
                        "sameAs": [],
                        "medicalSpecialty": member.specializations || []
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Image */}
                            <div className="md:w-1/3">
                                <img
                                    src={member.imageUrl || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'}
                                    alt={member.name}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="md:w-2/3 p-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h1>
                                <h2 className="text-xl text-blue-600 font-semibold mb-6">
                                    {member.title}
                                </h2>

                                {/* Description */}
                                <div className="prose prose-gray max-w-none mb-8">
                                    <p className="text-gray-600 leading-relaxed">
                                        {parse(member.description || member.bio)}
                                    </p>
                                </div>

                                {/* Education */}
                                {member.education && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Eğitim</h3>
                                        <ul className="space-y-2">
                                            {member.education.map((edu, index) => (
                                                <li key={index} className="text-gray-600">
                                                    <span className="font-medium">{edu.degree}</span> - {edu.institution}
                                                    {edu.year && <span className="text-gray-500"> ({edu.year})</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Specializations */}
                                {member.specializations && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Uzmanlık Alanları</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {member.specializations.map((spec, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <a
                            href="/team"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            ← Ekip Sayfasına Dön
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
