// TemplatesPage.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const templates = [
  {
    name: "Template Bisnis",
    color: "border-orange-400",
    desc: "Cocok untuk perusahaan, jasa, dan profesional."
  },
  {
    name: "Template Startup",
    color: "border-red-400",
    desc: "Desain modern untuk startup dan aplikasi digital."
  },
  {
    name: "Template UMKM",
    color: "border-black",
    desc: "Simple dan efektif untuk usaha kecil dan menengah."
  },
  {
    name: "Template Event",
    color: "border-orange-500",
    desc: "Promosikan event, seminar, atau webinar dengan mudah."
  }
];

export default function TemplatesPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen flex flex-col">
      <Navbar />
  <main className="max-w-5xl mx-auto py-28 px-4 flex-1 pt-20">
        <div className="mb-10 flex flex-col items-center">
          <img src="https://undraw.co/api/illustrations/website_setup.svg" alt="Template" className="w-40 h-40 mb-4" onError={e => e.target.style.display='none'} />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-black text-center">
            Pilihan <span className="text-orange-500">Template</span> <span className="text-red-500">Landing Page</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center">Pilih dari berbagai template profesional yang siap digunakan untuk berbagai kebutuhan bisnis Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {templates.map((tpl, i) => (
            <div key={i} className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all border-t-4 ${tpl.color}`}>
              <svg className="w-12 h-12 mb-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 9h16"/></svg>
              <h3 className="font-bold text-xl mb-2 text-black text-center">{tpl.name}</h3>
              <p className="text-gray-600 text-center">{tpl.desc}</p>
              <button className="mt-4 bg-gradient-to-tr from-orange-500 to-red-400 text-white px-4 py-2 rounded-full font-bold shadow hover:opacity-90 transition">Lihat Demo</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
