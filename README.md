# Webhook Service for Auto Git Pull

Service ini menggunakan Express.js untuk menerima webhook dari GitHub dan otomatis menjalankan `git pull` pada root project setiap ada push ke repository.

## Fitur
- Endpoint webhook: `/webhook` (POST)
- Menjalankan `git pull` secara otomatis saat webhook diterima
- Mudah diintegrasikan dengan GitHub Webhook

## Cara Penggunaan

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Jalankan service**
   ```bash
   npm start
   ```
   Secara default berjalan di port 3001.

3. **Setup Webhook di GitHub**
   - Buka repository Anda di GitHub
   - Masuk ke Settings > Webhooks > Add webhook
   - Isi URL dengan: `http://<server-anda>:3001/webhook`
   - Pilih event: "Just the push event"
   - Simpan webhook

4. **Testing**
   - Lakukan push ke repository GitHub
   - Service akan otomatis menjalankan `git pull` di root project

## Catatan
- Pastikan service ini dijalankan di direktori root project git Anda.
- Untuk keamanan, tambahkan verifikasi secret pada webhook (lihat komentar di kode).
- Jangan lupa menyesuaikan port jika diperlukan.

## Struktur File
- `webhook-service.js` : Source code utama service webhook
- `package.json` : Konfigurasi npm dan dependencies
- `.gitignore` : File/folder yang diabaikan oleh git

---

Created by webshunter
