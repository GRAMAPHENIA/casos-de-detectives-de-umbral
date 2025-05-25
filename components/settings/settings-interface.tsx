"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  User,
  Bell,
  Palette,
  Volume2,
  Shield,
  Database,
  Download,
  Upload,
  Trash2,
  Save,
  RotateCcw,
  Monitor,
  Moon,
  Sun,
  Globe,
  Gamepad2,
  Eye,
  Lock,
} from "lucide-react"
import { useTheme } from "next-themes"

export function SettingsInterface() {
  const { theme, setTheme } = useTheme()
  const [settings, setSettings] = useState({
    // Perfil
    displayName: "Detective García",
    email: "garcia@policia.gov",
    bio: "Detective experimentado especializado en casos complejos",

    // Notificaciones
    emailNotifications: true,
    pushNotifications: false,
    soundNotifications: true,
    caseUpdates: true,
    systemAlerts: false,

    // Apariencia
    language: "es",
    fontSize: 14,
    compactMode: false,
    animations: true,

    // Audio
    masterVolume: 75,
    effectsVolume: 60,
    musicVolume: 40,
    voiceVolume: 80,

    // Juego
    difficulty: "normal",
    autoSave: true,
    hints: true,
    skipTutorials: false,
    fastAnimations: false,

    // Privacidad
    shareStats: false,
    allowAnalytics: true,
    showOnlineStatus: true,
    profileVisibility: "friends",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSaveSettings = () => {
    // Aquí guardarías las configuraciones
    console.log("Configuraciones guardadas:", settings)
  }

  const handleResetSettings = () => {
    // Resetear a valores por defecto
    setSettings({
      displayName: "Detective García",
      email: "garcia@policia.gov",
      bio: "",
      emailNotifications: true,
      pushNotifications: false,
      soundNotifications: true,
      caseUpdates: true,
      systemAlerts: false,
      language: "es",
      fontSize: 14,
      compactMode: false,
      animations: true,
      masterVolume: 75,
      effectsVolume: 60,
      musicVolume: 40,
      voiceVolume: 80,
      difficulty: "normal",
      autoSave: true,
      hints: true,
      skipTutorials: false,
      fastAnimations: false,
      shareStats: false,
      allowAnalytics: true,
      showOnlineStatus: true,
      profileVisibility: "friends",
    })
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            Configuración del Sistema
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Personaliza tu experiencia de detective según tus preferencias
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuraciones principales */}
        <div className="lg:col-span-2 space-y-6">
          {/* Perfil */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Perfil del Detective
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Nombre de Detective</Label>
                  <Input
                    id="displayName"
                    value={settings.displayName}
                    onChange={(e) => handleSettingChange("displayName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleSettingChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Textarea
                  id="bio"
                  placeholder="Describe tu experiencia como detective..."
                  value={settings.bio}
                  onChange={(e) => handleSettingChange("bio", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notificaciones */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                Notificaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Notificaciones por Email</Label>
                  <p className="text-xs text-muted-foreground">Recibe actualizaciones por correo electrónico</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Notificaciones Push</Label>
                  <p className="text-xs text-muted-foreground">Alertas en tiempo real en el navegador</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sonidos de Notificación</Label>
                  <p className="text-xs text-muted-foreground">Reproducir sonidos para alertas</p>
                </div>
                <Switch
                  checked={settings.soundNotifications}
                  onCheckedChange={(checked) => handleSettingChange("soundNotifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Actualizaciones de Casos</Label>
                  <p className="text-xs text-muted-foreground">Notificar cambios en casos asignados</p>
                </div>
                <Switch
                  checked={settings.caseUpdates}
                  onCheckedChange={(checked) => handleSettingChange("caseUpdates", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Alertas del Sistema</Label>
                  <p className="text-xs text-muted-foreground">Mantenimiento y actualizaciones</p>
                </div>
                <Switch
                  checked={settings.systemAlerts}
                  onCheckedChange={(checked) => handleSettingChange("systemAlerts", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Apariencia */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Apariencia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tema</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          Claro
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          Oscuro
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4" />
                          Sistema
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Idioma</Label>
                  <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Español
                        </div>
                      </SelectItem>
                      <SelectItem value="en">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          English
                        </div>
                      </SelectItem>
                      <SelectItem value="fr">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Français
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tamaño de Fuente: {settings.fontSize}px</Label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => handleSettingChange("fontSize", value[0])}
                  max={20}
                  min={12}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Modo Compacto</Label>
                  <p className="text-xs text-muted-foreground">Reduce el espaciado entre elementos</p>
                </div>
                <Switch
                  checked={settings.compactMode}
                  onCheckedChange={(checked) => handleSettingChange("compactMode", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animaciones</Label>
                  <p className="text-xs text-muted-foreground">Efectos visuales y transiciones</p>
                </div>
                <Switch
                  checked={settings.animations}
                  onCheckedChange={(checked) => handleSettingChange("animations", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Audio */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                Configuración de Audio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Volumen Principal: {settings.masterVolume}%</Label>
                <Slider
                  value={[settings.masterVolume]}
                  onValueChange={(value) => handleSettingChange("masterVolume", value[0])}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Efectos de Sonido: {settings.effectsVolume}%</Label>
                <Slider
                  value={[settings.effectsVolume]}
                  onValueChange={(value) => handleSettingChange("effectsVolume", value[0])}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Música de Fondo: {settings.musicVolume}%</Label>
                <Slider
                  value={[settings.musicVolume]}
                  onValueChange={(value) => handleSettingChange("musicVolume", value[0])}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Voces y Diálogos: {settings.voiceVolume}%</Label>
                <Slider
                  value={[settings.voiceVolume]}
                  onValueChange={(value) => handleSettingChange("voiceVolume", value[0])}
                  max={100}
                  min={0}
                  step={5}
                />
              </div>
            </CardContent>
          </Card>

          {/* Configuración de Juego */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                Configuración de Juego
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Dificultad</Label>
                <Select value={settings.difficulty} onValueChange={(value) => handleSettingChange("difficulty", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Fácil
                        </Badge>
                        <span>Más pistas y ayudas</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="normal">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        >
                          Normal
                        </Badge>
                        <span>Experiencia equilibrada</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="hard">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        >
                          Difícil
                        </Badge>
                        <span>Desafío máximo</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Guardado Automático</Label>
                  <p className="text-xs text-muted-foreground">Guarda el progreso automáticamente</p>
                </div>
                <Switch
                  checked={settings.autoSave}
                  onCheckedChange={(checked) => handleSettingChange("autoSave", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Mostrar Pistas</Label>
                  <p className="text-xs text-muted-foreground">Ayudas visuales para principiantes</p>
                </div>
                <Switch checked={settings.hints} onCheckedChange={(checked) => handleSettingChange("hints", checked)} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Saltar Tutoriales</Label>
                  <p className="text-xs text-muted-foreground">Omitir explicaciones para usuarios avanzados</p>
                </div>
                <Switch
                  checked={settings.skipTutorials}
                  onCheckedChange={(checked) => handleSettingChange("skipTutorials", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animaciones Rápidas</Label>
                  <p className="text-xs text-muted-foreground">Acelera las transiciones del juego</p>
                </div>
                <Switch
                  checked={settings.fastAnimations}
                  onCheckedChange={(checked) => handleSettingChange("fastAnimations", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacidad */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                Privacidad y Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Visibilidad del Perfil</Label>
                <Select
                  value={settings.profileVisibility}
                  onValueChange={(value) => handleSettingChange("profileVisibility", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Público
                      </div>
                    </SelectItem>
                    <SelectItem value="friends">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Solo Amigos
                      </div>
                    </SelectItem>
                    <SelectItem value="private">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Privado
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compartir Estadísticas</Label>
                  <p className="text-xs text-muted-foreground">Permite que otros vean tus logros</p>
                </div>
                <Switch
                  checked={settings.shareStats}
                  onCheckedChange={(checked) => handleSettingChange("shareStats", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Permitir Analíticas</Label>
                  <p className="text-xs text-muted-foreground">Ayuda a mejorar la experiencia del juego</p>
                </div>
                <Switch
                  checked={settings.allowAnalytics}
                  onCheckedChange={(checked) => handleSettingChange("allowAnalytics", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Estado en Línea</Label>
                  <p className="text-xs text-muted-foreground">Mostrar cuando estás activo</p>
                </div>
                <Switch
                  checked={settings.showOnlineStatus}
                  onCheckedChange={(checked) => handleSettingChange("showOnlineStatus", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel lateral */}
        <div className="space-y-4">
          {/* Acciones rápidas */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="text-base">Acciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={handleSaveSettings} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                Guardar Cambios
              </Button>

              <Button variant="outline" onClick={handleResetSettings} className="w-full">
                <RotateCcw className="h-4 w-4 mr-2" />
                Restaurar Valores
              </Button>

              <Separator />

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Exportar Configuración
              </Button>

              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Importar Configuración
              </Button>
            </CardContent>
          </Card>

          {/* Gestión de datos */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Gestión de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Casos guardados:</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span>Progreso total:</span>
                  <span className="font-medium">2.3 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Configuraciones:</span>
                  <span className="font-medium">0.1 MB</span>
                </div>
              </div>

              <Separator />

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Respaldar Datos
              </Button>

              <Button variant="destructive" className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar Todos los Datos
              </Button>
            </CardContent>
          </Card>

          {/* Información del sistema */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="text-base">Información del Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Versión:</span>
                <span className="font-medium">1.2.3</span>
              </div>
              <div className="flex justify-between">
                <span>Última actualización:</span>
                <span className="font-medium">15/01/2024</span>
              </div>
              <div className="flex justify-between">
                <span>Navegador:</span>
                <span className="font-medium">Chrome 120</span>
              </div>
              <div className="flex justify-between">
                <span>Plataforma:</span>
                <span className="font-medium">Web</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
