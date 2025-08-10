// CTA.js
// Call to action section with orange background

export default function CTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Memulai Sertifikasi Halal?</h2>
        <p className="mb-6 text-base md:text-lg">Bergabunglah dengan ribuan UMKM yang telah mempercayakan proses sertifikasi halal mereka kepada kami</p>
        <button className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition">Mulai Konsultasi Sekarang</button>
      </div>
    </section>
  );
}
