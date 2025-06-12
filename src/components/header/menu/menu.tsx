"use client";

import { useRouter } from "next/navigation";
import { Tooltip } from "@heroui/tooltip";
import { ArrowLeftToLine } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Tooltip
      content="Volver"
      placement="right"
      className="bg-zinc-800/20 p-2 rounded-lg text-zinc-400"
    >
      <button
        onClick={() => router.back()}
        className="p-1 hover:bg-zinc-800/20 rounded-md transition-colors"
        aria-label="Volver"
      >
        <ArrowLeftToLine className="w-8 h-8 text-zinc-500 p-1" />
      </button>
    </Tooltip>
  );
};

export default function Menu() {
  return (
    <nav className="p-2 m-2 mt-3 flex">
      <BackButton />
    </nav>
  );
}
