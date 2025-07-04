
import { Bell } from 'lucide-react';
import { Tooltip } from "@heroui/tooltip";
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
        <Bell className="w-6 h-6 text-zinc-500" />
      </button>
    </Tooltip>
  );
};

const Notifications = dynamic(
  () => Promise.resolve(NotificationContent),
  { 
    ssr: false,
    loading: () => (
      <div className="w-8 h-8 bg-zinc-700 rounded-md animate-pulse"></div>
    )
  }
);

export default Notifications;
