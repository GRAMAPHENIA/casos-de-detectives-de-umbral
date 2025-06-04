export interface Case {
  id: string;
  title: string;
  description: string;
  location: {
    x: number;
    y: number;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  reward: number;
  status: 'available' | 'in-progress' | 'completed';
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
