import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-500 via-orange-400 to-red-500 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Bangun <span className="text-black">Website</span> <span className="text-orange-200">Profesional</span><br />dalam Hitungan <span className="text-red-200">Menit</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
        SaaS Website Builder untuk landing page modern, cepat, dan mudah tanpa coding. Cukup drag & drop, online dalam sekejap!
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <a href="#pricing" className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-50 transition">Coba Gratis Sekarang</a>
        <a href="#features" className="inline-block bg-black text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-900 transition">Lihat Fitur</a>
      </div>
    </section>
  );
}
