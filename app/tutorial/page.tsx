import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { TutorialInterface } from "@/components/tutorial/tutorial-interface"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TutorialPage() {
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
          <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <h1 className="text-lg font-semibold">Tutorial Interactivo</h1>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Aprende Jugando
          </Badge>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <TutorialInterface />
      </div>
    </SidebarInset>
  )
}
