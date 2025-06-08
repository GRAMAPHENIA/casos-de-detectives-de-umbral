'use client';

export function CasosPorEstado() {
  const estados = [
    {
      estado: 'Activo',
      cantidad: 12,
      color: 'bg-blue-500'
    },
    {
      estado: 'En progreso',
      cantidad: 8,
      color: 'bg-yellow-500'
    },
    {
      estado: 'En espera',
      cantidad: 5,
      color: 'bg-gray-500'
    },
    {
      estado: 'Resuelto',
      cantidad: 20,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="space-y-4">
      {estados.map((estado) => (
        <div key={estado.estado} className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-blue-500">{estado.estado}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${estado.color}/10 text-${estado.color}`}>
              {estado.cantidad}
            </span>
          </div>
          <div className="w-full bg-gray-500/10 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${estado.color}/20`} 
              style={{ width: `${(estado.cantidad / 45) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
