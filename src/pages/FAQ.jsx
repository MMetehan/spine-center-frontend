import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useFetch } from '../hooks/useFetch';
import { getFAQ } from '../api/content.service';

const FAQ = () => {
    const { data: faqs, loading, error } = useFetch(getFAQ);

    return (
        <div>
            <Helmet>
                <title>Sıkça Sorulan Sorular | SSS | Anatolian Spine Center</title>
                <meta name="description" content="Omurga tedavileri, disk hernisi, bel ağrısı, boyun ağrısı ve kliniğimiz hakkında sıkça sorulan sorular ve detaylı cevapları. Merak ettiklerinizin yanıtları burada." />
                <meta name="keywords" content="sıkça sorulan sorular, SSS, omurga tedavisi soruları, disk hernisi SSS, bel ağrısı soruları, boyun ağrısı, cerrahi sorular, anatolian spine center, tedavi süreçleri, randevu soruları" />
                <meta name="author" content="Anatolian Spine Center" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="tr" />
                <meta name="geo.region" content="TR" />
                <meta name="geo.placename" content="İstanbul" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sıkça Sorulan Sorular | SSS | Anatolian Spine Center" />
                <meta property="og:description" content="Omurga tedavileri, disk hernisi, bel ağrısı ve kliniğimiz hakkında sıkça sorulan sorular ve detaylı cevapları." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://anatolianspinecenter.com/faq" />
                <meta property="og:site_name" content="Anatolian Spine Center" />
                <meta property="og:locale" content="tr_TR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sıkça Sorulan Sorular | SSS" />
                <meta name="twitter:description" content="Omurga tedavileri ve kliniğimiz hakkında merak ettiklerinizin yanıtları." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:site" content="@anatolianspine" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://anatolianspinecenter.com/faq" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "name": "Sıkça Sorulan Sorular",
                        "description": "Omurga tedavileri ve klinik hizmetleri hakkında sıkça sorulan sorular",
                        "url": "https://anatolianspinecenter.com/faq",
                        "publisher": {
                            "@type": "MedicalOrganization",
                            "name": "Anatolian Spine Center",
                            "url": "https://anatolianspinecenter.com",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "TR",
                                "addressLocality": "İstanbul"
                            }
                        },
                        "mainEntity": {
                            "@type": "ItemList",
                            "name": "Frequently Asked Questions",
                            "description": "Omurga sağlığı ve tedavi süreçleri hakkında sorular"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sıkça Sorulan Sorular
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Omurga tedavileri ve kliniğimiz hakkında merak edilenler
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <p className="mt-2 text-gray-600">SSS yükleniyor...</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-12">
                            <p className="text-red-600">SSS yüklenirken bir hata oluştu.</p>
                        </div>
                    )}

                    {Array.isArray(faqs) && faqs.length > 0 ? (
                        <div className="space-y-6">
                            {/* active */}
                            {faqs.sort((a, b) => a.order - b.order).map((faq, index) => {
                                if (faq.status !== "active") return null;
                                return (
                                    <div key={faq.id || index} className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )

                            })}
                        </div>
                    ) : (
                        !loading && (
                            <div className="space-y-6">
                                {/* Sample FAQ items */}
                                {[
                                    {
                                        question: 'Randevu almak için ne yapmalıyım?',
                                        answer: 'Randevu almak için web sitemizden online randevu formunu doldurabilir, telefonla arayabilir veya WhatsApp hattımızdan mesaj gönderebilirsiniz. Randevu talebiniz en kısa sürede değerlendirilip size dönüş yapılacaktır.'
                                    },
                                    {
                                        question: 'İlk muayenede hangi evrakları getirmeliyim?',
                                        answer: 'İlk muayeneye kimlik belgeniz, sigorta kartınız (varsa), önceki tetkik sonuçlarınız (MR, BT, X-Ray), kullandığınız ilaçların listesi ve sevk kağıdınızı (varsa) getirmeniz yeterlidir.'
                                    },
                                    {
                                        question: 'Hangi sigorta şirketleriyle anlaşmanız var?',
                                        answer: 'SGK ve tüm özel sigorta şirketleriyle anlaşmalıyız. Tedavi öncesi sigorta kapsamınızı kontrol etmek için sigorta şirketinizle iletişime geçmenizi öneririz.'
                                    },
                                    {
                                        question: 'Ameliyat sonrası ne kadar sürede normal hayata dönerim?',
                                        answer: 'İyileşme süresi ameliyat türüne ve kişisel faktörlere bağlı olarak değişir. Minimal invaziv cerrahilerde genellikle 2-4 hafta, büyük cerrahilerde 6-12 hafta içinde normal aktivitelere dönüş mümkündür.'
                                    },
                                    {
                                        question: 'Fizik tedavi zorunlu mudur?',
                                        answer: 'Fizik tedavi çoğu omurga rahatsızlığında tedavinin önemli bir parçasıdır. Hem ameliyatsız tedavide hem de ameliyat sonrası rehabilitasyonda büyük önem taşır ve iyileşme sürecini hızlandırır.'
                                    },
                                    {
                                        question: 'Ağrı tedavisi nasıl uygulanır?',
                                        answer: 'Ağrı tedavisi ilaçlar, fizik tedavi, enjeksiyonlar, sinir blokları ve gerektiğinde cerrahi müdahale gibi çok yönlü yaklaşımlarla uygulanır. Her hastaya özel tedavi planı oluşturulur.'
                                    },
                                    {
                                        question: 'Acil durumlarda nasıl ulaşabilirim?',
                                        answer: 'Acil durumlarda 7/24 açık olan acil hattımızı arayabilir (+90 212 555 90 12) veya en yakın acil servise başvurabilirsiniz. Kliniğimiz acil vakalarda 24 saat hizmet vermektedir.'
                                    },
                                    {
                                        question: 'Kontrol muayeneleri ne sıklıkta yapılır?',
                                        answer: 'Kontrol muayene sıklığı tedavi türüne göre değişir. Genellikle ameliyat sonrası 2. hafta, 6. hafta, 3. ay ve 6. ayda kontroller yapılır. Konservatif tedavilerde ise 2-4 hafta aralıklarla kontroller planlanır.'
                                    },
                                    {
                                        question: 'Çocuk hastalar için özel bir yaklaşımınız var mı?',
                                        answer: 'Evet, çocuk hastalarda farklı anatomik ve fizyolojik özellikler dikkate alınarak özel tedavi protokolleri uygulanır. Skolyoz, kifoz gibi durumlarda çocuk dostu yaklaşımlar benimser.'
                                    },
                                    {
                                        question: 'Tetkik sonuçlarımı online görüntüleyebilir miyim?',
                                        answer: 'Hasta portal sistemimiz üzerinden tetkik sonuçlarınızı, randevu durumunuzu ve tedavi planınızı online olarak takip edebilirsiniz. Giriş bilgilerinizi muayene sonrası size teslim ediyoruz.'
                                    }
                                ].map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Sorunuza Cevap Bulamadınız mı?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Uzman ekibimiz sizin tüm sorularınızı yanıtlamaya hazır
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Bize Yazın
                        </a>
                        <a
                            href="tel:+902125551234"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Hemen Arayın
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
