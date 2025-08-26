import toast from 'react-hot-toast';

// Toast stilleri için özel yapılandırma
const toastConfig = {
    duration: 4000,
    position: 'top-center',
    style: {
        background: '#333',
        color: '#fff',
        borderRadius: '8px',
        fontSize: '14px',
        padding: '12px 16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    success: {
        iconTheme: {
            primary: '#10B981',
            secondary: '#fff',
        },
    },
    error: {
        iconTheme: {
            primary: '#EF4444',
            secondary: '#fff',
        },
    },
    loading: {
        iconTheme: {
            primary: '#3B82F6',
            secondary: '#fff',
        },
    },
};

// Global toast fonksiyonları
export const showToast = {
    // Başarı mesajı
    success: (message, options = {}) => {
        return toast.success(message, {
            ...toastConfig,
            ...toastConfig.success,
            ...options,
        });
    },

    // Hata mesajı
    error: (message, options = {}) => {
        return toast.error(message, {
            ...toastConfig,
            ...toastConfig.error,
            ...options,
        });
    },

    // Bilgi mesajı
    info: (message, options = {}) => {
        return toast(message, {
            ...toastConfig,
            icon: 'ℹ️',
            ...options,
        });
    },

    // Uyarı mesajı
    warning: (message, options = {}) => {
        return toast(message, {
            ...toastConfig,
            icon: '⚠️',
            ...options,
        });
    },

    // Yükleme mesajı
    loading: (message, options = {}) => {
        return toast.loading(message, {
            ...toastConfig,
            ...toastConfig.loading,
            ...options,
        });
    },

    // Promise ile toast
    promise: (promise, messages, options = {}) => {
        return toast.promise(
            promise,
            {
                loading: messages.loading || 'Yükleniyor...',
                success: messages.success || 'Başarılı!',
                error: messages.error || 'Bir hata oluştu!',
            },
            {
                ...toastConfig,
                ...options,
            }
        );
    },

    // Özel toast
    custom: (jsx, options = {}) => {
        return toast.custom(jsx, {
            ...toastConfig,
            ...options,
        });
    },

    // Toast'ı kapat
    dismiss: (toastId) => {
        toast.dismiss(toastId);
    },

    // Tüm toast'ları kapat
    dismissAll: () => {
        toast.dismiss();
    },
};

// Türkçe mesajlar için yardımcı fonksiyonlar
export const toastMessages = {
    success: {
        save: 'Başarıyla kaydedildi!',
        update: 'Başarıyla güncellendi!',
        delete: 'Başarıyla silindi!',
        create: 'Başarıyla oluşturuldu!',
        send: 'Başarıyla gönderildi!',
        upload: 'Başarıyla yüklendi!',
    },
    error: {
        save: 'Kaydetme işlemi başarısız!',
        update: 'Güncelleme işlemi başarısız!',
        delete: 'Silme işlemi başarısız!',
        create: 'Oluşturma işlemi başarısız!',
        send: 'Gönderme işlemi başarısız!',
        upload: 'Yükleme işlemi başarısız!',
        network: 'Ağ bağlantısı hatası!',
        server: 'Sunucu hatası!',
        validation: 'Geçersiz veri!',
        notFound: 'Kayıt bulunamadı!',
        unauthorized: 'Yetkiniz bulunmuyor!',
    },
    loading: {
        save: 'Kaydediliyor...',
        update: 'Güncelleniyor...',
        delete: 'Siliniyor...',
        create: 'Oluşturuluyor...',
        send: 'Gönderiliyor...',
        upload: 'Yükleniyor...',
        fetch: 'Veriler getiriliyor...',
    },
};

// Kısa yollar için alias'lar
export const toast_ = showToast;
export default showToast;
