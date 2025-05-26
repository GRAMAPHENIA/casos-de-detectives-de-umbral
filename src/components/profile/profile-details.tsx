"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { User, Lock, Bell, Mail, Briefcase, Shield } from "lucide-react"

type ProfileTab = "personal" | "security" | "notifications" | "preferences"

export function ProfileDetails() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("personal")
  const [isEditing, setIsEditing] = useState(false)
  
  // Datos de ejemplo del perfil
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    email: "juan.perez@detectives.com",
    title: "Detective Senior",
    department: "Homicidios",
    phone: "+54 11 1234-5678",
    bio: "Especialista en casos complejos con más de 10 años de experiencia en el departamento de homicidios.",
    avatar: "/avatars/01.png"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    // Aquí iría la lógica para guardar los cambios
    setIsEditing(false)
    // Mostrar notificación de éxito
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna izquierda - Avatar */}
        <div className="w-full md:w-1/3 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback>
                    {profile.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.title}</p>
                  <p className="text-sm text-muted-foreground">{profile.department}</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{profile.department}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Columna derecha - Formulario */}
        <div className="flex-1">
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Perfil del Detective</CardTitle>
                  <CardDescription>
                    Gestiona la información de tu perfil y preferencias
                  </CardDescription>
                </div>
                {isEditing ? (
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleSave}>
                      Guardar cambios
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>
                    Editar perfil
                  </Button>
                )}
              </div>
            </CardHeader>
            
            <Tabs defaultValue="personal" className="w-full" onValueChange={(v) => setActiveTab(v as ProfileTab)}>
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger 
                  value="personal" 
                  className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-4 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <User className="mr-2 h-4 w-4" />
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-4 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Seguridad
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="relative h-10 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-4 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notificaciones
                </TabsTrigger>
              </TabsList>
              
              <CardContent className="p-6">
                {/* Pestaña de Información Personal */}
                <TabsContent value="personal" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={profile.name} 
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={profile.email} 
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Cargo</Label>
                      <Input 
                        id="title" 
                        name="title" 
                        value={profile.title} 
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Departamento</Label>
                      <Input 
                        id="department" 
                        name="department" 
                        value={profile.department} 
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>
                </TabsContent>
                
                {/* Pestaña de Seguridad */}
                <TabsContent value="security" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Cambiar contraseña</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Contraseña actual</Label>
                        <Input 
                          id="currentPassword" 
                          type="password" 
                          placeholder="Ingresa tu contraseña actual"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Nueva contraseña</Label>
                        <Input 
                          id="newPassword" 
                          type="password" 
                          placeholder="Ingresa tu nueva contraseña"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password" 
                          placeholder="Confirma tu nueva contraseña"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Autenticación de dos factores</h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <Label htmlFor="twoFactor" className="text-base">Autenticación de dos factores</Label>
                        <p className="text-sm text-muted-foreground">
                          Añade una capa adicional de seguridad a tu cuenta
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        {isEditing ? 'Activar' : 'Gestionar'}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Pestaña de Notificaciones */}
                <TabsContent value="notifications" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Preferencias de notificación</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications" className="text-base">Notificaciones por correo</Label>
                            <p className="text-sm text-muted-foreground">
                              Recibir notificaciones por correo electrónico
                            </p>
                          </div>
                          <Button variant={isEditing ? 'outline' : 'ghost'} size="sm" className="ml-auto">
                            {isEditing ? 'Cambiar' : 'Activado'}
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notifications" className="text-base">Notificaciones push</Label>
                            <p className="text-sm text-muted-foreground">
                              Recibir notificaciones en el navegador
                            </p>
                          </div>
                          <Button variant={isEditing ? 'outline' : 'ghost'} size="sm" className="ml-auto">
                            {isEditing ? 'Cambiar' : 'Activado'}
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <Label htmlFor="case-updates" className="text-base">Actualizaciones de casos</Label>
                            <p className="text-sm text-muted-foreground">
                              Recibir actualizaciones sobre casos asignados
                            </p>
                          </div>
                          <Button variant={isEditing ? 'outline' : 'ghost'} size="sm" className="ml-auto">
                            {isEditing ? 'Cambiar' : 'Activado'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
