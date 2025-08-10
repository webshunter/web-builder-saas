// FeaturesPage.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-orange-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: "Drag & Drop Editor",
    desc: "Buat landing page tanpa coding, cukup drag & drop komponen."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-red-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
    title: "Template Modern",
    desc: "Pilih dari puluhan template profesional siap pakai."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-black mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-1 4V7a1 1 0 00-1-1h-3m-4 0H7a1 1 0 00-1 1v4" /></svg>
    ),
    title: "Custom Domain & Hosting",
    desc: "Langsung online dengan domain sendiri dan hosting cepat."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-orange-400 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
    ),
    title: "Integrasi & Analytics",
    desc: "Integrasi WhatsApp, Google Analytics, Facebook Pixel, dan lainnya."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-orange-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    title: "Optimasi SEO & Performa",
    desc: "Website otomatis SEO friendly dan super cepat."
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen flex flex-col">
      <Navbar />
  <main className="max-w-5xl mx-auto py-28 px-4 flex-1 pt-20">
        <div className="mb-10 flex flex-col items-center">
          <img src="https://undraw.co/api/illustrations/website_builder.svg" alt="Website Builder" className="w-40 h-40 mb-4" onError={e => e.target.style.display='none'} />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-black text-center">
            Fitur <span className="text-orange-500">Unggulan</span> <span className="text-red-500">WebSaaS</span> Builder
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center">Semua yang Anda butuhkan untuk membangun landing page modern, cepat, dan powerful.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition-all border-t-4 border-orange-100">
              {f.icon}
              <h3 className="font-bold text-xl mt-4 mb-2 text-black text-center">{f.title}</h3>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
