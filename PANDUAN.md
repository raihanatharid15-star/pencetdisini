# 📖 Panduan Lengkap - Website Kejutan Romantis

## 🎯 Cara Mengedit Teks Website

### Lokasi File yang Perlu Diedit

File utama yang perlu Anda edit: **`app/page.tsx`**

### Bagian 1: Pesan-Pesan di Tombol (Stage 0-3)

Cari bagian ini di file `app/page.tsx`:

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

**Cara mengedit:**
- Ganti teks di dalam tanda kutip `'...'`
- Anda bisa menambah lebih banyak pesan dengan menambah baris baru
- Contoh menambah pesan:

\`\`\`typescript
const messages = [
  'Ada pesan buat kamu ❤️',
  'Kamu tahu nggak?',
  'Orang yang paling berharga di hidupku...',
  'Tebak siapa?',
  'Yang selalu ada di pikiranku...',  // Pesan tambahan
  'Yang membuat hariku indah...',     // Pesan tambahan
];
\`\`\`

### Bagian 2: Judul dan Pesan Akhir

Cari bagian ini:

\`\`\`typescript
const finalMessage = {
  title: 'ADALAH KAMU! ❤️',
  text: \`Setiap hari bersamamu adalah anugerah yang tak ternilai. Kamu adalah alasan aku tersenyum di pagi hari, dan kamu adalah mimpi terindah di malam hari. 

Terima kasih sudah menjadi cahaya dalam hidupku, sudah menerima aku apa adanya, dan sudah membuat setiap momen menjadi istimewa. 

Aku berjanji akan selalu ada untukmu, menjaga hatimu, dan mencintaimu dengan sepenuh jiwa. 

Aku mencintaimu, sekarang dan selamanya. ❤️\`,
};
\`\`\`

**Cara mengedit:**
- `title`: Ganti judul besar yang muncul (contoh: 'ADALAH KAMU! ❤️')
- `text`: Ganti pesan panjang yang muncul di bawah foto
- Gunakan tanda backtick \` (bukan tanda kutip biasa)
- Untuk membuat paragraf baru, tekan Enter 2 kali

**Contoh pesan alternatif:**

\`\`\`typescript
const finalMessage = {
  title: 'ITU KAMU SAYANG! 💕',
  text: \`Dari sekian banyak orang di dunia ini, aku bersyukur telah bertemu denganmu.

Kamu adalah hadiah terindah dalam hidupku. Setiap detik bersamamu adalah kenangan yang tak akan pernah aku lupakan.

Terima kasih sudah menjadi alasan aku tersenyum setiap hari.

I love you to the moon and back! 🌙✨\`,
};
\`\`\`

### Bagian 3: Mengganti Foto Pasangan

Cari bagian ini:

\`\`\`typescript
// Path foto pasangan (letakkan foto di folder public/)
// Contoh: jika file bernama "couple.jpg", maka path = "/couple.jpg"
const couplephotoPath = '/couple.jpg';
\`\`\`

**Langkah-langkah:**

1. **Siapkan foto Anda:**
   - Format yang didukung: JPG, PNG, WebP
   - Ukuran yang disarankan: minimal 800x800 pixels
   - Foto akan ditampilkan dalam bentuk lingkaran

2. **Upload foto ke folder `public/`:**
   - Buka folder `public/` di repository Anda
   - Klik "Add file" → "Upload files"
   - Upload foto pasangan Anda
   - Beri nama file, misalnya: `couple.jpg` atau `myfoto.png`

3. **Update path di kode:**
   - Jika nama file Anda `couple.jpg`, biarkan seperti ini:
     \`\`\`typescript
     const couplephotoPath = '/couple.jpg';
     \`\`\`
   
   - Jika nama file Anda berbeda, misalnya `myfoto.png`:
     \`\`\`typescript
     const couplephotoPath = '/myfoto.png';
     \`\`\`

## 🎨 Customisasi Warna dan Gaya

### Mengubah Warna Background

Cari baris ini di `app/page.tsx`:

\`\`\`typescript
<div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 ...">
\`\`\`

**Pilihan warna lain:**

- **Ungu ke Pink:**
  \`\`\`typescript
  from-purple-50 via-pink-50 to-rose-100
  \`\`\`

- **Biru ke Pink:**
  \`\`\`typescript
  from-blue-50 via-purple-50 to-pink-100
  \`\`\`

- **Merah ke Orange:**
  \`\`\`typescript
  from-red-50 via-orange-50 to-yellow-100
  \`\`\`

### Mengubah Warna Tombol

Cari baris ini:

\`\`\`typescript
className="... bg-gradient-to-r from-pink-400 to-rose-500 ..."
\`\`\`

**Pilihan warna tombol:**

- **Ungu:**
  \`\`\`typescript
  from-purple-400 to-purple-600
  \`\`\`

- **Biru:**
  \`\`\`typescript
  from-blue-400 to-blue-600
  \`\`\`

- **Merah:**
  \`\`\`typescript
  from-red-400 to-red-600
  \`\`\`

## 🚀 Cara Deploy ke Vercel (Step-by-Step)

### Persiapan

1. **Pastikan kode sudah di-push ke GitHub**
2. **Buat akun Vercel** (jika belum punya):
   - Kunjungi [vercel.com](https://vercel.com)
   - Klik "Sign Up"
   - Pilih "Continue with GitHub"
   - Authorize Vercel untuk mengakses GitHub Anda

### Langkah Deploy

**Step 1: Import Project**
1. Login ke [vercel.com](https://vercel.com)
2. Klik tombol "Add New..." di pojok kanan atas
3. Pilih "Project"
4. Cari repository `pencetdisini` di list
5. Klik "Import"

**Step 2: Configure Project**
- **Project Name**: Biarkan default atau ubah sesuai keinginan
- **Framework Preset**: Next.js (otomatis terdeteksi)
- **Root Directory**: `./` (default)
- **Build Settings**: Biarkan default
  - Build Command: `pnpm build`
  - Output Directory: `.next`
  - Install Command: `pnpm install`

**Step 3: Deploy**
1. Klik tombol "Deploy"
2. Tunggu proses build (biasanya 2-3 menit)
3. Setelah selesai, Anda akan mendapat URL publik
4. Contoh URL: `https://pencetdisini.vercel.app`

**Step 4: Bagikan ke Pasangan Anda**
- Copy URL yang diberikan Vercel
- Kirim URL tersebut ke pasangan Anda
- Website bisa diakses dari HP atau komputer manapun!

### Update Website Setelah Deploy

Jika Anda ingin mengubah teks atau foto setelah deploy:

1. Edit file di GitHub (langsung di web atau clone ke komputer)
2. Commit dan push perubahan
3. Vercel akan otomatis re-deploy website Anda
4. Tunggu 2-3 menit, website sudah terupdate!

## 🔧 Troubleshooting

### Foto tidak muncul?

**Solusi:**
1. Pastikan foto ada di folder `public/`
2. Cek nama file dan path sudah sesuai
3. Pastikan tidak ada spasi di nama file (gunakan `-` atau `_`)
4. Format file harus JPG, PNG, atau WebP

### Website tidak mau deploy?

**Solusi:**
1. Cek apakah semua file sudah ter-push ke GitHub
2. Pastikan file `package.json` ada di root folder
3. Lihat error log di Vercel dashboard
4. Pastikan tidak ada error di kode (cek syntax)

### Animasi tidak jalan?

**Solusi:**
1. Pastikan Framer Motion sudah terinstall
2. Clear cache browser (Ctrl+Shift+R atau Cmd+Shift+R)
3. Coba buka di browser lain

### Confetti tidak muncul?

**Solusi:**
1. Pastikan canvas-confetti sudah terinstall
2. Coba refresh halaman
3. Pastikan JavaScript enabled di browser

## 💡 Tips & Trik

### Membuat Pesan Lebih Personal

- Gunakan nama panggilan kesayangan
- Tambahkan emoji yang sering Anda gunakan berdua
- Sebutkan momen-momen spesial bersama
- Gunakan inside jokes atau kenangan pribadi

### Timing yang Tepat

- Kirim link di momen spesial (anniversary, birthday, Valentine)
- Jangan spoiler! Biarkan pasangan Anda penasaran
- Screenshot reaksi mereka (dengan izin tentunya!)

### Customisasi Lebih Lanjut

Jika Anda familiar dengan coding, Anda bisa:
- Menambah lebih banyak stage
- Mengubah animasi
- Menambah musik background
- Menambah video
- Mengubah bentuk foto (dari lingkaran ke kotak, dll)

## 📞 Butuh Bantuan?

Jika ada kesulitan atau pertanyaan:
1. Baca dokumentasi Next.js: [nextjs.org/docs](https://nextjs.org/docs)
2. Baca dokumentasi Vercel: [vercel.com/docs](https://vercel.com/docs)
3. Cek file README.md untuk info teknis

---

**Selamat mencoba dan semoga pasangan Anda menyukainya! 💕**
