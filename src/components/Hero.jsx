import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Modern Omurga
                            <span className="text-blue-600"> Tedavileri</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Uzman kadromuz ve son teknoloji ekipmanlarımızla omurga sağlığınız için
                            en etkili tedavi yöntemlerini sunuyoruz. Sağlıklı bir yaşam için doğru adres.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/appointment"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                            >
                                Randevu Al
                            </Link>
                            <Link
                                to="/contact"
                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                            >
                                Bize Ulaşın
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Modern spine treatment facility"
                            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">15+</div>
                                <div className="text-gray-600">Yıl Deneyim</div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">1000+</div>
                                <div className="text-gray-600">Başarılı Tedavi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
