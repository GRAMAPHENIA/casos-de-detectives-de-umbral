import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Calendar, Award, FileText, TrendingUp, Edit } from "lucide-react"

const mockProfile = {
  name: "Detective García",
  email: "garcia@policia.gov",
  phone: "+1 234-567-8900",
  badge: "DET-001",
  department: "Investigaciones Criminales",
  rank: "Detective Principal",
  yearsOfService: 12,
  location: "Comisaría Central",
  joinDate: "2012-03-15",
}

const mockStats = {
  totalCases: 156,
  activeCases: 12,
  solvedCases: 128,
  solveRate: 82,
  avgCaseTime: "45 días",
}

const mockRecentCases = [
  { id: "CASE-001", title: "Robo en Joyería Central", status: "active", priority: "high" },
  { id: "CASE-003", title: "Desaparición María López", status: "active", priority: "urgent" },
  { id: "CASE-007", title: "Fraude Bancario", status: "pending", priority: "medium" },
]

export function ProfileDetails() {
  return (
    <div className="p-4 space-y-6">
      {/* Información Personal */}
      <Card className="border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Información Personal
            </CardTitle>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-lg">DG</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Nombre</label>
                  <p className="text-sm">{mockProfile.name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Placa</label>
                  <p className="text-sm">{mockProfile.badge}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Rango</label>
                  <Badge variant="secondary">{mockProfile.rank}</Badge>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Departamento</label>
                  <p className="text-sm">{mockProfile.department}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </label>
                  <p className="text-sm">{mockProfile.email}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Teléfono
                  </label>
                  <p className="text-sm">{mockProfile.phone}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Ubicación
                  </label>
                  <p className="text-sm">{mockProfile.location}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Fecha de ingreso
                  </label>
                  <p className="text-sm">{mockProfile.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Estadísticas de Rendimiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{mockStats.totalCases}</div>
              <div className="text-sm text-muted-foreground">Casos Totales</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{mockStats.activeCases}</div>
              <div className="text-sm text-muted-foreground">Casos Activos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{mockStats.solvedCases}</div>
              <div className="text-sm text-muted-foreground">Casos Resueltos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{mockStats.solveRate}%</div>
              <div className="text-sm text-muted-foreground">Tasa de Resolución</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">{mockStats.avgCaseTime}</div>
              <div className="text-sm text-muted-foreground">Tiempo Promedio</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Casos Asignados */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Casos Asignados Recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRecentCases.map((case_) => (
              <div
                key={case_.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <h4 className="text-sm font-medium">{case_.title}</h4>
                    <p className="text-xs text-muted-foreground">{case_.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={case_.status === "active" ? "default" : "secondary"} className="text-xs">
                    {case_.status === "active" ? "Activo" : "Pendiente"}
                  </Badge>
                  <Badge variant={case_.priority === "urgent" ? "destructive" : "outline"} className="text-xs">
                    {case_.priority === "urgent" ? "Urgente" : case_.priority === "high" ? "Alta" : "Media"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Logros y Reconocimientos */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Logros y Reconocimientos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40">
              <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              <div>
                <h4 className="text-sm font-medium">Detective del Año</h4>
                <p className="text-xs text-muted-foreground">2023 - Mayor tasa de resolución</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40">
              <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="text-sm font-medium">Servicio Distinguido</h4>
                <p className="text-xs text-muted-foreground">2021 - 10 años de servicio</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div>
                <h4 className="text-sm font-medium">Caso Complejo Resuelto</h4>
                <p className="text-xs text-muted-foreground">2022 - Fraude millonario</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40">
              <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="text-sm font-medium">Trabajo en Equipo</h4>
                <p className="text-xs text-muted-foreground">2023 - Operación conjunta</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
