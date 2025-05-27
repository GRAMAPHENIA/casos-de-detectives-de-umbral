'use client';

import { useState, useEffect } from 'react';
import styles from './no-cases.module.css';

export const NoCases = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Formatear la fecha actual al montar el componente
    const now = new Date();
    setCurrentDate(now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>No tienes ningún caso</h1>
      <div 
        className={styles.updatedIndicator}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Actualizado recientemente
        {showTooltip && (
          <span className={styles.tooltip}>
            {currentDate}
          </span>
        )}
      </div>
    </div>
  );
};

export default NoCases;
