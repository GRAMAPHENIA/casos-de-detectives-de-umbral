import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { EmptyState } from "@/components/dashboard/empty-state"
import { GameStats } from "@/components/dashboard/game-stats"

export default function DashboardPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <DashboardHeader />
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <GameStats />
        <EmptyState />
      </div>
    </SidebarInset>
  )
}
