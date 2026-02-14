# 💕 Website Kejutan Romantis Interaktif

Website kejutan romantis yang dibuat dengan Next.js App Router, Tailwind CSS, dan Framer Motion. Website ini menampilkan pesan-pesan manis yang membangun rasa penasaran hingga mencapai kejutan akhir dengan efek confetti hati yang indah.

## ✨ Fitur

- **Tahapan Interaktif**: Klik tombol untuk melihat pesan-pesan manis yang berubah secara bertahap
- **Animasi Halus**: Transisi fade-in dan scale menggunakan Framer Motion
- **Efek Confetti Hati**: Partikel hati yang muncul otomatis di tahap akhir
- **Desain Responsif**: Mobile-friendly dan terlihat sempurna di semua perangkat
- **Warna Romantis**: Background gradient pink dan rose yang lembut
- **Font Elegan**: Menggunakan Inter dan Playfair Display

## 📝 Cara Mengedit Teks

### 1. Edit Pesan-Pesan di Tombol

Buka file `app/page.tsx` dan cari bagian yang ditandai:

\`\`\`typescript
// ========================================
// EDIT BAGIAN INI UNTUK MENGUBAH TEKS
// ========================================

const messages = [
  'Ada pesan buat kamu ❤️',           // Stage 0 - Tombol awal
  'Kamu tahu nggak?',                 // Stage 1
  'Orang yang paling berharga di hidupku...', // Stage 2
  'Tebak siapa?',                     // Stage 3
];
\`\`\`

Ubah teks di dalam array `messages` sesuai keinginan Anda. Anda bisa menambah atau mengurangi jumlah pesan.

### 2. Edit Pesan Akhir

Di file yang sama, ubah bagian `finalMessage`:

\`\`\`typescript
const finalMessage = {
  title: 'ADALAH KAMU! ❤️',
  text: \`Setiap hari bersamamu adalah anugerah yang tak ternilai...
  
(Ganti dengan pesan romantis Anda sendiri)\`,
};
\`\`\`

### 3. Ganti Foto Pasangan

**Langkah-langkah:**

1. Siapkan foto pasangan Anda (format: JPG, PNG, atau WebP)
2. Beri nama file foto tersebut: `couple.jpg` (atau nama lain sesuai keinginan)
3. Letakkan file foto di folder `public/`
4. Jika menggunakan nama file selain `couple.jpg`, update path di `app/page.tsx`:

\`\`\`typescript
// Path foto pasangan (letakkan foto di folder public/)
// Contoh: jika file bernama "couple.jpg", maka path = "/couple.jpg"
const couplephotoPath = '/couple.jpg';
\`\`\`

**Contoh struktur folder:**
\`\`\`
pencetdisini/
├── public/
│   ├── couple.jpg          ← Letakkan foto di sini
│   └── .gitkeep
├── app/
│   ├── page.tsx
│   └── layout.tsx
└── ...
\`\`\`

## 🚀 Cara Menjalankan Lokal

1. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

2. Jalankan development server:
\`\`\`bash
pnpm dev
\`\`\`

3. Buka browser dan akses: `http://localhost:3000`

## 📦 Deploy ke Vercel

### Cara 1: Melalui GitHub (Recommended)

1. **Push kode ke GitHub** (sudah dilakukan)

2. **Login ke Vercel**:
   - Buka [vercel.com](https://vercel.com)
   - Login dengan akun GitHub Anda

3. **Import Project**:
   - Klik "Add New Project"
   - Pilih repository `pencetdisini`
   - Klik "Import"

4. **Configure Project**:
   - Framework Preset: Next.js (otomatis terdeteksi)
   - Root Directory: `./`
   - Build Command: `pnpm build` (otomatis)
   - Output Directory: `.next` (otomatis)
   - Install Command: `pnpm install` (otomatis)

5. **Deploy**:
   - Klik "Deploy"
   - Tunggu hingga proses deployment selesai
   - Anda akan mendapat URL publik (contoh: `https://pencetdisini.vercel.app`)

### Cara 2: Melalui Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
\`\`\`

## 🎨 Customisasi Lebih Lanjut

### Ubah Warna Background

Edit di `app/page.tsx`:

\`\`\`typescript
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 ...">
\`\`\`

Ganti warna sesuai keinginan (contoh: `from-purple-50 via-pink-50 to-red-100`)

### Ubah Warna Tombol

\`\`\`typescript
className="... bg-gradient-to-r from-pink-400 to-rose-500 ..."
\`\`\`

### Ubah Durasi Animasi

Cari bagian `transition` di komponen motion dan ubah nilai `duration`:

\`\`\`typescript
transition={{ duration: 0.5, ease: 'easeInOut' }}
\`\`\`

## 📱 Responsif

Website ini sudah dioptimalkan untuk:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

## 🛠️ Teknologi yang Digunakan

- **Next.js 16.1** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animasi)
- **Canvas Confetti** (efek confetti)
- **Google Fonts** (Inter & Playfair Display)

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi. Buat pasangan Anda tersenyum! ❤️

---

**Dibuat dengan ❤️ untuk momen spesial Anda**
