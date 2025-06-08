'use client';

import Link from 'next/link';
import { Users } from 'lucide-react';
import { Tooltip } from '@heroui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';

interface CasoCardProps {
  caso: {
    id: number;
    slug: string;
    titulo: string;
    descripcion: string;
    involucrados: number;
    estado: string;
  };
}

export function CasoCard({ caso }: CasoCardProps) {
  return (
    <Link
      href={`/casos/${caso.slug}`}
      className="group relative flex items-center gap-4 p-4 rounded-lg hover:bg-blue-500/10 transition-colors"
    >
      <div className="flex-1">
        <h3 className="text-sm font-medium text-blue-500">{caso.titulo}</h3>
        <p className="text-xs text-blue-500/80 mt-1">{caso.descripcion}</p>
      </div>
      
      <Tooltip>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          <span className="text-xs text-blue-500">{caso.involucrados}</span>
        </div>
        <TooltipContent className="bg-blue-500/10 backdrop-blur-lg rounded-md p-2 border-blue-400/10 -translate-y-1">
          <p className="text-xs text-zinc-300">{caso.involucrados} personas involucradas</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}