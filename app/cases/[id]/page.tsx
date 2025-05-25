import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { CaseDetails } from "@/components/cases/case-details"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CasePage({ params }: { params: { id: string } }) {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
        </Button>
        <Separator orientation="vertical" className="mx-2 h-4" />
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Caso {params.id}</h1>
          <Badge variant="secondary">Activo</Badge>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        <CaseDetails caseId={params.id} />
      </div>
    </SidebarInset>
  )
}
