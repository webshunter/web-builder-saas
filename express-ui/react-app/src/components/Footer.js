import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-bold text-lg">WebSaaS Builder</div>
        <div className="text-sm">&copy; {new Date().getFullYear()} WebSaaS. All rights reserved.</div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400">Kontak</a>
          <a href="#" className="hover:text-blue-400">Kebijakan</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
