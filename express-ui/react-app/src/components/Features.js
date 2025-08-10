import React from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: "Drag & Drop Builder",
    desc: "Buat landing page tanpa coding, cukup drag & drop komponen."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
    title: "Template Modern",
    desc: "Pilih dari puluhan template profesional siap pakai."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-1 4V7a1 1 0 00-1-1h-3m-4 0H7a1 1 0 00-1 1v4" /></svg>
    ),
    title: "Custom Domain & Hosting",
    desc: "Langsung online dengan domain sendiri dan hosting cepat."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
    ),
    title: "Integrasi & Analytics",
    desc: "Integrasi WhatsApp, Google Analytics, Facebook Pixel, dan lainnya."
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-black">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
