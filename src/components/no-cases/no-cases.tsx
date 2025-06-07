"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./no-cases.module.css";

export default function NoCases() {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative w-64 h-64">
          <Image
            src="/logo-azul.svg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <Link
          href="/map"
          className="px-6 py-3 bg-blue-500/10 text-blue-500 hover:text-blue-400 rounded-tl-xl rounded-br-xl hover:bg-blue-500/20 transition-colors"
        >
          Buscar casos
        </Link>
      </div>
    </div>
  );
}
