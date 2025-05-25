import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { InvestigationInterface } from "@/components/investigation/investigation-interface"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InvestigationPage({ params }: { params: { id: string } }) {
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
          <Play className="h-4 w-4 text-green-600 dark:text-green-400" />
          <h1 className="text-lg font-semibold">Investigación Activa</h1>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            En Progreso
          </Badge>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <InvestigationInterface caseId={params.id} />
      </div>
    </SidebarInset>
  )
}
