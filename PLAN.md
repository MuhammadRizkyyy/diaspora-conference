# Planning — Website 1st Indonesian Diaspora Business Summit 2026

## 1. Ringkasan Event

- **Nama**: The 1st Indonesian Diaspora Business Summit 2026
- **Tanggal**: Senin, 12 Oktober 2026
- **Venue**: The Ritz-Carlton Jakarta, Pacific Place
- **Penyelenggara**: IDN-Preneur Global Network, bekerja sama dengan IDN Global
- **Skala target**: hingga 1000 pendaftar (proyeksi awal proposal 200+ delegasi dari 20+ negara)
- **Pembuka**: Wakil Presiden RI, keynote beberapa menteri (Luar Negeri, Perdagangan, Ekonomi Kreatif, Pariwisata, Koordinator Infrastruktur & Pembangunan Daerah)

## 2. Paket & Harga (dari proposal)

### Peserta
| Paket | Harga |
|---|---|
| Full Access (Summit + Gala Dinner) | Rp 3.500.000 / orang |
| Summit Only / Gala Dinner Only | Rp 2.000.000 / orang |

### Sponsorship
| Tier | Harga |
|---|---|
| Platinum | Rp 500.000.000 |
| Gold | Rp 250.000.000 |
| Silver | Rp 100.000.000 |
| Full Corporate Package (10 pax) | Rp 100.000.000 |
| Half Corporate Package (5 pax) | Rp 50.000.000 |

## 3. Metode Pembayaran

Transfer manual ke rekening:
- **Bank**: BNI
- **No. Rekening**: 1852737446 (IDR)
- **Swift Code**: BNINIDJA
- **A.n.**: Yayasan Diaspora Indonesia Global

Tidak ada payment gateway. Verifikasi pembayaran dilakukan manual oleh panitia.

## 4. Prinsip Alur Pendaftaran

**Peserta terdaftar dulu, baru bayar** — bukan bayar dulu baru lapor. Nomor pendaftaran terbit sebelum transfer, supaya peserta selalu punya bukti tercatat sebelum kirim uang. Ini mengurangi kecemasan/kesan scam pada proses transfer manual.

### Alur (6 langkah)

1. **Isi form pendaftaran** (Peserta) — pilih paket, isi nama/email/kontak, submit
2. **Terbit Nomor Pendaftaran** (Sistem) — contoh `IDN-2026-0001`, tampil di layar + email. Status: `Terdaftar`
3. **Transfer ke BNI** (Peserta) — wajib cantumkan Nomor Pendaftaran di berita transfer
4. **Upload bukti transfer** (Peserta) — masukkan Nomor Pendaftaran + unggah bukti. Status: `Menunggu Verifikasi`
5. **Verifikasi** (Panitia) — cocokkan bukti dengan mutasi rekening via dashboard admin, tandai valid/tolak
6. **E-tiket terkirim** (Sistem) — email otomatis dengan PDF + QR code. Status: `Terkonfirmasi`

## 5. Bahasa (i18n)

- Default: **English**
- Toggle: **Bahasa Indonesia**
- Library: `next-intl`, routing `/en/...` (default) dan `/id/...`
- Konten sumber (proposal) dalam English — terjemahan Indonesia perlu disiapkan client atau developer (**perlu dikonfirmasi**)

## 6. Tech Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js (App Router) | SSR/SSG buat SEO landing, API routes buat backend ringan |
| Hosting (sementara) | Vercel | Gratis, native buat Next.js, gampang pindah ke hosting client nanti |
| Database | PostgreSQL via **Supabase** | Skala 1000 pendaftar butuh proper index/query, bukan Google Sheet |
| File storage | Supabase Storage | Simpan bukti transfer, satu platform sama DB |
| Auth admin | Supabase Auth | Login panitia ke dashboard, gak perlu bikin sistem auth sendiri |
| Email | Resend / SendGrid | Kirim nomor pendaftaran, instruksi bayar, e-tiket otomatis |
| i18n | next-intl | EN default, ID toggle |
| E-tiket | `qrcode` + `@react-pdf/renderer` (atau `pdf-lib`) | Generate PDF + QR code buat check-in fisik di venue |

## 7. Struktur Halaman

### Landing — 1 halaman, scroll dengan anchor navigation
Alasan: konten informational/marketing, natural dibaca berurutan, SEO tetap oke karena satu URL dengan heading terstruktur.

- **Home** (`#home`) — hero, tagline, tanggal, venue, CTA daftar
- **Agenda** (`#agenda`) — jadwal sesi per jam (Summit + Gala Dinner)
- **Speakers** (`#speakers`) — Wapres, menteri, committee, leadership IDN-Preneur
- **Packages** (`#packages`) — tabel harga peserta + sponsorship tier
- **Contact** (`#contact`) — WA, email, alamat, FAQ singkat

### Halaman terpisah (transaksional, punya URL sendiri)

| Halaman | Route | Fungsi |
|---|---|---|
| Form Pendaftaran | `/register` | Pilih paket, isi data, submit → generate nomor referensi |
| Instruksi Bayar | `/payment/[ref]` | Info rekening + upload bukti transfer |
| Cek Status | `/status` | Input nomor referensi → lihat status terkini |

### Admin (perlu login)

| Halaman | Route | Fungsi |
|---|---|---|
| Dashboard | `/admin` | List pendaftar, filter status, search nomor referensi |
| Detail Pendaftar | `/admin/[id]` | Lihat bukti transfer, verifikasi/tolak |
| Export | `/admin/export` | Download CSV buat laporan keuangan |

**Total: 8 halaman public (5 section landing + 3 transaksional) + 3 halaman admin**

## 8. Skema Database (draft awal)

```
registrations
├── id                uuid (PK)
├── ref_number         text (unique, contoh: IDN-2026-0001)
├── name               text
├── email              text
├── phone              text
├── country            text
├── package_type       enum (full_access, summit_only, gala_only, sponsor_platinum, sponsor_gold, sponsor_silver, corporate_full, corporate_half)
├── amount             numeric
├── status             enum (registered, awaiting_verification, confirmed, rejected)
├── proof_url          text (link ke Supabase Storage)
├── verified_by        uuid (FK admin_users, nullable)
├── verified_at        timestamptz (nullable)
├── created_at         timestamptz
└── updated_at         timestamptz

admin_users
├── id                 uuid (PK, dari Supabase Auth)
├── name               text
└── role               enum (secretariat, finance, superadmin)
```

## 9. Yang Perlu Dikonfirmasi ke Client

- [ ] SLA verifikasi pembayaran (berapa hari/jam kerja)
- [ ] PIC panitia yang pegang akses dashboard admin
- [ ] Siapa siapkan terjemahan konten Bahasa Indonesia
- [ ] Format e-tiket final: email + PDF + QR (rekomendasi) atau cukup email teks
- [ ] Domain final buat deploy production

## 10. Referensi Desain

- [ft.nuanu.com](https://ft.nuanu.com/) — gaya visual conference modern, pola landing-scroll
- [diasporaindonesia.org](https://www.diasporaindonesia.org/) — identitas brand organisasi induk (IDN Global), palet warna/logo bisa diselaraskan
