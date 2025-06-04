import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import dynamic from "next/dynamic";

const NotificationContent = () => {
  return (
    <Tooltip
      content="Notificaciones"
      placement="bottom"
      className="bg-zinc-900 px-4 rounded-lg text-zinc-400"
    >
      <button 
        className="p-1 hover:bg-zinc-800 rounded-md transition-colors"
        aria-label="Ver notificaciones"
      >
        <Image
          src="/icons/bell-notification.svg"
          alt="Notificaciones"
          width={24}
          height={24}
          className="invert-25 hover:invert-[1] transition-all"
        />
      </button>
    </Tooltip>
  );
};

const Notifications = dynamic(
  () => Promise.resolve(NotificationContent),
  { 
    ssr: false,
    loading: () => (
      <div className="w-6 h-6 bg-zinc-700 rounded-md animate-pulse"></div>
    )
  }
);

export default Notifications;
