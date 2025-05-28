"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function UpdatedIndicator() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    setCurrentDate(
      now.toLocaleString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, []);

  return (
    <div
      className="relative cursor-default transition-opacity"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Image
        className="invert-25 hover:invert-[1] transition-all"
        src="/icons/timer.svg"
        alt="Actualizado"
        width={24}
        height={24}
      />
      {showTooltip && (
        <div className="absolute -bottom-20 transform -translate-x-[90%] bg-zinc-900/20 backdrop-blur-sm border border-zinc-700/50 text-zinc-50 px-3 py-2 rounded-lg text-sm z-10 w-[250px] shadow-lg shadow-black/20 ring-0">
          <p className="mb-1">Actualizado</p>
          <p>{currentDate}</p>
        </div>
      )}
    </div>
  );
}
