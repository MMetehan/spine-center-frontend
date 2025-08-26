import { showToast, toastMessages } from './utils/toast.js';

// Global window nesnesine toast fonksiyonlarını ekle
window.toast = showToast;
window.toastMessages = toastMessages;

// Console'da kullanım bilgilerini göster (development ortamı için)
if (import.meta.env.DEV) {
    console.log('🍞 Toast sistemi hazır!');
    console.log('Kullanım örnekleri:');
    console.log('toast.success("Başarılı!")');
    console.log('toast.error("Hata!")');
    console.log('toast.info("Bilgi")');
    console.log('toast.warning("Uyarı")');
    console.log('toast.loading("Yükleniyor...")');
    console.log('Daha fazlası için: window.toast ve window.toastMessages');
}

export { showToast, toastMessages };
