"use client";

import Image from "next/image";
import Notifications from "../notification/Notifications";
import { Tooltip } from "@heroui/tooltip";

const MenuButton = () => {
  return (
    <Tooltip
      content="Menú"
      placement="bottom"
      className="bg-zinc-900 px-4 rounded-lg text-zinc-400"
    >
      <button 
        className="p-1 hover:bg-zinc-800 rounded-md transition-colors"
        aria-label="Abrir menú"
      >
        <Image
          src="/icons/menu.svg"
          alt="Menú"
          width={24}
          height={24}
          className="invert-25 hover:invert-[1] transition-all"
        />
      </button>
    </Tooltip>
  );
};

export default function Menu() {
  return (
    <nav className="p-2 m-2 mt-3 flex justify-between">
      <ul>
        <li>
          <MenuButton />
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <Notifications />
        </li>
      </ul>
    </nav>
  );
}
