import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ProfileDetails } from "@/components/profile/profile-details"

export default function ProfilePage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-lg font-semibold">Perfil del Detective</h1>
      </header>

      <div className="flex-1 overflow-auto">
        <ProfileDetails />
      </div>
    </SidebarInset>
  )
}
