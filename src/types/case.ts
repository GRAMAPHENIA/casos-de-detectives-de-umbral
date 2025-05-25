// Tipos relacionados con los casos de investigación
export interface Case {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'closed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'critical';
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string[];
  tags?: string[];
  // Agrega más campos según sea necesario
}

export interface CaseFilterOptions {
  status?: Case['status'][];
  priority?: Case['priority'][];
  assignedTo?: string[];
  tags?: string[];
  searchTerm?: string;
}

export interface CreateCaseDto extends Omit<Case, 'id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateCaseDto extends Partial<Omit<Case, 'id' | 'createdAt' | 'updatedAt'>> {}
