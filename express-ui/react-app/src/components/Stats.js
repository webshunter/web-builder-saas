// Stats.js
// Section for statistics (1000+ UMKM, 95% success, etc)

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-orange-500">1000+</div>
          <div className="mt-2 text-gray-700 text-sm md:text-base">UMKM Terbantu</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-orange-500">95%</div>
          <div className="mt-2 text-gray-700 text-sm md:text-base">Tingkat Keberhasilan</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-orange-500">24/7</div>
          <div className="mt-2 text-gray-700 text-sm md:text-base">Support Available</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-orange-500">30</div>
          <div className="mt-2 text-gray-700 text-sm md:text-base">Menit Konsultasi</div>
        </div>
      </div>
    </section>
  );
}
