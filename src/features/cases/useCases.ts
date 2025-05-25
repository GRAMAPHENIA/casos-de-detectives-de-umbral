import { useState, useEffect, useCallback } from 'react';
import { Case, CaseFilterOptions, CreateCaseDto, UpdateCaseDto } from '@/types/case';

// Mock de datos temporal - en una aplicación real, esto vendría de una API
export const mockCases: Case[] = [
  {
    id: '1',
    title: 'Caso de prueba',
    status: 'open',
    priority: 'medium',
    description: 'Este es un caso de prueba',
    createdAt: new Date(),
    updatedAt: new Date(),
    assignedTo: ['usuario1'],
    tags: ['fraude', 'importante']
  }
  // Agrega más casos de prueba según sea necesario
];

export function useCases() {
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Cargar casos
  const loadCases = useCallback(async (filters?: CaseFilterOptions) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simular carga de API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // En una aplicación real, aquí harías una llamada a la API
      // const response = await api.get('/cases', { params: filters });
      // setCases(response.data);
      
      // Filtrado simple para la demostración
      let filteredCases = [...mockCases];
      
      if (filters?.status?.length) {
        filteredCases = filteredCases.filter(c => filters.status?.includes(c.status));
      }
      
      if (filters?.priority?.length) {
        filteredCases = filteredCases.filter(c => filters.priority?.includes(c.priority));
      }
      
      setCases(filteredCases);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar los casos'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Crear un nuevo caso
  const createCase = useCallback(async (newCase: CreateCaseDto): Promise<Case> => {
    setIsLoading(true);
    try {
      // Simular llamada a la API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const createdCase: Case = {
        ...newCase,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      // En una aplicación real: const response = await api.post('/cases', newCase);
      mockCases.push(createdCase);
      setCases(prev => [...prev, createdCase]);
      
      return createdCase;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al crear el caso'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Actualizar un caso existente
  const updateCase = useCallback(async (id: string, updates: UpdateCaseDto): Promise<Case | undefined> => {
    setIsLoading(true);
    try {
      // Simular llamada a la API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const index = mockCases.findIndex(c => c.id === id);
      if (index === -1) throw new Error('Caso no encontrado');
      
      const updatedCase = {
        ...mockCases[index],
        ...updates,
        updatedAt: new Date(),
      };
      
      // En una aplicación real: const response = await api.put(`/cases/${id}`, updates);
      mockCases[index] = updatedCase;
      setCases(prev => prev.map(c => c.id === id ? updatedCase : c));
      
      return updatedCase;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al actualizar el caso'));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Cargar casos al montar el componente
  useEffect(() => {
    loadCases();
  }, [loadCases]);

  return {
    cases,
    isLoading,
    error,
    loadCases,
    createCase,
    updateCase,
  };
}
