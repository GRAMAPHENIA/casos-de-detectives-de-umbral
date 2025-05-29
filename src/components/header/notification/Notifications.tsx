import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

export default function Notifications() {
  return (
    <>
      <Tooltip
        content="Notificaciones"
        placement="right-start"
        className="bg-zinc-900 px-4 rounded-lg text-zinc-400"
      >
        <Image
        className="invert-25 hover:invert-[1] transition-all cursor-pointer"
        src="/icons/bell-notification.svg"
        alt="Bell"
        width={24}
        height={24}
      />
      </Tooltip>
    </>
    
  );
}
