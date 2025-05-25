"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star } from "lucide-react"

interface ClueDiscoveryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  clue: any
}

export function ClueDiscoveryDialog({ open, onOpenChange, clue }: ClueDiscoveryDialogProps) {
  if (!clue) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center">
            <Sparkles className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            ¡Pista Descubierta!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{clue.title}</h3>
            <p className="text-sm text-muted-foreground">{clue.description}</p>
          </div>

          <div className="flex justify-center gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {clue.category}
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              +{clue.experienceReward} EXP
            </Badge>
          </div>

          {clue.unlocksClues && clue.unlocksClues.length > 0 && (
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                Esta pista puede desbloquear {clue.unlocksClues.length} nueva{clue.unlocksClues.length > 1 ? "s" : ""}{" "}
                pista{clue.unlocksClues.length > 1 ? "s" : ""}
              </p>
            </div>
          )}

          <Button onClick={() => onOpenChange(false)} className="w-full">
            Continuar Investigación
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
