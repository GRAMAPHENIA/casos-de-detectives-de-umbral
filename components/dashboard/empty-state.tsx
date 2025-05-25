"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, BookOpen, Target, ArrowLeft } from "lucide-react"
import { CreateCaseDialog } from "@/components/cases/create-case-dialog"
import Link from "next/link"

export function EmptyState() {
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <Search className="h-12 w-12 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">¡Bienvenido, Detective!</h2>
          <p className="text-muted-foreground">
            No tienes investigaciones activas. Comienza tu carrera como detective creando tu primer caso.
          </p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full" onClick={() => setShowCreateDialog(true)}>
            <Plus className="h-5 w-5 mr-2" />
            Comenzar Nueva Investigación
          </Button>

          <div className="grid grid-cols-1 gap-3">
            <Card className="border-border/40 hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <Link href="/tutorial" className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm">Tutorial Interactivo</h3>
                    <p className="text-xs text-muted-foreground">Aprende las mecánicas básicas</p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <Link href="/manual" className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm">Manual del Detective</h3>
                    <p className="text-xs text-muted-foreground">Guía completa de investigación</p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <Link href="/" className="flex items-center gap-3">
                  <ArrowLeft className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm">Volver al Menú Principal</h3>
                    <p className="text-xs text-muted-foreground">Regresa a la pantalla de inicio</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <CreateCaseDialog open={showCreateDialog} onOpenChange={setShowCreateDialog} />
      </div>
    </div>
  )
}
