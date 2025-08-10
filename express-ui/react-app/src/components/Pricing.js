import React from "react";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    features: [
      "1 Landing Page",
      "Subdomain .websaas.site",
      "Template Basic",
      "Support Email"
    ],
    cta: "Coba Gratis"
  },
  {
    name: "Pro",
    price: "Rp 99.000/bulan",
    features: [
      "Unlimited Landing Page",
      "Custom Domain",
      "Template Premium",
      "Integrasi WhatsApp & Analytics",
      "Support Prioritas"
    ],
    cta: "Upgrade Pro"
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    features: [
      "Kebutuhan Khusus Bisnis",
      "Integrasi API",
      "Akun Team",
      "Support Dedicated"
    ],
    cta: "Konsultasi"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">Pilih Paket Sesuai Kebutuhan</h2>
        <p className="text-gray-600">Mulai gratis, upgrade kapan saja. Tidak ada biaya tersembunyi.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className="border rounded-lg shadow hover:shadow-lg transition p-8 flex flex-col items-center">
            <div className="font-bold text-xl mb-2 text-blue-600">{p.name}</div>
            <div className="text-2xl font-extrabold mb-4">{p.price}</div>
            <ul className="mb-6 text-gray-700 text-sm text-left">
              {p.features.map((f, j) => (
                <li key={j} className="mb-1 flex items-center"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>{f}</li>
              ))}
            </ul>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition">{p.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
