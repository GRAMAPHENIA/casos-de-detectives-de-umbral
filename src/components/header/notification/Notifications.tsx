import Image from "next/image";

export default function Notifications() {
  return (
    <Image
      className="invert-25 hover:invert-[1] transition-all cursor-pointer"
      src="/icons/bell-notification.svg"
      alt="Bell"
      width={24}
      height={24}
    />
  );
}
