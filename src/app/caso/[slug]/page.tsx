import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseBySlug } from '@/lib/cases';
import { ArrowLeft } from 'lucide-react';
import type { Case } from '@/types/case';

type CaseProps = {
  params: {
    slug: string;
  } & { searchParams?: { [key: string]: string | string[] | undefined } }
};

type CaseItem = Case;

export default async function CasePage({ params }: CaseProps) {
  const caseItem = await getCaseBySlug(params.slug);

  if (!caseItem) {
    notFound();
  }

  const caseData = caseItem as CaseItem;

  const getDifficultyColor = (): string => {
    switch (caseData.difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const getDifficultyText = (): string => {
    switch (caseData.difficulty) {
      case 'easy': return 'Fácil';
      case 'medium': return 'Medio';
      case 'hard': return 'Difícil';
      default: return caseData.difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/10 to-blue-950/50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-8">
          <Link 
            href="/map" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a los casos
          </Link>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-sm font-medium text-blue-400">Caso #{caseData.id}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-1">{caseData.title}</h1>
            </div>
            <div className="text-right">
              <span className="text-sm text-zinc-400">Publicado el</span>
              <p className="text-white">{caseData.date}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-zinc-300">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {caseData.locationText}
            </div>
            <div className={`flex items-center ${getDifficultyColor()}`}>
              <span>Dificultad: {getDifficultyText()}</span>
            </div>
            <div className="text-yellow-400 font-medium">
              Recompensa: ${caseData.reward.toLocaleString()}
            </div>
          </div>
        </header>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">Descripción del Caso</h2>
            <p className="text-zinc-200 mb-8 text-lg">{caseData.description}</p>

            <h3 className="text-xl font-semibold text-white mt-10 mb-4">Pistas Relevantes</h3>
            <ul className="space-y-3 mb-10">
              {caseData.content.map((clue: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-zinc-300">{clue}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">¿Tienes información?</h3>
              <p className="text-zinc-300 mb-6">
                Si tienes alguna información relevante sobre este caso, por favor contáctanos de inmediato.
                Toda información será tratada con la máxima confidencialidad.
              </p>
              <button className="px-6 py-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30 rounded-tl-xl rounded-br-xl transition-colors">
                Reportar información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllCaseSlugs } = await import('@/lib/cases');
  return getAllCaseSlugs();
}
