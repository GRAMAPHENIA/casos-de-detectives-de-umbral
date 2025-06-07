export type CaseType = 'desaparicion' | 'persona_desaparecida' | 'estafa' | 'otro';

export type CaseDifficulty = 'easy' | 'medium' | 'hard';

export interface Case {
  id: string;
  title: string;
  description: string;
  location: {
    x: number;
    y: number;
  };
  locationText: string;
  difficulty: CaseDifficulty;
  reward: number;
  status: 'available' | 'in-progress' | 'completed';
  date: string;
  type: CaseType;
  content: string[]; // Contenido detallado del caso
}

export interface MapPinProps {
  caseData: Case;
  onAccept: (caseId: string) => void;
}

export interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  cases: Case[];
  onCaseAccept: (caseId: string) => void;
}
