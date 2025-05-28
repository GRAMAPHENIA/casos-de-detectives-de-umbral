"use client";

import { useState, useEffect } from "react";
import styles from "./footer.module.css";
import { Phrase } from "@/types/types";
import { detectivePhrases } from "@/data/phrases";

export const Footer = () => {
  const [currentPhrase, setCurrentPhrase] = useState<Phrase | null>(null);

  useEffect(() => {
    // Seleccionar una frase aleatoria al montar el componente
    const randomIndex = Math.floor(Math.random() * detectivePhrases.length);
    setCurrentPhrase(detectivePhrases[randomIndex]);
  }, []);

  if (!currentPhrase) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.phraseContainer}>
        <p className={styles.phrase}>&quot;{currentPhrase.text}&quot;</p>
        <p className={styles.source}>— {currentPhrase.source}</p>
      </div>
      <div className={styles.copyright}>
        {new Date().getFullYear()} <span className="text-[1.2rem] mx-2">⩆</span> Casos de Detectives de Umbral
      </div>
    </footer>
  );
};

export default Footer;
