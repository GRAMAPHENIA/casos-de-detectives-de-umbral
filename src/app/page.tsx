import Footer from "@/components/footer/footer";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900/20 to-zinc-900/20">

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <Image
              src="/logo-azul.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-4">
            <Link
              href="/casos"
              className="inline-block px-6 py-3 bg-blue-500/10 text-blue-500 hover:text-blue-400 rounded-tl-xl rounded-br-xl hover:bg-blue-500/20 transition-colors text-lg font-medium"
            >
              Leer casos
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
}
