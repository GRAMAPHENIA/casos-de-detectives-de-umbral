import Image from "next/image";
import Notifications from "../notification/Notifications";

export default function Menu() {
  return (
    <nav className="p-2 m-2 mt-3 flex justify-between">
      <ul>
        <li>
          <Image
            className="invert-25 hover:invert-[1] transition-all cursor-pointer"
            src="/icons/menu.svg"
            alt="Menu"
            width={24}
            height={24}
          />
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
