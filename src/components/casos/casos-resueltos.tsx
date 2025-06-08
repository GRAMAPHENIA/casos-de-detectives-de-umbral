'use client';

export function CasosResueltos() {
  const casosResueltos = [
    {
      id: 1,
      titulo: 'Robo en oficina',
      resultado: 'Resuelto',
      fecha: '06/06/2025',
      duracion: '2 semanas'
    },
    {
      id: 2,
      titulo: 'Investigación de fraude',
      resultado: 'Caso cerrado',
      fecha: '05/06/2025',
      duracion: '4 semanas'
    }
  ];

  return (
    <div className="space-y-4">
      {casosResueltos.map((caso) => (
        <div key={caso.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-sm font-medium text-blue-500">{caso.titulo}</h3>
              <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500">
                {caso.resultado}
              </span>
            </div>
            <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-500">
              {caso.duracion}
            </span>
          </div>
          <p className="text-sm text-blue-500/80">Fecha: {caso.fecha}</p>
        </div>
      ))}
    </div>
  );
}
