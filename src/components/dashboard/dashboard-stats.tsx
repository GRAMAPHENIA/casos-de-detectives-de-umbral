import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react"

const stats = [
  {
    title: "Casos Activos",
    value: "12",
    icon: FileText,
    description: "En investigación",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Pendientes",
    value: "5",
    icon: Clock,
    description: "Requieren atención",
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Resueltos",
    value: "28",
    icon: CheckCircle,
    description: "Este mes",
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Urgentes",
    value: "3",
    icon: AlertTriangle,
    description: "Alta prioridad",
    color: "text-red-600 dark:text-red-400",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
