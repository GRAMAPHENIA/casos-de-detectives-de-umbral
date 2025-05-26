"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Sun, Bell, User, Lock, Palette, Languages, Mail, Info } from "lucide-react"

export function SettingsInterface() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [email, setEmail] = useState("usuario@ejemplo.com")
  const [language, setLanguage] = useState("es")
  const [theme, setTheme] = useState("system")

  const handleSave = () => {
    // Lógica para guardar la configuración
    console.log({
      darkMode,
      notifications,
      email,
      language,
      theme,
    })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Configuración de la Cuenta</h2>
          <p className="text-muted-foreground">
            Personaliza tu experiencia en la aplicación
          </p>
        </div>
        <Button onClick={handleSave}>Guardar Cambios</Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Apariencia
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Seguridad
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>
                Actualiza tu información personal y preferencias de contacto.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-md"
                  />
                  <Button variant="outline" disabled>
                    Cambiar
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Idioma</Label>
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs"
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Apariencia</CardTitle>
              <CardDescription>
                Personaliza la apariencia de la aplicación.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Modo Oscuro</Label>
                  <p className="text-sm text-muted-foreground">
                    Cambia entre tema claro y oscuro
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Tema de Color</Label>
                <div className="flex gap-2">
                  {["system", "light", "dark"].map((t) => (
                    <Button
                      key={t}
                      variant={theme === t ? "default" : "outline"}
                      onClick={() => setTheme(t)}
                      className="capitalize"
                    >
                      {t === "system" ? "Sistema" : t === "light" ? "Claro" : "Oscuro"}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Controla cuándo y cómo recibes notificaciones.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notificaciones</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibir notificaciones de la aplicación
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <p className="text-sm">
                    Configura las notificaciones en la configuración de tu sistema operativo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>
                Gestiona la seguridad de tu cuenta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Cambiar Contraseña</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="Nueva contraseña"
                    className="max-w-xs"
                  />
                  <Button variant="outline">Cambiar</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Sesión Actual</Label>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">Navegador Web</p>
                    <p className="text-sm text-muted-foreground">
                      {navigator.userAgent}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
