#!/bin/bash
# service.sh
# Script ini akan dijalankan setelah git pull oleh webhook-service

echo "Menjalankan post-pull script..."

echo "Menjalankan git pull..."
echo "Force update dari remote..."
git fetch --all
git reset --hard origin/main
git pull
npm install --force

# Install npm dependencies di root
npm install --force

# Install npm dependencies hanya di folder landing-vite jika ada package.json
if [ -d "landing-vite" ] && [ -f "landing-vite/package.json" ]; then
	echo "Menjalankan npm install di landing-vite ..."
	cd landing-vite
	npm install --force
	echo "Build project landing-vite ..."
	npm run build

	# Jalankan atau reload pm2 untuk landing-vite (port 3003)
	if pm2 list | grep -wq landing-vite; then
		echo "landing-vite sudah ada di pm2. Reload..."
		pm2 reload landing-vite
	elif lsof -i :3003 | grep LISTEN > /dev/null; then
		echo "landing-vite sudah berjalan di port 3003, tapi tidak di pm2."
	else
		echo "landing-vite belum berjalan. Menjalankan dengan pm2..."
		pm2 start "npm" --name landing-vite -- run preview
	fi
	cd ..
fi

	# Fungsi untuk cek dan jalankan service jika belum berjalan
check_and_start() {
	PORT=$1
	SCRIPT=$2
	NAME=$3
	if pm2 list | grep -wq $NAME; then
		echo "$NAME sudah ada di pm2. Reload..."
		pm2 reload $NAME
	elif lsof -i :$PORT | grep LISTEN > /dev/null; then
		echo "$NAME sudah berjalan di port $PORT, tapi tidak di pm2."
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
