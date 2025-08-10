#!/bin/bash
# service.sh
# Script ini akan dijalankan setelah git pull oleh webhook-service

echo "Menjalankan post-pull script..."

echo "Menjalankan git pull..."
git pull
npm install --force

	# Fungsi untuk cek dan jalankan service jika belum berjalan
check_and_start() {
	PORT=$1
	SCRIPT=$2
	NAME=$3
	if lsof -i :$PORT | grep LISTEN > /dev/null; then
		echo "$NAME sudah berjalan di port $PORT."
	else
		echo "$NAME belum berjalan. Menjalankan dengan pm2..."
		pm2 start $SCRIPT --name $NAME
	fi
}

# Cek dan jalankan masing-masing service
check_and_start 3000 apigetway.js apigetway
check_and_start 3001 webhook-service.js git-webhook
check_and_start 3002 landing.js landing

echo "Selesai menjalankan post-pull script."
