import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { useFetch } from '../hooks/useFetch';
import { getTeam, getTreatments, getNews } from '../api/content.service';
import TeamCard from '../components/TeamCard';
import TreatmentCard from '../components/TreatmentCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data: team } = useFetch(getTeam);
    const { data: treatments } = useFetch(getTreatments);
    const { data: news } = useFetch(getNews);

    return (
        <div>
            <Helmet>
                <title>Omurga Kliniği - Modern Omurga Tedavileri | Ana Sayfa</title>
                <meta name="description" content="Uzman kadromuz ve son teknoloji ekipmanlarımızla omurga sağlığınız için en etkili tedavi yöntemlerini sunuyoruz. Minimal invaziv cerrahi, fizik tedavi ve ağrı yönetimi hizmetleri." />
                <meta name="keywords" content="omurga kliniği, omurga tedavisi, nöroşirürji, minimal invaziv cerrahi, fizik tedavi, ağrı yönetimi, omurga cerrahisi, sırt ağrısı tedavisi" />
                <meta property="og:title" content="Omurga Kliniği - Modern Omurga Tedavileri" />
                <meta property="og:description" content="Uzman kadromuz ve son teknoloji ekipmanlarımızla omurga sağlığınız için en etkili tedavi yöntemlerini sunuyoruz." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omurgaklinigi.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Omurga Kliniği - Modern Omurga Tedavileri" />
                <meta name="twitter:description" content="Uzman kadromuz ve son teknoloji ekipmanlarımızla omurga sağlığınız için en etkili tedavi yöntemlerini sunuyoruz." />
                <link rel="canonical" href="https://omurgaklinigi.com" />
            </Helmet>

            <Hero />

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tedavi Hizmetlerimiz
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern teknoloji ve uzman kadromuzla omurga sağlığınız için kapsamlı tedavi seçenekleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(treatments) && treatments.slice(0, 6).map((treatment) => (
                            <TreatmentCard key={treatment.id} treatment={treatment} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/treatments"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Tüm Tedavileri Görüntüle
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Uzman Ekibimiz
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alanında uzman doktorlarımız ve deneyimli sağlık personelimizle sizlere hizmet veriyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(team) && team.slice(0, 3).map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/team"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Tüm Ekibi Görüntüle
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div className="text-blue-100">Yıl Deneyim</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                            <div className="text-blue-100">Başarılı Tedavi</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-blue-100">Uzman Personel</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-blue-100">Acil Hizmet</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            {Array.isArray(news) && news.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Haberler
                            </h2>
                            <p className="text-xl text-gray-600">
                                Kliniğimizden son haberler ve gelişmeler
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {news.slice(0, 3).map((item) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <img
                                        src={item.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {item.summary}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                to="/news"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Tüm Haberleri Görüntüle
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;
