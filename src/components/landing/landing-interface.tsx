"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Settings,
  Trophy,
  User,
  Volume2,
  VolumeX,
  Gamepad2,
  Star,
  Target,
  Zap,
  Crown,
  Shield,
  BookOpen,
  ChevronRight,
  Sparkles,
  Monitor,
  Headphones,
  Wifi,
  HardDrive,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

export function LandingInterface() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [showSystemInfo, setShowSystemInfo] = useState(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  // Simulación de carga del juego con más realismo
  const startGame = async () => {
    setIsLoading(true)
    setLoadingProgress(0)

    const loadingSteps = [
      { progress: 5, text: "Verificando sistema..." },
      { progress: 15, text: "Conectando con base de datos..." },
      { progress: 25, text: "Inicializando motor de casos..." },
      { progress: 40, text: "Cargando texturas de evidencias..." },
      { progress: 55, text: "Preparando sistema de pistas..." },
      { progress: 70, text: "Configurando IA de investigación..." },
      { progress: 85, text: "Sincronizando perfil de detective..." },
      { progress: 95, text: "Finalizando carga..." },
      { progress: 100, text: "¡Bienvenido, Detective!" },
    ]

    for (const step of loadingSteps) {
      await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400))
      setLoadingProgress(step.progress)
      setLoadingText(step.text)
    }

    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push("/dashboard")
  }

  // Efectos de partículas mejorados
  useEffect(() => {
    if (isLoading) return // No crear partículas durante la carga

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 pointer-events-none"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = "100%"
      particle.style.animation = `float-up ${3 + Math.random() * 4}s linear forwards`

      document.querySelector(".particles-container")?.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 7000)
    }

    const interval = setInterval(createParticle, 500)
    return () => clearInterval(interval)
  }, [isLoading])

  // Pantalla de carga - Solo se muestra después del clic
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
        {/* Fondo animado de carga */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="text-center space-y-8 z-10 max-w-md w-full px-4">
          {/* Logo de carga */}
          <div className="space-y-6">
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Target className="h-16 w-16 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Detective Game</h1>
              <p className="text-blue-200 text-lg">Iniciando experiencia detectivesca...</p>
            </div>
          </div>

          {/* Barra de progreso mejorada */}
          <div className="space-y-4">
            <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out relative"
                style={{ width: `${loadingProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-blue-200">{loadingProgress}%</span>
              <span className="text-blue-200">Cargando...</span>
            </div>

            <div className="min-h-[24px] flex items-center justify-center">
              <span className="text-white font-medium animate-pulse">{loadingText}</span>
            </div>
          </div>

          {/* Información del sistema durante la carga */}
          <div className="grid grid-cols-2 gap-4 text-xs text-blue-200">
            <div className="flex items-center gap-2">
              <Monitor className="h-3 w-3" />
              <span>1920x1080</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-3 w-3" />
              <span>Audio: ON</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="h-3 w-3" />
              <span>Conectado</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="h-3 w-3" />
              <span>2.3 GB</span>
            </div>
          </div>

          {/* Consejos durante la carga */}
          <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-yellow-200 font-medium">Consejo del Detective:</p>
                <p className="text-xs text-slate-300 mt-1">
                  La paciencia es la herramienta más importante de un investigador. Observa cada detalle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Efectos de carga en las esquinas */}
        <div className="absolute top-4 left-4 text-blue-400">
          <div className="animate-spin">
            <Target className="h-6 w-6" />
          </div>
        </div>
        <div className="absolute top-4 right-4 text-purple-400">
          <div className="animate-pulse">
            <Star className="h-6 w-6" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-green-400">
          <div className="animate-bounce">
            <Shield className="h-6 w-6" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-orange-400">
          <div className="animate-pulse">
            <Trophy className="h-6 w-6" />
          </div>
        </div>
      </div>
    )
  }

  // Landing Page Principal - Se muestra por defecto
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Contenedor de partículas */}
      <div className="particles-container absolute inset-0 pointer-events-none"></div>

      {/* Fondo con efectos mejorados */}
      <div className="absolute inset-0">
        {/* Efectos de luz más dramáticos */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl"></div>

        {/* Grid de fondo sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          {/* Header épico del juego */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-6xl font-bold text-white tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Detective Game
                </h1>
                <p className="text-blue-200 text-xl font-medium">
                  Resuelve misterios. Encuentra la verdad. Sé la justicia.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mb-8">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Versión 1.0.0
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/30 px-4 py-2">
                <Crown className="h-4 w-4 mr-2" />
                Experiencia Premium
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-400/30 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Modo Seguro
              </Badge>
            </div>

            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Sumérgete en el mundo de la investigación criminal profesional. Usa tu lógica, intuición y herramientas
              avanzadas para resolver los casos más complejos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Panel principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Menú principal mejorado */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-bold text-white">Menú Principal</h2>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-400">Sistema Activo</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Button
                        size="lg"
                        className="w-full h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold text-xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/25 relative overflow-hidden group"
                        onClick={startGame}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <Play className="h-8 w-8 mr-4" />
                        Comenzar Nueva Investigación
                        <ChevronRight className="h-6 w-6 ml-auto" />
                      </Button>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-16 border-slate-600 bg-slate-700/40 text-white hover:bg-slate-600/60 transition-all duration-300 hover:scale-105"
                          onClick={() => router.push("/tutorial")}
                        >
                          <Gamepad2 className="h-6 w-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold">Tutorial</div>
                            <div className="text-xs opacity-75">Aprende a jugar</div>
                          </div>
                        </Button>

                        <Button
                          variant="outline"
                          size="lg"
                          className="h-16 border-slate-600 bg-slate-700/40 text-white hover:bg-slate-600/60 transition-all duration-300 hover:scale-105"
                          onClick={() => router.push("/manual")}
                        >
                          <BookOpen className="h-6 w-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold">Manual</div>
                            <div className="text-xs opacity-75">Guía completa</div>
                          </div>
                        </Button>

                        <Button
                          variant="outline"
                          size="lg"
                          className="h-16 border-slate-600 bg-slate-700/40 text-white hover:bg-slate-600/60 transition-all duration-300 hover:scale-105"
                          onClick={() => router.push("/settings")}
                        >
                          <Settings className="h-6 w-6 mr-3" />
                          <div className="text-left">
                            <div className="font-semibold">Configuración</div>
                            <div className="text-xs opacity-75">Personalizar</div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Características del juego mejoradas */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">¿Por qué Detective Game?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group p-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl hover:from-blue-900/40 hover:to-slate-800/40 transition-all duration-300">
                      <Target className="h-10 w-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-white mb-2">Casos Realistas</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Investigaciones basadas en técnicas policiales reales y casos históricos documentados.
                      </p>
                    </div>

                    <div className="group p-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl hover:from-purple-900/40 hover:to-slate-800/40 transition-all duration-300">
                      <Zap className="h-10 w-10 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-white mb-2">Progresión Inteligente</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Sistema de niveles que se adapta a tu estilo de investigación y desbloquea nuevas habilidades.
                      </p>
                    </div>

                    <div className="group p-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl hover:from-green-900/40 hover:to-slate-800/40 transition-all duration-300">
                      <Trophy className="h-10 w-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-white mb-2">Logros y Rankings</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Compite con otros detectives y demuestra tu habilidad en rankings globales.
                      </p>
                    </div>

                    <div className="group p-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl hover:from-red-900/40 hover:to-slate-800/40 transition-all duration-300">
                      <Sparkles className="h-10 w-10 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-white mb-2">IA Avanzada</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Casos generados dinámicamente con inteligencia artificial para experiencias únicas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Panel lateral mejorado */}
            <div className="space-y-6">
              {/* Perfil del jugador */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Perfil del Detective</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Detective García</h4>
                        <p className="text-slate-300">Nivel 1 - Novato</p>
                        <p className="text-xs text-slate-400">Recién graduado de la academia</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Experiencia</span>
                        <span className="text-white font-medium">0 / 100 EXP</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 w-0 transition-all duration-500"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-slate-700/40 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">0</div>
                        <div className="text-xs text-slate-400">Casos Resueltos</div>
                      </div>
                      <div className="p-3 bg-slate-700/40 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">0</div>
                        <div className="text-xs text-slate-400">Pistas Encontradas</div>
                      </div>
                      <div className="p-3 bg-slate-700/40 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">0</div>
                        <div className="text-xs text-slate-400">Logros</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Controles de audio mejorados */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Configuración de Audio</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Música Ambiental</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className={`text-white hover:bg-slate-700 ${audioEnabled ? "text-green-400" : "text-red-400"}`}
                      >
                        {audioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Volumen Principal</span>
                        <span className="text-white">75%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-3/4 transition-all duration-300"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Efectos de Sonido</span>
                        <span className="text-white">60%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-3/5 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Información del sistema */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Sistema</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSystemInfo(!showSystemInfo)}
                      className="text-slate-400 hover:text-white"
                    >
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </div>

                  {showSystemInfo ? (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Resolución:</span>
                        <span className="text-white">1920x1080</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">FPS:</span>
                        <span className="text-green-400">60</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Conexión:</span>
                        <span className="text-green-400">Estable</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Memoria:</span>
                        <span className="text-white">2.3 GB</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center gap-2 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Sistema OK</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Audio OK</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Red OK</span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Guardado OK</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Acceso rápido */}
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-lg shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Acceso Rápido</h3>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      <Settings className="h-4 w-4 mr-3" />
                      Cambiar Tema Visual
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                      onClick={() => router.push("/profile")}
                    >
                      <User className="h-4 w-4 mr-3" />
                      Gestionar Perfil
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                      onClick={() => router.push("/search")}
                    >
                      <Target className="h-4 w-4 mr-3" />
                      Búsqueda Avanzada
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer épico */}
          <div className="text-center mt-16 space-y-4">
            <div className="flex items-center justify-center gap-8 text-slate-400 text-sm">
              <span>Detective Game v1.0.0</span>
              <span>•</span>
              <span>Desarrollado para detectives profesionales</span>
              <span>•</span>
              <span>© 2024 Detective Studios</span>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F11</kbd>
                Pantalla completa
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">ESC</kbd>
                Salir
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">F1</kbd>
                Ayuda
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos CSS mejorados */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
