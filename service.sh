#!/bin/bash
# service.sh
# Script ini akan dijalankan setelah git pull oleh webhook-service

echo "Menjalankan post-pull script..."
# Tambahkan perintah yang ingin dijalankan setelah pull di bawah ini
# Contoh: npm install && npm run build
npm install --force

echo "Selesai menjalankan post-pull script."
