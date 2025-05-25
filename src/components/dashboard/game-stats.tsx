import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Zap } from "lucide-react"

const gameStats = {
  level: 1,
  experience: 0,
  experienceToNext: 100,
  casesCompleted: 0,
  cluesFound: 0,
  accuracy: 0,
  streak: 0,
}

export function GameStats() {
  const experiencePercentage = (gameStats.experience / gameStats.experienceToNext) * 100

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-border/40">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Nivel</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{gameStats.level}</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>EXP: {gameStats.experience}</span>
              <span>{gameStats.experienceToNext}</span>
            </div>
            <Progress value={experiencePercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/40">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Casos Resueltos</CardTitle>
          <Target className="h-4 w-4 text-green-600 dark:text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{gameStats.casesCompleted}</div>
          <p className="text-xs text-muted-foreground">¡Comienza tu primera investigación!</p>
        </CardContent>
      </Card>

      <Card className="border-border/40">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Pistas Encontradas</CardTitle>
          <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{gameStats.cluesFound}</div>
          <p className="text-xs text-muted-foreground">Descubre pistas para avanzar</p>
        </CardContent>
      </Card>

      <Card className="border-border/40">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Racha Actual</CardTitle>
          <Zap className="h-4 w-4 text-orange-600 dark:text-orange-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{gameStats.streak}</div>
          <p className="text-xs text-muted-foreground">Pistas correctas seguidas</p>
        </CardContent>
      </Card>
    </div>
  )
}
