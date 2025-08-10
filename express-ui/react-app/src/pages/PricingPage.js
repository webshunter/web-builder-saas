// PricingPage.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const plans = [
  {
    name: "Basic",
    price: "Rp 99.000/bln",
    features: ["1 Website", "Semua Fitur Utama", "Custom Domain"],
    color: "border-orange-400",
    badge: null,
    btn: "Pilih Paket"
  },
  {
    name: "Pro",
    price: "Rp 199.000/bln",
    features: ["5 Website", "Semua Fitur", "Integrasi & Analytics"],
    color: "border-red-400",
    badge: "Paling Populer",
    btn: "Pilih Paket"
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Website", "Support Prioritas", "Fitur Kustom"],
    color: "border-black",
    badge: null,
    btn: "Hubungi Kami"
  }
];

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen flex flex-col">
      <Navbar />
  <main className="max-w-5xl mx-auto py-28 px-4 flex-1 pt-20">
        <div className="mb-10 flex flex-col items-center">
          <img src="https://undraw.co/api/illustrations/pricing.svg" alt="Pricing" className="w-40 h-40 mb-4" onError={e => e.target.style.display='none'} />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-black text-center">
            Pilih <span className="text-orange-500">Paket</span> <span className="text-red-500">Terbaik</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center">Sesuaikan kebutuhan website Anda dengan paket harga fleksibel dan fitur lengkap.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {plans.map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all border-t-4 ${plan.color}`}>
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-red-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow">{plan.badge}</span>
              )}
              <h3 className="font-bold text-2xl mb-2 text-black text-center">{plan.name}</h3>
              <div className="text-3xl font-extrabold mb-4 text-orange-500">{plan.price}</div>
              <ul className="text-gray-700 mb-4 space-y-1">
                {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>
              <button className="mt-2 bg-gradient-to-tr from-orange-500 to-red-400 text-white px-6 py-2 rounded-full font-bold shadow hover:opacity-90 transition">{plan.btn}</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
