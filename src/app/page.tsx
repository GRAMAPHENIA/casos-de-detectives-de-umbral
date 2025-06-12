import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900/20 to-zinc-900/20 p-6">
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="/logo-azul.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div>
          <Link
            href="/casos"
            className="inline-block px-8 py-4 bg-blue-500/10 text-blue-500 hover:text-blue-400 rounded-tl-xl rounded-br-xl hover:bg-blue-500/20 transition-colors text-lg font-medium"
          >
            Leer casos
          </Link>
        </div>
      </div>
    </div>
  );
}
