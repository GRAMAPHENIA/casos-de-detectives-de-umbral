import Image from "next/image";

export default function Menu() {
  return (
    <nav className="border border-white/20 p-2 m-2 mt-3 rounded-lg flex justify-between">
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
      <ul>
        <li>
          <Image
            className="invert-25 hover:invert-[1] transition-all cursor-pointer"
            src="/icons/bell-notification.svg"
            alt="Bell"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </nav>
  );
}
