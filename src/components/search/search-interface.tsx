"use client"

import { useState, useMemo } from "react"
import { Search, Filter, X, Clock, FileText, Users, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type SearchResult = {
  id: string
  type: 'case' | 'document' | 'witness' | 'location' | 'date'
  title: string
  description: string
  date?: string
  relevance: number
  preview?: string
}

type FilterType = 'all' | 'cases' | 'documents' | 'witnesses' | 'locations' | 'dates'

export function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    dateRange: { from: '', to: '' },
    type: 'all' as 'all' | 'case' | 'document' | 'witness' | 'location' | 'date',
    relevance: 'all' as 'all' | 'high' | 'medium' | 'low',
  })

  // Datos de ejemplo para la búsqueda
  const searchData: SearchResult[] = [
    {
      id: '1',
      type: 'case',
      title: 'Caso #0452 - Robo en el Banco Central',
      description: 'Robo ocurrido el 15 de mayo de 2023 en el Banco Central. Se llevaron aproximadamente $2,000,000.',
      date: '2023-05-15',
      relevance: 0.95,
    },
    {
      id: '2',
      type: 'document',
      title: 'Informe Forense - Caso #0452',
      description: 'Análisis de huellas dactilares encontradas en la escena del crimen del Banco Central.',
      date: '2023-05-16',
      relevance: 0.87,
    },
    {
      id: '3',
      type: 'witness',
      title: 'María González',
      description: 'Testigo presencial del robo en el Banco Central. Trabajaba como cajera en el momento del incidente.',
      relevance: 0.79,
    },
    {
      id: '4',
      type: 'location',
      title: 'Banco Central - Sede Principal',
      description: 'Av. Principal #1234, Ciudad Capital. Ubicación del robo del 15 de mayo de 2023.',
      relevance: 0.92,
    },
    {
      id: '5',
      type: 'date',
      title: '15 de mayo de 2023',
      description: 'Fecha del robo en el Banco Central.',
      date: '2023-05-15',
      relevance: 0.88,
    },
  ]

  // Filtrar resultados basados en la búsqueda y filtros
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    
    return searchData
      .filter(item => {
        // Aplicar filtros
        if (activeFilter !== 'all' && 
            (activeFilter === 'cases' && item.type !== 'case' ||
             activeFilter === 'documents' && item.type !== 'document' ||
             activeFilter === 'witnesses' && item.type !== 'witness' ||
             activeFilter === 'locations' && item.type !== 'location' ||
             activeFilter === 'dates' && item.type !== 'date')) {
          return false
        }

        // Aplicar búsqueda
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query)
      })
      .sort((a, b) => b.relevance - a.relevance)
  }, [searchQuery, activeFilter])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      setRecentSearches(prev => [searchQuery, ...prev].slice(0, 5))
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    setActiveFilter('all')
    setFilters({
      dateRange: { from: '', to: '' },
      type: 'all',
      relevance: 'all',
    })
  }

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'case':
        return <FileText className="h-4 w-4 text-blue-500" />
      case 'document':
        return <FileText className="h-4 w-4 text-green-500" />
      case 'witness':
        return <Users className="h-4 w-4 text-purple-500" />
      case 'location':
        return <MapPin className="h-4 w-4 text-red-500" />
      case 'date':
        return <Calendar className="h-4 w-4 text-orange-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'case': return 'Caso'
      case 'document': return 'Documento'
      case 'witness': return 'Testigo'
      case 'location': return 'Ubicación'
      case 'date': return 'Fecha'
      default: return 'Desconocido'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Barra de búsqueda */}
      <div className="relative">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar casos, documentos, testigos..."
              className="pl-10 pr-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <Tabs 
            value={activeFilter} 
            onValueChange={(value) => setActiveFilter(value as FilterType)}
            className="w-full"
          >
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">Todo</TabsTrigger>
              <TabsTrigger value="cases">Casos</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
              <TabsTrigger value="witnesses">Testigos</TabsTrigger>
              <TabsTrigger value="locations">Ubicaciones</TabsTrigger>
              <TabsTrigger value="dates">Fechas</TabsTrigger>
            </TabsList>
          </Tabs>

          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {showFilters && (
          <div className="mt-4 p-4 border rounded-lg bg-muted/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Rango de fechas</label>
                <div className="flex gap-2">
                  <Input 
                    type="date" 
                    value={filters.dateRange.from}
                    onChange={(e) => setFilters({...filters, dateRange: {...filters.dateRange, from: e.target.value}})}
                    className="text-sm"
                  />
                  <span className="flex items-center">-</span>
                  <Input 
                    type="date" 
                    value={filters.dateRange.to}
                    onChange={(e) => setFilters({...filters, dateRange: {...filters.dateRange, to: e.target.value}})}
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Tipo</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value as any})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="all">Todos los tipos</option>
                  <option value="case">Casos</option>
                  <option value="document">Documentos</option>
                  <option value="witness">Testigos</option>
                  <option value="location">Ubicaciones</option>
                  <option value="date">Fechas</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Relevancia</label>
                <select
                  value={filters.relevance}
                  onChange={(e) => setFilters({...filters, relevance: e.target.value as any})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="all">Todas</option>
                  <option value="high">Alta</option>
                  <option value="medium">Media</option>
                  <option value="low">Baja</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resultados de búsqueda */}
      <div className="space-y-4">
        {searchQuery ? (
          filteredResults.length > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {filteredResults.length} {filteredResults.length === 1 ? 'resultado' : 'resultados'} para "{searchQuery}"
                </h2>
                <Button variant="ghost" size="sm" onClick={clearSearch}>
                  Limpiar búsqueda
                </Button>
              </div>
              
              <div className="space-y-3">
                {filteredResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(result.type)}
                          <Badge variant="outline" className="text-xs">
                            {getTypeLabel(result.type)}
                          </Badge>
                          {result.date && (
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(result.date).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={result.relevance > 0.8 ? 'bg-green-100 text-green-800' : result.relevance > 0.5 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
                        >
                          {result.relevance > 0.8 ? 'Alta' : result.relevance > 0.5 ? 'Media' : 'Baja'} relevancia
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mt-2">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{result.description}</p>
                      <div className="mt-3 flex justify-end">
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No se encontraron resultados</h3>
              <p className="mt-2 text-muted-foreground">
                No encontramos nada que coincida con tu búsqueda. Intenta con otros términos.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearSearch}>
                Limpiar búsqueda
              </Button>
            </div>
          )
        ) : recentSearches.length > 0 ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Búsquedas recientes</h2>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-md cursor-pointer"
                  onClick={() => setSearchQuery(search)}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{search}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      setRecentSearches(prev => prev.filter((_, i) => i !== index))
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium">Busca en toda la aplicación</h3>
            <p className="mt-2 text-muted-foreground">
              Encuentra casos, documentos, testigos y más con nuestra búsqueda avanzada.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
