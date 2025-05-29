import Image from "next/image";
import Notifications from "../notification/Notifications";
import { Tooltip } from "@nextui-org/tooltip";

export default function Menu() {
  return (
    <nav className="p-2 m-2 mt-3 flex justify-between">
      <ul>
        <li>
          <Tooltip
            content="Menú"
            placement="right-start"
            className="bg-zinc-900 px-4 rounded-lg text-zinc-400"
          >
            <Image
              className="invert-25 hover:invert-[1] transition-all cursor-pointer"
              src="/icons/menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </Tooltip>
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
