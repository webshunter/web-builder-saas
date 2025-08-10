
# Web Builder SaaS - Monorepo

> Platform SaaS landing page builder modern, siap auto-deploy, dengan integrasi React, Express, Tailwind, dan auto-pull GitHub webhook.

---

## 🚀 Struktur Proyek

```
├── webhook-service.js      # Service Express auto-pull dari GitHub
├── service.sh              # Script shell orchestrasi build & deploy
├── apigetway.js, landing.js# (Opsional) Service lain
├── express-ui/             # Folder utama web app (Express + React)
│   ├── index.js            # Entry point Express
│   ├── package.json        # Script build/dev/serve
│   ├── postbuild.js        # Copy hasil build React
│   ├── public/             # Asset statis & hasil build React
│   ├── react-app/          # Source code React (frontend)
│   │   ├── src/components/ # Komponen modular UI
│   │   ├── src/pages/      # Halaman per menu
│   │   ├── src/Router.js   # SPA router hash-based
│   │   └── ...             # File React lain
│   ├── tailwind.config.js  # Tailwind config
│   └── views/              # EJS template (jika SSR)
└── ...
```

---

## 🛠️ Pengembangan

### 1. Development
- Jalankan `npm run dev` di `express-ui/` untuk parallel Express & React dev server.
- Edit komponen di `react-app/src/components/` dan halaman di `react-app/src/pages/`.

### 2. Build Production
- Jalankan `npm run fullbuild` di `express-ui/`:
   - Build React (`react-app/build`)
   - Copy hasil build ke `express-ui/public/react`
   - Build Tailwind CSS ke `public/styles/output.css`
- Express akan serve hasil build React dan asset statis.

### 3. Auto Deploy
- Push ke GitHub → webhook-service menerima event → jalankan `service.sh` untuk pull, build, dan restart service.

---

## 📚 Struktur Folder Penting

- `express-ui/react-app/src/components/` : Komponen UI (Navbar, Hero, dsb)
- `express-ui/react-app/src/pages/`      : Halaman per menu (Features, Pricing, Template, Contact)
- `express-ui/react-app/src/Router.js`   : SPA router hash-based
- `express-ui/public/`                   : Asset statis & hasil build React
- `service.sh`                           : Script auto build & restart
- `webhook-service.js`                   : Service webhook auto-pull

---

## 💡 Saran Pengembangan Berikutnya

- Tambah halaman baru: buat file di `src/pages/` dan update menu di `Navbar.js`
- Tambah API: buat endpoint di `express-ui/index.js`
- Tambah unit test: di `src/App.test.js` atau folder `__tests__`
- Integrasi CI/CD: GitHub Actions untuk test & build otomatis
- Keamanan: verifikasi secret webhook, validasi input user
- Optimasi: lazy load, code splitting, optimasi asset React
- Dokumentasi: update README.md setiap ada fitur/struktur baru

---

Created by webshunter
