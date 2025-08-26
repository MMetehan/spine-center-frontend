import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getTeam } from '../api/content.service';
import TeamCard from '../components/TeamCard';



const Team = () => {
    const { data: team, loading, error } = useFetch(getTeam);

    return (
        <div>
            <Helmet>
                <title>Ekibimiz - Omurga Kliniği | Uzman Doktor Kadrosu</title>
                <meta name="description" content="Alanında uzman doktorlarımız ve deneyimli sağlık personelimizle sizlere hizmet veriyoruz. Nöroşirürji, ortopedi ve fizik tedavi uzmanları." />
                <meta name="keywords" content="omurga doktorları, nöroşirürji uzmanı, ortopedi doktoru, fizik tedavi uzmanı, omurga cerrahı, sırt ağrısı doktoru, omurga kliniği doktorları" />
                <meta property="og:title" content="Ekibimiz - Omurga Kliniği" />
                <meta property="og:description" content="Alanında uzman doktorlarımız ve deneyimli sağlık personelimizle omurga sağlığınız için en iyi hizmeti sunuyoruz." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omurgaklinigi.com/team" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Ekibimiz - Omurga Kliniği" />
                <meta name="twitter:description" content="Uzman doktor kadromuz ve deneyimli sağlık personelimizle omurga sağlığınız için hizmetinizdeyiz." />
                <link rel="canonical" href="https://omurgaklinigi.com/team" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Uzman Ekibimiz
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alanında uzman doktorlarımız ve deneyimli sağlık personelimizle
                            omurga sağlığınız için en iyi hizmeti sunuyoruz
                        </p>
                    </div>
                </div>


            </section>
            {/* Team Members */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">Ekip bilgileri yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">Ekip bilgileri yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(team) && (
                        <>
                            {/* Other Staff */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                    Doktorlarımız
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {team.map((member) => (
                                        <TeamCard key={member.id} member={member} />
                                    ))}
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </section>

            {/* Join Our Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Ekibimize Katılın
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Omurga sağlığı alanında öncü olmaya devam eden ekibimizde yer almak istiyorsanız,
                        başvurularınızı bekliyoruz.
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            İletişime Geçin
                        </a>
                        <a
                            href="mailto:kariyer@omurgaklinigi.com"
                            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            Kariyer Başvurusu
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
