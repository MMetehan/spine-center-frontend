# Admin Panel API POST İstekleri ve Örnek Veriler

Bu dosya, Anatolian Spine projesi admin panelindeki tüm API POST isteklerini ve örnek veri formatlarını içerir.

## 📝 Research (Araştırma) API

**Endpoint:** `/api/research`  
**Method:** `POST`

**Post Data:**
```json
{
    "title": "Omurga Cerrahisinde Minimal İnvaziv Teknikler",
    "content": "# Minimal İnvaziv Omurga Cerrahisi\n\nModern omurga cerrahisinde minimal invaziv teknikler giderek önem kazanmaktadır. Bu yöntemler şunları sağlar:\n\n## Avantajları\n- Daha küçük kesiler\n- Hızlı iyileşme\n- Az ağrı\n- Kısa hastanede kalış süresi\n\n## Uygulama Alanları\n- Disk hernileri\n- Spinal stenoz\n- Füzyon ameliyatları",
    "imageUrl": "https://example.com/research/minimal-invasive.jpg"
}
```

**Örnek Güncelleme (PUT):** `/api/research/{id}`

---

## 🚀 Innovation (İnovasyon) API

**Endpoint:** `/api/innovation`  
**Method:** `POST`

**Post Data:**
```json
{
    "title": "Yapay Zeka Destekli Tanı Sistemleri",
    "content": "# AI Tabanlı Omurga Tanı Sistemi\n\nYapay zeka teknolojileri kullanarak geliştirdiğimiz sistem:\n\n## Özellikler\n- MRI görüntü analizi\n- Otomatik patoloji tespiti\n- Risk skorlaması\n- Tedavi önerileri\n\n## Başarı Oranları\n- %95 doğruluk oranı\n- %60 hızlı tanı\n- %40 maliyet tasarrufu"
}
```

**Örnek Güncelleme (PUT):** `/api/innovation/{id}`

---

## 🏥 Treatments (Tedaviler) API

**Endpoint:** `/api/treatments`  
**Method:** `POST`

**Post Data:**
```json
{
    "title": "Lomber Disk Hernisi Tedavisi",
    "slug": "lomber-disk-hernisi-tedavisi",
    "summary": "# Lomber Disk Hernisi\n\nLomber disk hernisi, omurganın alt kısmında bulunan diskler arasındaki çekirdeğin dışarı çıkması durumudur.\n\n## Tedavi Seçenekleri\n- Konservatif tedavi\n- Fizik tedavi\n- Minimal invaziv müdahale\n- Cerrahi tedavi",
    "content": "# Lomber Disk Hernisi Detaylı Tedavi Kılavuzu\n\n## Hastalık Hakkında\nLomber disk hernisi yaygın görülen bir omurga rahatsızlığıdır...\n\n## Tanı Yöntemleri\n- Fizik muayene\n- MRI görüntüleme\n- EMG testleri\n\n## Tedavi Aşamaları\n### 1. Konservatif Tedavi\n- İstirahat\n- Ağrı kesiciler\n- Kas gevşeticiler\n\n### 2. Fizik Tedavi\n- Egzersiz programları\n- Manuel terapi\n- Elektroterapi\n\n### 3. İleri Tedavi\n- Epidural enjeksiyon\n- Minimal invaziv cerrahi\n- Açık cerrahi",
    "imageUrl": "https://example.com/treatments/lomber-disk.jpg"
}
```

**Not:** Slug otomatik oluşturulur (Türkçe karakterler İngilizce'ye çevrilir)

**Örnek Güncelleme (PUT):** `/api/treatments/{id}`

---

## 👥 Team (Ekip) API

**Endpoint:** `/api/team`  
**Method:** `POST`

**Post Data:**
```json
{
    "name": "Prof. Dr. Mehmet Yılmaz",
    "title": "Nöroşirurji Uzmanı",
    "bio": "# Prof. Dr. Mehmet Yılmaz\n\n## Eğitim\n- İstanbul Üniversitesi Tıp Fakültesi (1995)\n- Nöroşirurji Uzmanlığı - Hacettepe Üniversitesi (2001)\n- Omurga Cerrahisi Fellowship - ABD Johns Hopkins (2003)\n\n## Deneyim\n- 20+ yıl omurga cerrahisi deneyimi\n- 5000+ başarılı ameliyat\n- 100+ bilimsel makale\n\n## Uzmanlık Alanları\n- Minimal invaziv omurga cerrahisi\n- Spinal tümör cerrahisi\n- Pediatrik omurga deformiteleri\n- Revizyon cerrahileri",
    "imageUrl": "https://example.com/team/prof-dr-mehmet-yilmaz.jpg",
    "order": 1
}
```

**Örnek Güncelleme (PUT):** `/api/team/{id}`

---

## 📊 Projects (Projeler) API

**Endpoint:** `/api/projects`  
**Method:** `POST`

**Post Data:**
```json
{
    "title": "Ulusal Omurga Sağlığı Araştırması 2024",
    "summary": "# Ulusal Omurga Sağlığı Projesi\n\nTürkiye genelinde omurga sağlığı durumunu araştıran kapsamlı proje.\n\n## Proje Kapsamı\n- 10,000 katılımcı\n- 5 şehir\n- 2 yıl süre\n\n## Hedefler\n- Risk faktörleri belirleme\n- Önleyici tedbirler geliştirme\n- Farkındalık artırma\n\n## Ortaklar\n- Sağlık Bakanlığı\n- Üniversiteler\n- Hastaneler",
    "imageUrl": "https://example.com/projects/omurga-arastirmasi.jpg",
    "link": "https://omurga-sagligi-projesi.gov.tr"
}
```

**Örnek Güncelleme (PUT):** `/api/projects/{id}`

---

## 🎬 Media (Medya) API

**Endpoint:** `/api/media`  
**Method:** `POST`

**Post Data:**
```json
{
    "title": "Minimal İnvaziv Lomber Füzyon Ameliyatı",
    "description": "Prof. Dr. Mehmet Yılmaz tarafından gerçekleştirilen minimal invaziv lomber füzyon ameliyatının detaylı anlatımı.",
    "type": "video",
    "url": "https://youtube.com/watch?v=abc123xyz",
    "thumbnail": "https://example.com/media/thumbnails/fusion-surgery.jpg",
    "publishDate": "2024-03-15",
    "category": "surgery",
    "status": "published"
}
```

**Medya Türleri:**
- `video`: Video içeriği
- `image`: Resim galerisi
- `podcast`: Podcast yayını
- `webinar`: Webinar kaydı

**Kategoriler:**
- `education`: Eğitim
- `surgery`: Cerrahi
- `research`: Araştırma
- `patient`: Hasta Hikayeleri
- `conference`: Konferans

**Örnek Güncelleme (PUT):** `/api/media/{id}`

---

## ❓ FAQ (Sık Sorulan Sorular) API

**Endpoint:** `/api/faq`  
**Method:** `POST`

**Post Data:**
```json
{
    "question": "Omurga ameliyatı sonrası normal aktivitelere ne zaman dönebilirim?",
    "answer": "Ameliyat türüne bağlı olarak değişir. Minimal invaziv ameliyatlarda 2-4 hafta, açık ameliyatlarda 6-12 hafta sürebilir. Doktorunuzun önerilerine uymanız önemlidir.",
    "category": "surgery",
    "order": 1,
    "status": "active"
}
```

**FAQ Kategorileri:**
- `general`: Genel
- `treatment`: Tedavi
- `appointment`: Randevu
- `surgery`: Cerrahi
- `payment`: Ödeme
- `insurance`: Sigorta

**Örnek Güncelleme (PUT):** `/api/faq/{id}`

---

## 🤝 Sponsors (Sponsorlar) API

**Endpoint:** `/api/sponsors`  
**Method:** `POST`

**Post Data:**
```json
{
    "name": "MedTech Solutions",
    "description": "Medikal teknoloji çözümleri konusunda lider şirket. Omurga cerrahisi ekipmanları ve yazılım çözümleri sağlamaktadır.",
    "logo": "https://example.com/sponsors/medtech-logo.png",
    "website": "https://medtech-solutions.com",
    "category": "technology",
    "status": "active"
}
```

**Sponsor Kategorileri:**
- `technology`: Teknoloji
- `pharmaceutical`: İlaç
- `equipment`: Ekipman
- `education`: Eğitim
- `research`: Araştırma

**Örnek Güncelleme (PUT):** `/api/sponsors/{id}`

---

## 🔑 Authentication (Kimlik Doğrulama) API

**Endpoint:** `/api/auth/login`  
**Method:** `POST`

**Post Data:**
```json
{
    "username": "admin",
    "password": "securePassword123"
}
```

**Response:**
```json
{
    "user": {
        "id": 1,
        "username": "admin",
        "email": "admin@anatolianspine.com",
        "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📋 Genel API Kuralları

### Headers
Tüm API istekleri için:
```
Content-Type: application/json
Authorization: Bearer {token} // Login sonrası alınan token
```

### Response Format
Başarılı istekler:
```json
{
    "success": true,
    "data": {...},
    "message": "İşlem başarılı"
}
```

Hatalı istekler:
```json
{
    "success": false,
    "error": "Hata mesajı",
    "details": {...}
}
```

### HTTP Status Codes
- `200`: Başarılı
- `201`: Oluşturuldu
- `400`: Geçersiz istek
- `401`: Yetkisiz erişim
- `404`: Bulunamadı
- `500`: Sunucu hatası

---

## 📝 Notlar

1. **Rich Text Editor**: Research, Innovation, Treatments, Team (bio), Projects (summary) alanlarında MDEditor kullanılmaktadır.
2. **Slug Oluşturma**: Treatments'ta title'dan otomatik slug oluşturulur (Türkçe karakterler dönüştürülür).
3. **Image Upload**: Şu anda URL tabanlı, gelecekte file upload eklenebilir.
4. **Validation**: Tüm required alanlar frontend'de kontrol edilir.
5. **Error Handling**: API hatalarında kullanıcı dostu mesajlar gösterilir.

Bu dokümantasyon, admin panelindeki tüm API entegrasyonlarının referansı olarak kullanılabilir.
