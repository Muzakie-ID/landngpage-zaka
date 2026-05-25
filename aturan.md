# 📄 Product Requirements Document (PRD): Landing Page Jasa IMEI

## 1. Ringkasan Proyek (Overview)
Proyek ini adalah pembuatan sebuah *landing page* tunggal (single-page website) yang bertujuan untuk menawarkan jasa pendaftaran atau *unblock* IMEI. Halaman ini dirancang dengan desain modern dan beranimasi untuk menarik perhatian pengunjung, membangun kepercayaan, dan mengarahkan mereka untuk langsung menghubungi admin melalui WhatsApp.

## 2. Tujuan & Metrik Keberhasilan (Goals & Metrics)
*   **Tujuan Utama:** Menghasilkan *leads* (calon pelanggan) sebanyak mungkin dengan mengarahkan pengunjung website ke chat WhatsApp.
*   **Metrik Keberhasilan:** 
    *   Jumlah pengunjung website.
    *   *Click-Through Rate (CTR)* pada tombol "Hubungi via WhatsApp".

## 3. Cakupan Fitur (In Scope)
*Landing page* ini akan memiliki struktur satu halaman penuh yang digulir (*scrolling*) ke bawah, terdiri dari:

1.  **Hero Section (Bagian Atas):**
    *   Headline yang menarik dan modern.
    *   Animasi *fade-in* atau *slide-up* pada teks dan gambar saat web pertama kali dimuat.
    *   Tombol *Call to Action* (CTA) "Konsultasi Gratis via WhatsApp" yang memiliki efek *hover* interaktif.
2.  **Selling Points / Mengapa Memilih Kami:**
    *   Poin-poin keunggulan dengan ikon.
    *   Loves *Micro-interactions*: Ikon akan sedikit bergerak/membesar ketika disorot (*hover*).
3.  **Cara Kerja (How it Works):**
    *   Langkah-langkah visual yang muncul secara bertahap (*staggered animation*) saat pengguna melakukan *scroll*.
4.  **Bagian Testimoni:**
    *   Menampilkan ulasan/screenshot percakapan dari pelanggan sebelumnya untuk membangun kepercayaan.
    *   Bisa menggunakan desain *carousel* (slider) otomatis yang *smooth* atau *grid layout* modern.
5.  **Floating WhatsApp Button:**
    *   Tombol icon WhatsApp yang memantul halus (*bouncing / pulsing*) di pojok kanan bawah agar selalu mengundang untuk diklik.
6.  **SEO & Tracking (Google Analytics):**
    *   **Google Analytics (GA4):** Diimplementasikan untuk melacak jumlah pengunjung, asal pengunjung, dan metrik klik pada tombol WhatsApp.
    *   **Google Search Console & SEO On-Page:** Pengaturan Meta Tags dinamis, *Sitemap* (peta situs), dan `robots.txt` bawaan Next.js agar website cepat terindeks dan muncul di pencarian Google.

## 4. Di Luar Cakupan (Out of Scope)
*   Sistem Login / Autentikasi User (Auth).
*   Sistem Pembayaran / Payment Gateway.
*   Database backend kompleks.

## 5. Flow Pengguna (User Flow)
1. Pengguna membuka URL *landing page*.
2. Pengguna disambut dengan animasi interaktif dan *hero section* yang elegan.
3. Pengguna *scroll* ke bawah membaca layanan dan melihat testimoni (animasi *scroll-reveal*).
4. Pengguna mengklik tombol WhatsApp (teks otomatis disiapkan).
5. Interaksi berlanjut ke aplikasi WhatsApp dengan CS/Admin.

