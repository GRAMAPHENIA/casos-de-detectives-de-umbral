import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Plus, Phone, Mail } from "lucide-react"

const mockPeople = [
  {
    id: "P-001",
    name: "Carlos Mendoza",
    role: "victim",
    phone: "+1 234-567-8901",
    email: "carlos.mendoza@email.com",
    notes: "Propietario de la joyería. Cooperativo con la investigación.",
  },
  {
    id: "P-002",
    name: "Ana García",
    role: "witness",
    phone: "+1 234-567-8902",
    email: "ana.garcia@email.com",
    notes: "Vio a dos personas sospechosas cerca del local a las 22:30.",
  },
  {
    id: "P-003",
    name: "Miguel Torres",
    role: "suspect",
    phone: "Desconocido",
    email: "Desconocido",
    notes: "Identificado en video de seguridad. Antecedentes por robo.",
  },
  {
    id: "P-004",
    name: "Laura Jiménez",
    role: "witness",
    phone: "+1 234-567-8904",
    email: "laura.jimenez@email.com",
    notes: "Vigilante de seguridad del edificio contiguo.",
  },
]

const roleColors = {
  victim: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  suspect: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  witness: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
}

const roleLabels = {
  victim: "Víctima",
  suspect: "Sospechoso",
  witness: "Testigo",
}

export function PeopleInvolved() {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Personas Involucradas ({mockPeople.length})
          </CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPeople.map((person) => (
            <div
              key={person.id}
              className="flex items-start gap-3 p-3 rounded-lg border border-border/40 hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback className="text-xs">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium">{person.name}</h4>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${roleColors[person.role as keyof typeof roleColors]}`}
                  >
                    {roleLabels[person.role as keyof typeof roleLabels]}
                  </Badge>
                </div>
                <div className="space-y-1 mb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{person.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span>{person.email}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{person.notes}</p>
                <p className="text-xs text-muted-foreground mt-1">{person.id}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
