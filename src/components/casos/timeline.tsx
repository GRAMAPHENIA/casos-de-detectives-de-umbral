'use client';

export function Timeline() {
  const casosActividad = [
    {
      fecha: '07/06/2025 15:00',
      tipo: 'Nuevo caso',
      descripcion: 'Caso de robo en residencia',
      estado: 'Activo'
    },
    {
      fecha: '07/06/2025 16:30',
      tipo: 'Actualización',
      descripcion: 'Nuevas evidencias encontradas',
      estado: 'En progreso'
    }
  ];

  return (
    <div className="space-y-4">
      {casosActividad.map((actividad, index) => (
        <div key={index} className="relative pl-6">
          <div className="absolute -left-3 flex items-center h-full">
            <div className="h-full w-1 bg-blue-500/20 pointer-events-none"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 -ml-1.5 ring-2 ring-blue-500/50"></div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20 text-blue-500">
                <span className="text-sm">{index + 1}</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-blue-500">{actividad.tipo}</h3>
              <p className="mt-1 text-sm text-blue-500/80">{actividad.fecha}</p>
              <p className="mt-2 text-sm text-blue-500/60">{actividad.descripcion}</p>
              <span className={`px-2 py-1 text-xs rounded-full mt-2 ${
                actividad.estado === 'Activo' ? 'bg-blue-500/10 text-blue-500' : 
                actividad.estado === 'En progreso' ? 'bg-yellow-500/10 text-yellow-500' : 
                'bg-gray-500/10 text-gray-500'
              }`}>
                {actividad.estado}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
