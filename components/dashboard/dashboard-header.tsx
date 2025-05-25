import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center gap-2">
      <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
      <h1 className="text-lg font-semibold">Detective Game</h1>
      <Badge variant="secondary" className="text-xs">
        Nivel 1 - Novato
      </Badge>
    </div>
  )
}
