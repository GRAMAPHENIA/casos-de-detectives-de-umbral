import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { SettingsInterface } from "@/components/settings/settings-interface"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </Button>
        <Separator orientation="vertical" className="mx-2 h-4" />
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <h1 className="text-lg font-semibold">Configuración</h1>
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            Personalización
          </Badge>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        <SettingsInterface />
      </div>
    </SidebarInset>
  )
}
