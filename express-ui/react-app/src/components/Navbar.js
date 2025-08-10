import React from "react";

const menu = [
  { name: "Home", href: "#" },
  { name: "Fitur", href: "#features" },
  { name: "Template", href: "#templates" },
  { name: "Harga", href: "#pricing" },
  { name: "Kontak", href: "#footer" }
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-7 h-7 bg-gradient-to-tr from-red-500 to-orange-400 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M8 12l2.5 2.5L16 9" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="font-extrabold text-xl tracking-tight text-black">WebSaaS <span className="text-orange-500">Builder</span></span>
        </div>
        <div className="hidden md:flex space-x-6">
          {menu.map((item, i) => (
            <a key={i} href={item.href} className="text-black hover:text-orange-500 font-medium transition">{item.name}</a>
          ))}
        </div>
        <a href="#pricing" className="ml-4 bg-gradient-to-tr from-red-500 to-orange-400 text-white px-5 py-2 rounded-full font-bold shadow hover:opacity-90 transition hidden md:inline-block">Coba Gratis</a>
      </div>
    </nav>
  );
}
