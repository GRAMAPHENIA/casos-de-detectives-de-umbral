'use client';

import { useCases } from './useCases';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
} as const;

const statusLabels = {
  open: 'Abierto',
  in_progress: 'En progreso',
  closed: 'Cerrado',
  archived: 'Archivado',
} as const;

export function CaseList() {
  const { cases, isLoading, error, createCase } = useCases();

  const handleCreateTestCase = async () => {
    try {
      await createCase({
        title: `Nuevo caso ${new Date().toLocaleTimeString()}`,
        description: 'Este es un caso de prueba creado automáticamente',
        status: 'open',
        priority: 'medium',
        assignedTo: ['usuario1'],
        tags: ['prueba']
      });
    } catch (err) {
      console.error('Error al crear caso de prueba:', err);
    }
  };

  if (isLoading && cases.length === 0) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error.message || 'Ocurrió un error al cargar los casos.'}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Casos de Investigación</h2>
        <Button onClick={handleCreateTestCase} disabled={isLoading}>
          {isLoading ? 'Creando...' : 'Crear Caso de Prueba'}
        </Button>
      </div>

      {cases.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay casos disponibles.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                  <Badge variant="outline">{statusLabels[c.status]}</Badge>
                </div>
                <CardDescription>
                  Creado el {new Date(c.createdAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {c.description || 'Sin descripción'}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Badge className={priorityColors[c.priority]}>
                  {c.priority.charAt(0).toUpperCase() + c.priority.slice(1)}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {c.assignedTo?.length || 0} asignado(s)
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
