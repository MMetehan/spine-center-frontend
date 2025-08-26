import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Hakkımızda - Omurga Kliniği | Uzman Kadro ve Modern Teknoloji</title>
                <meta name="description" content="Omurga Kliniği olarak 15 yılı aşkın deneyimimizle modern teknoloji ve uzman kadromuzla hizmet veriyoruz. Hasta odaklı yaklaşım, kaliteli sağlık hizmeti." />
                <meta name="keywords" content="omurga kliniği hakkında, omurga tedavi merkezi, nöroşirürji kliniği, omurga cerrahisi merkezi, sağlık hizmetleri, hasta odaklı tedavi" />
                <meta property="og:title" content="Hakkımızda - Omurga Kliniği" />
                <meta property="og:description" content="15 yılı aşkın deneyimimizle modern teknoloji ve uzman kadromuzla omurga sağlığınıza çözüm sunuyoruz." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://omurgaklinigi.com/about" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Hakkımızda - Omurga Kliniği" />
                <meta name="twitter:description" content="15 yılı aşkın deneyimimizle modern teknoloji ve uzman kadromuzla omurga sağlığınıza çözüm sunuyoruz." />
                <link rel="canonical" href="https://omurgaklinigi.com/about" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Hakkımızda
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern omurga tedavileri alanında öncü, hasta odaklı yaklaşımla hizmet veren kliniğimiz
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Omurga sağlığı alanında en son teknoloji ve bilimsel yöntemleri kullanarak,
                                hastalarımıza en kaliteli tedavi hizmetini sunmak ve yaşam kalitelerini artırmaktır.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Multidisipliner yaklaşımımızla, her hastamıza özel tedavi planları oluşturarak,
                                cerrahisiz tedavi seçeneklerini önceleyerek sağlık hizmetleri sunuyoruz.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern medical equipment"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Değerlerimiz
                        </h2>
                        <p className="text-xl text-gray-600">
                            Hastalarımıza sunduğumuz hizmette rehber aldığımız temel değerler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Empati</h3>
                            <p className="text-gray-600">
                                Her hastamızın durumunu anlayarak, onların perspektifinden yaklaşım sergiliyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kalite</h3>
                            <p className="text-gray-600">
                                Uluslararası standartlarda hizmet kalitesi ve hasta güvenliği önceliğimizdir.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">İnovasyon</h3>
                            <p className="text-gray-600">
                                Sürekli gelişen teknoloji ve yöntemleri takip ederek hastalarımıza en iyisini sunuyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Medical team"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tarihçemiz</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-600 mb-2">2008 - Kuruluş</h3>
                                    <p className="text-gray-600">
                                        Omurga hastalıkları alanında uzmanlaşmış bir ekip tarafından kurulduk.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-600 mb-2">2015 - Genişleme</h3>
                                    <p className="text-gray-600">
                                        Modern ameliyathaneler ve ileri teknoloji cihazlarla donanımımızı genişlettik.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-600 mb-2">2020 - Dijitalleşme</h3>
                                    <p className="text-gray-600">
                                        Dijital sağlık sistemleri ve telemedicine hizmetlerini entegre ettik.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-600 mb-2">2023 - Bugün</h3>
                                    <p className="text-gray-600">
                                        1000'den fazla başarılı tedavi ile bölgenin önde gelen omurga kliniği olduk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificates & Awards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sertifikalar ve Ödüller
                        </h2>
                        <p className="text-xl text-gray-600">
                            Kalite standartlarımızı belgeleyen sertifikalar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-4xl mb-4">🏆</div>
                                <h3 className="font-semibold text-gray-900 mb-2">ISO 9001</h3>
                                <p className="text-gray-600 text-sm">Kalite Yönetim Sistemi</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-4xl mb-4">🎖️</div>
                                <h3 className="font-semibold text-gray-900 mb-2">JCI Akreditasyonu</h3>
                                <p className="text-gray-600 text-sm">Uluslararası Standartlar</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-4xl mb-4">🌟</div>
                                <h3 className="font-semibold text-gray-900 mb-2">Hasta Memnuniyeti</h3>
                                <p className="text-gray-600 text-sm">%98 Memnuniyet Oranı</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-4xl mb-4">🔬</div>
                                <h3 className="font-semibold text-gray-900 mb-2">Araştırma Merkezi</h3>
                                <p className="text-gray-600 text-sm">Onaylı Araştırma Merkezi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
