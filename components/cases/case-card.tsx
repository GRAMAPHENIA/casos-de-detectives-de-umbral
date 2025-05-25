import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MoreHorizontal, Users, FileImage } from "lucide-react"
import Link from "next/link"

interface CaseCardProps {
  case: {
    id: string
    title: string
    status: string
    priority: string
    assignedTo: string
    lastUpdate: string
    description: string
    evidenceCount: number
    witnessCount: number
  }
}

const statusColors = {
  active: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  pending: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  closed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
}

const priorityColors = {
  urgent: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  low: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
}

const statusLabels = {
  active: "Activo",
  pending: "Pendiente",
  closed: "Cerrado",
}

const priorityLabels = {
  urgent: "Urgente",
  high: "Alta",
  medium: "Media",
  low: "Baja",
}

export function CaseCard({ case: caseData }: CaseCardProps) {
  return (
    <Card className="border-border/40 hover:bg-muted/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">{caseData.title}</h3>
              <Badge
                variant="secondary"
                className={`text-xs ${statusColors[caseData.status as keyof typeof statusColors]}`}
              >
                {statusLabels[caseData.status as keyof typeof statusLabels]}
              </Badge>
              <Badge
                variant="outline"
                className={`text-xs ${priorityColors[caseData.priority as keyof typeof priorityColors]}`}
              >
                {priorityLabels[caseData.priority as keyof typeof priorityLabels]}
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground">{caseData.id}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{caseData.description}</p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Asignado: {caseData.assignedTo}</span>
              <span>Actualizado: {caseData.lastUpdate}</span>
              <div className="flex items-center gap-1">
                <FileImage className="h-3 w-3" />
                <span>{caseData.evidenceCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{caseData.witnessCount}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 ml-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/cases/${caseData.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
