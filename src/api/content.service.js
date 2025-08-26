import api from './apiClient';

// Mock data as fallback
const mockTeam = [
    {
        id: 1,
        name: 'Dr. Mehmet Yılmaz',
        title: 'Nöroşirürji Uzmanı',
        specialization: 'Omurga Cerrahisi',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        experience: '15 yıl',
        education: 'İstanbul Üniversitesi Tıp Fakültesi'
    },
    {
        id: 2,
        name: 'Dr. Ayşe Kara',
        title: 'Fizik Tedavi Uzmanı',
        specialization: 'Omurga Rehabilitasyonu',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        experience: '12 yıl',
        education: 'Hacettepe Üniversitesi Tıp Fakültesi'
    },
    {
        id: 3,
        name: 'Dr. Ali Demir',
        title: 'Ortopedi Uzmanı',
        specialization: 'Minimal İnvaziv Cerrahi',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        experience: '10 yıl',
        education: 'Ankara Üniversitesi Tıp Fakültesi'
    }
];

const mockTreatments = [
    {
        id: 1,
        title: 'Minimal İnvaziv Omurga Cerrahisi',
        slug: 'minimal-invaziv-omurga-cerrahisi',
        summary: 'En az invaziv yöntemlerle omurga problemlerinizi çözüyoruz',
        description: 'Minimal invaziv tekniklerle gerçekleştirilen omurga cerrahisi...',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        duration: '2-4 saat',
        recovery: '2-3 hafta'
    },
    {
        id: 2,
        title: 'Fizik Tedavi ve Rehabilitasyon',
        slug: 'fizik-tedavi-rehabilitasyon',
        summary: 'Uzman fizyoterapistlerimizle kapsamlı rehabilitasyon',
        description: 'Omurga problemleri için özel geliştirilmiş egzersiz programları...',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        duration: '45-60 dakika',
        recovery: '4-6 hafta'
    },
    {
        id: 3,
        title: 'Ağrı Yönetimi',
        slug: 'agri-yonetimi',
        summary: 'Modern ağrı tedavi yöntemleri ile konforu geri kazanın',
        description: 'Kronik omurga ağrıları için çok disiplinli yaklaşım...',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        duration: '30-45 dakika',
        recovery: '1-2 hafta'
    }
];

const mockNews = [
    {
        id: 1,
        title: 'Yeni Minimal İnvaziv Cerrahi Merkezi Açıldı',
        summary: 'Son teknoloji ekipmanlar ile donatılmış yeni cerrahi merkezimiz hizmete açıldı.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: '2024-01-15'
    },
    {
        id: 2,
        title: 'Omurga Sağlığı Semineri Düzenlendi',
        summary: 'Halka açık omurga sağlığı semineri büyük ilgi gördü.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: '2024-01-10'
    }
];

// Team endpoints
export const getTeam = async () => {
    try {
        const response = await api.get('/team');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return mockTeam;
    }
};

export const getTeamMember = async (id) => {
    try {
        const response = await api.get(`/team/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return mockTeam.find(member => member.id == id) || mockTeam[0];
    }
};

// Treatments endpoints
export const getTreatments = async () => {
    try {
        const response = await api.get('/treatments');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return mockTreatments;
    }
};

export const getTreatment = async (slug) => {
    try {
        const response = await api.get(`/treatments/${slug}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return mockTreatments.find(treatment => treatment.slug === slug) || mockTreatments[0];
    }
};

// News endpoints
export const getNews = async () => {
    try {
        const response = await api.get('/news');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return mockNews;
    }
};

// FAQ endpoints
export const getFAQ = async () => {
    try {
        const response = await api.get('/faq');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

// Projects endpoints
export const getProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

export const getProject = async (id) => {
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return null;
    }
};

// Sponsors endpoints
export const getSponsors = async () => {
    try {
        const response = await api.get('/sponsors');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

export const getSponsor = async (id) => {
    try {
        const response = await api.get(`/sponsors/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return null;
    }
};

// Research endpoints  
export const getResearches = async () => {
    try {
        const response = await api.get('/researches');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

export const getResearch = async (id) => {
    try {
        const response = await api.get(`/researches/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return null;
    }
};

// Media endpoints
export const getMedia = async () => {
    try {
        const response = await api.get('/media');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

export const getMediaItem = async (id) => {
    try {
        const response = await api.get(`/media/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return null;
    }
};

// Innovation endpoints
export const getInnovations = async () => {
    try {
        const response = await api.get('/innovations');
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return [];
    }
};

export const getInnovation = async (id) => {
    try {
        const response = await api.get(`/innovations/${id}`);
        return response.data.data;
    } catch (error) {
        console.warn('API not available, using mock data:', error.message);
        return null;
    }
};

// Contact form
export const submitContactForm = async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
};

// Appointment form
export const submitAppointment = async (data) => {
    const response = await api.post('/appointments', data);
    return response.data;
};
