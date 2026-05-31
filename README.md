# 💌 MyGift - Hadiah Virtual Personalisasi

MyGift adalah aplikasi web interaktif cantik yang memungkinkan Kamu membuat dan membagikan amplop digital personal dengan pesan yang tulus. Sangat cocok untuk hari jadi (anniversary), ulang tahun, atau sekadar untuk mengungkapkan kasih sayang.

![MyGift Preview](https://img.shields.io/badge/Dibuat%20dengan-React-61DAFB?style=for-the-badge&logo=react)
![MyGift Preview](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite)
![MyGift Preview](https://img.shields.io/badge/Gaya-Glassmorphism-FF69B4?style=for-the-badge)

---

## ✨ Fitur Utama

- **Konten Personalisasi**: Tambahkan nama "Untuk" dan "Dari" beserta pesan kustom Kamu.
- **Estetika yang Bisa Diatur**: Pilih dari warna preset romantis atau pilih tema warna kustom Kamu sendiri.
- **Pengalaman Interaktif**: Buka amplop dengan mengklik segel lilin (wax seal) yang realistis.
- **Fokus pada Privasi**: Tidak butuh database! Semua data dikodekan secara aman langsung ke dalam URL untuk memudahkan berbagi.
- **Desain Responsif**: Berjalan sempurna di ponsel, tablet, maupun desktop.
- **Efek Visual**: Dilengkapi dengan animasi hati melayang untuk kesan yang premium.

---

## 🚀 Panduan Penggunaan (Untuk Pembuat)

1. **Tulis Pesanmu**: Masukkan nama penerima, namamu, dan pesan tulusmu di kartu pembuat.
2. **Pilih Warna**: Pilih warna amplop yang sesuai dengan suasana hati.
3. **Buat Hadiah**: Klik tombol **"Generate Gift"** untuk melihat pratinjau kreasi Kamu.
4. **Bagikan Kasih Sayang**: Klik **"Share Love"** untuk menyalin tautan khusus ke papan klip (clipboard).
5. **Kirimkan**: Kirim tautan tersebut melalui WhatsApp, Telegram, Instagram, atau aplikasi pesan lainnya!

---

## 🎁 Menerima Hadiah (Untuk Penerima)

1. **Klik Tautan**: Buka URL yang dibagikan di browser apa pun.
2. **Lihat Kejutan**: Kamu akan melihat amplop cantik yang ditujukan untukmu.
3. **Buka Amplop**: Klik **Segel Lilin (Wax Seal)** di tengah amplop untuk melihat amplop terbuka dan menampilkan pesan tersembunyi di dalamnya.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React 19 + Vite
- **Kompresi**: `lz-string` (untuk menyimpan data di dalam URL tanpa database)
- **Styling**: Vanilla CSS dengan Flexbox/Grid modern dan efek Glassmorphism.
- **Animasi**: CSS Keyframes untuk hati melayang dan transisi amplop.

---

## 💻 Pengembangan Lokal

Jika Kamu ingin menjalankan proyek ini secara lokal atau menyesuaikannya:

### Prasyarat

- Node.js (v18 atau yang terbaru)
- npm atau yarn

### Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/username-anda/mygift.git
   cd mygift
   ```

2. **Instal dependensi**

   ```bash
   npm install
   ```

3. **Jalankan dalam mode pengembangan**

   ```bash
   npm run dev
   ```

4. **Build untuk produksi**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment (Penyebaran)

Proyek ini dioptimalkan untuk **Vercel**. Cukup hubungkan repository GitHub Kamu ke Vercel, dan aplikasi akan dideploy secara otomatis menggunakan pengaturan build default Vite.
