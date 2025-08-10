import React from "react";

const testimonials = [
  {
    name: "Andi Pratama",
    company: "Digital Marketer",
    text: "Landing page saya online dalam 10 menit! UI-nya mudah, hasilnya profesional, dan supportnya responsif.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Siti Rahma",
    company: "Owner Toko Online",
    text: "Fitur drag & drop sangat membantu. Saya bisa update promo sendiri tanpa ribet.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Budi Santoso",
    company: "Startup Founder",
    text: "Integrasi analytics dan WhatsApp langsung jalan. Sangat cocok untuk bisnis digital!",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">Apa Kata Pengguna?</h2>
        <p className="text-gray-600">Dipercaya ratusan UMKM, startup, dan digital marketer di Indonesia.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-2 border-blue-200" />
            <p className="text-gray-700 italic mb-3">“{t.text}”</p>
            <div className="font-bold text-blue-600">{t.name}</div>
            <div className="text-xs text-gray-500">{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
