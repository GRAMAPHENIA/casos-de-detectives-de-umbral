"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type CaseStatus = 'active' | 'pending' | 'solved' | 'archived'
type Priority = 'low' | 'medium' | 'high' | 'critical'

interface CaseDetailsProps {
  caseId: string
}

export function CaseDetails({ caseId }: CaseDetailsProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [caseData, setCaseData] = useState<any>(null)

  // Datos de ejemplo
  useEffect(() => {
    const fetchCaseData = async () => {
      setIsLoading(true)
      
      // Simular retraso de red
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockData = {
        id: caseId,
        title: `Caso #${caseId} - Robo en el Banco Central`,
        status: 'active' as CaseStatus,
        priority: 'high' as Priority,
        description: 'Robo ocurrido en las instalaciones del Banco Central. Se llevaron aproximadamente $2,000,000 en efectivo.',
        createdAt: '2023-05-15',
        updatedAt: '2023-05-20',
        location: 'Banco Central - Sede Principal',
        assignedTo: 'Equipo de Investigación A',
        category: 'Robo',
        tags: ['alto_perfil', 'multimillonario']
      }
      
      setCaseData(mockData)
      setIsLoading(false)
    }
    
    fetchCaseData()
  }, [caseId])

  const getStatusBadge = (status: CaseStatus) => {
    const statusMap = {
      active: { label: 'Activo', variant: 'default' as const },
      pending: { label: 'Pendiente', variant: 'secondary' as const },
      solved: { label: 'Resuelto', variant: 'success' as const },
      archived: { label: 'Archivado', variant: 'outline' as const }
    }
    
    const { label, variant } = statusMap[status] || { label: 'Desconocido', variant: 'outline' as const }
    return <Badge variant={variant}>{label}</Badge>
  }

  const getPriorityBadge = (priority: Priority) => {
    const priorityMap = {
      low: { label: 'Baja', variant: 'secondary' as const },
      medium: { label: 'Media', variant: 'default' as const },
      high: { label: 'Alta', variant: 'destructive' as const },
      critical: { label: 'Crítica', variant: 'destructive' as const }
    }
    
    const { label, variant } = priorityMap[priority] || { label: 'No definida', variant: 'outline' as const }
    return <Badge variant={variant} className="ml-2">{label}</Badge>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!caseData) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-bold text-muted-foreground">Caso no encontrado</div>
        <p className="text-muted-foreground mt-2">No se pudo cargar la información del caso.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">{caseData.title}</h2>
            {getStatusBadge(caseData.status)}
            {getPriorityBadge(caseData.priority)}
          </div>
          <p className="text-muted-foreground mt-2">{caseData.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Editar
          </Button>
          <Button>
            Nueva tarea
          </Button>
        </div>
      </div>

      {/* Pestañas */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="evidence">Evidencia</TabsTrigger>
          <TabsTrigger value="notes">Notas</TabsTrigger>
          <TabsTrigger value="suspects">Sospechosos</TabsTrigger>
        </TabsList>

        {/* Contenido de las pestañas */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Información del caso */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Detalles del Caso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Categoría</p>
                    <p className="font-medium">{caseData.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{caseData.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Asignado a</p>
                    <p className="font-medium">{caseData.assignedTo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Creado el</p>
                    <p className="font-medium">{caseData.createdAt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actividad reciente */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No hay actividad reciente.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="evidence">
          <Card>
            <CardHeader>
              <CardTitle>Evidencia</CardTitle>
              <p className="text-sm text-muted-foreground">
                Documentos, imágenes y archivos relacionados con el caso.
              </p>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 text-center">
                <p className="text-muted-foreground">No hay evidencia cargada.</p>
                <Button className="mt-4">
                  Subir evidencia
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notas del Caso</CardTitle>
              <p className="text-sm text-muted-foreground">
                Observaciones y detalles importantes del caso.
              </p>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 text-center">
                <p className="text-muted-foreground">No hay notas registradas.</p>
                <Button className="mt-4">
                  Agregar nota
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suspects">
          <Card>
            <CardHeader>
              <CardTitle>Sospechosos</CardTitle>
              <p className="text-sm text-muted-foreground">
                Personas de interés en la investigación.
              </p>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 text-center">
                <p className="text-muted-foreground">No hay sospechosos registrados.</p>
                <Button className="mt-4">
                  Agregar sospechoso
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
