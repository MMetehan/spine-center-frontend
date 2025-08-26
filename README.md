# 🦴 Spine Center - Frontend

*[English](#english) | [Türkçe](#türkçe)*

---

## Türkçe

Spine Center için modern, responsive ve erişilebilir React + Tailwind CSS uygulaması. Omurga kliniği tanıtım sitesi ve yönetim paneli.

### ✨ Özellikler

- ⚛️ **React 19** - Modern function components ve hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router v6** - Client-side routing
- 📱 **Responsive Design** - Mobil uyumlu tasarım
- ♿ **Accessibility** - WCAG standartlarına uygun
- 🔒 **Admin Panel** - Session-based authentication
- 🌐 **SEO Optimized** - Meta tags ve structured data
- 📞 **API Integration** - Axios ile backend entegrasyonu
- 🔥 **Modern UI/UX** - Profesyonel tasarım
- 🌍 **Dynamic Content** - CMS destekli içerik yönetimi

### 🚀 Kurulum

#### Gereksinimler

- Node.js 18+ 
- npm veya yarn

#### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd spine-center/frontend
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Çevre değişkenlerini ayarlayın**
`.env` dosyasını oluşturun:
```env
VITE_API_URL=http://localhost:4000/api
```

4. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

Uygulama http://localhost:5173 adresinde çalışacaktır.

### 📁 Proje Yapısı

```
src/
├── api/                 # API client ve servisler
│   ├── apiClient.js     # Axios konfigürasyonu
│   ├── auth.service.js  # Authentication servisleri
│   ├── admin.service.js # Admin CRUD servisleri
│   └── content.service.js # İçerik servisleri
├── components/          # Yeniden kullanılabilir componentler
│   ├── Header.jsx       # Site başlığı
│   ├── Footer.jsx       # Site altbilgisi
│   ├── Hero.jsx         # Ana sayfa hero bölümü
│   ├── TeamCard.jsx     # Ekip üyesi kartı
│   ├── TreatmentCard.jsx # Tedavi kartı
│   ├── ContactForm.jsx  # İletişim formu
│   ├── AppointmentForm.jsx # Randevu formu
│   ├── AdminSidebar.jsx # Admin paneli menüsü
│   ├── AdvancedCKEditor.jsx # Gelişmiş metin editörü
│   └── RequireAuth.jsx  # Route koruması
├── contexts/            # React Context providers
│   └── AuthContext.jsx  # Authentication state
├── hooks/               # Custom hooks
│   └── useFetch.js      # API veri çekme hook'u
├── layouts/             # Layout componentleri
│   ├── AppLayout.jsx    # Genel site layout'u
│   └── AdminLayout.jsx  # Admin paneli layout'u
├── pages/               # Sayfa componentleri
│   ├── Home.jsx         # Ana sayfa
│   ├── About.jsx        # Hakkımızda
│   ├── Team.jsx         # Ekibimiz
│   ├── TeamMember.jsx   # Ekip üyesi detayı
│   ├── Treatments.jsx   # Tedaviler
│   ├── TreatmentDetail.jsx # Tedavi detayı
│   ├── Research.jsx     # Araştırmalar
│   ├── Innovation.jsx   # İnovasyon
│   ├── Projects.jsx     # Projeler
│   ├── Sponsors.jsx     # Sponsorlar
│   ├── News.jsx         # Haberler
│   ├── Media.jsx        # Medya
│   ├── FAQ.jsx          # SSS
│   ├── Contact.jsx      # İletişim
│   ├── Appointment.jsx  # Randevu
│   └── Admin/           # Admin paneli sayfaları
│       ├── Login.jsx    # Admin girişi
│       ├── Dashboard.jsx # Dashboard
│       ├── Team.jsx     # Ekip yönetimi
│       ├── Treatments.jsx # Tedavi yönetimi
│       ├── Research.jsx # Araştırma yönetimi
│       ├── Innovation.jsx # İnovasyon yönetimi
│       ├── Projects.jsx # Proje yönetimi
│       ├── Sponsors.jsx # Sponsor yönetimi
│       └── News.jsx     # Haber yönetimi
├── App.jsx              # Ana component ve routing
├── main.jsx             # Entry point
└── index.css            # Global stiller (Tailwind)
```

### 🌐 Sayfalar

#### Genel Sayfalar
- `/` - Ana sayfa
- `/about` - Hakkımızda
- `/team` - Ekibimiz
- `/team/:id` - Ekip üyesi detayı
- `/treatments` - Tedaviler
- `/treatments/:slug` - Tedavi detayı
- `/research` - Araştırmalar
- `/innovation` - İnovasyon
- `/projects` - Projeler
- `/sponsors` - Sponsorlar
- `/news` - Haberler
- `/media` - Medya
- `/faq` - Sıkça Sorulan Sorular
- `/contact` - İletişim
- `/appointment` - Randevu

#### Admin Sayfaları
- `/admin` - Admin girişi
- `/admin/dashboard` - Dashboard
- `/admin/team` - Ekip yönetimi
- `/admin/treatments` - Tedavi yönetimi
- `/admin/research` - Araştırma yönetimi
- `/admin/innovation` - İnovasyon yönetimi
- `/admin/projects` - Proje yönetimi
- `/admin/sponsors` - Sponsor yönetimi
- `/admin/news` - Haber yönetimi

### 🔌 API Entegrasyonu

Backend API ile entegrasyon için:

1. `VITE_API_URL` environment variable'ını backend URL'inize ayarlayın
2. Tüm API çağrıları `credentials: 'include'` kullanır (session cookies için)
3. Admin authentication session-based çalışır

#### API Endpoints

Backend şu endpoint'leri sağlamalıdır:

**Genel Endpoints:**
- `GET /api/team` - Ekip listesi
- `GET /api/team/:id` - Ekip üyesi detayı
- `GET /api/treatments` - Tedavi listesi
- `GET /api/treatments/:slug` - Tedavi detayı
- `GET /api/research` - Araştırma listesi
- `GET /api/innovation` - İnovasyon listesi
- `GET /api/projects` - Proje listesi
- `GET /api/sponsors` - Sponsor listesi
- `GET /api/news` - Haber listesi
- `GET /api/media` - Medya listesi
- `GET /api/faq` - SSS listesi
- `POST /api/contact` - İletişim formu
- `POST /api/appointments` - Randevu formu

**Admin Endpoints:**
- `POST /api/admin/login` - Admin girişi
- `GET /api/admin/status` - Admin oturum kontrolü
- `POST /api/admin/logout` - Admin çıkışı
- `GET/POST/PUT/DELETE /api/admin/*` - CRUD işlemleri

### 📜 Scripts

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build önizlemesi
npm run preview

# Linting
npm run lint
```

### 💻 Teknolojiler

- **React 19** - UI framework
- **Vite** - Build tool ve dev server
- **Tailwind CSS** - CSS framework
- **React Router** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **Axios** - HTTP client
- **CKEditor 5** - Rich text editor
- **Moment.js** - Tarih ve saat işlemleri
- **React Hot Toast** - Bildirim sistemi

### 🌍 Browser Desteği

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### ♿ Accessibility

- WCAG 2.1 AA standartlarına uygun
- Keyboard navigasyon desteği
- Screen reader uyumlu
- `prefers-reduced-motion` desteği
- Uygun kontrast oranları

### 🚀 Production Deployment

1. **Build oluşturun**
```bash
npm run build
```

2. **dist/ klasörünü statik hosting'e yükleyin**

3. **Environment variables'ları production değerleriyle güncelleyin**

4. **Server routing konfigürasyonu**
SPA routing için server'ınızda tüm route'ları index.html'e yönlendirin.

---

## English

Modern, responsive and accessible React + Tailwind CSS application for Spine Center. Medical clinic website and admin panel.

### ✨ Features

- ⚛️ **React 19** - Modern function components and hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router v6** - Client-side routing
- 📱 **Responsive Design** - Mobile-friendly design
- ♿ **Accessibility** - WCAG compliant
- 🔒 **Admin Panel** - Session-based authentication
- 🌐 **SEO Optimized** - Meta tags and structured data
- 📞 **API Integration** - Backend integration with Axios
- 🔥 **Modern UI/UX** - Professional design
- 🌍 **Dynamic Content** - CMS-supported content management

### 🚀 Installation

#### Requirements

- Node.js 18+ 
- npm or yarn

#### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd spine-center/frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create `.env` file:
```env
VITE_API_URL=http://localhost:4000/api
```

4. **Start development server**
```bash
npm run dev
```

Application will run at http://localhost:5173

### 📁 Project Structure

```
src/
├── api/                 # API client and services
├── components/          # Reusable components
├── contexts/            # React Context providers
├── hooks/               # Custom hooks
├── layouts/             # Layout components
├── pages/               # Page components
├── App.jsx              # Main component and routing
├── main.jsx             # Entry point
└── index.css            # Global styles (Tailwind)
```

### 🌐 Pages

#### Public Pages
- `/` - Home
- `/about` - About Us
- `/team` - Our Team
- `/treatments` - Treatments
- `/research` - Research
- `/innovation` - Innovation
- `/projects` - Projects
- `/news` - News
- `/contact` - Contact
- `/appointment` - Appointment

#### Admin Pages
- `/admin` - Admin login
- `/admin/dashboard` - Dashboard
- `/admin/*` - Content management

### 💻 Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - CSS framework
- **React Router** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **Axios** - HTTP client
- **CKEditor 5** - Rich text editor

### 📜 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Build preview
npm run preview

# Linting
npm run lint
```

### 🚀 Production Deployment

1. **Create build**
```bash
npm run build
```

2. **Upload dist/ folder to static hosting**

3. **Update environment variables with production values**

4. **Configure server routing**
For SPA routing, redirect all routes to index.html on your server.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions: [info@spinecenter.com](mailto:info@spinecenter.com)

---

<div align="center">
  <p>Made with ❤️ for better healthcare</p>
</div>
