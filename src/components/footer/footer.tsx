"use client";

import { useState, useEffect } from "react";
import styles from "./footer.module.css";

const detectivePhrases = [
  "Las pistas están ahí, solo hay que saber buscarlas.",
  "Ningún caso es demasiado pequeño para un buen detective.",
  "La verdad siempre sale a la luz, solo es cuestión de tiempo.",
  "Un buen detective nunca subestima el poder de la observación.",
  "Cada detalle cuenta en la resolución de un caso.",
  "La intuición es tan importante como la evidencia.",
  "Los grandes misterios requieren mentes aún mayores.",
  "La paciencia es la mejor arma de un detective.",
  "No hay crimen perfecto, solo investigaciones incompletas.",
  "Las apariencias engañan, pero los hechos no mienten.",
];

export const Footer = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    // Seleccionar una frase aleatoria al montar el componente
    const randomIndex = Math.floor(Math.random() * detectivePhrases.length);
    setRandomPhrase(detectivePhrases[randomIndex]);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.phraseContainer}>
        <p className={styles.phrase}>&quot;{randomPhrase}&quot;</p>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Casos de Detectives de Umbral
      </div>
    </footer>
  );
};

export default Footer;
