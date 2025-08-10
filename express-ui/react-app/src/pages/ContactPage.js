// ContactPage.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen flex flex-col">
      <Navbar />
  <main className="max-w-2xl mx-auto py-28 px-4 flex-1 pt-20">
        <h1 className="text-3xl font-extrabold mb-4 text-black">Kontak Kami</h1>
        <p className="mb-6 text-gray-700">Ada pertanyaan atau butuh bantuan? Hubungi tim support kami kapan saja!</p>
        <form className="space-y-4">
          <input type="text" placeholder="Nama" className="w-full border rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="w-full border rounded px-4 py-2" />
          <textarea placeholder="Pesan" className="w-full border rounded px-4 py-2" rows="4"></textarea>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded font-bold hover:bg-orange-600 transition">Kirim Pesan</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
