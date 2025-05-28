"use client";

// import Image from "next/image";
import styles from "./no-cases.module.css";

export default function NoCases() {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>No tienes ningún caso</h1> */}
      <h1 className="text-[220px] text-zinc-800/50">⩆</h1>
      {/* <Image
        src="/icons/empty.svg"
        alt="No tienes ningún caso"
        width={200}
        height={200}
      /> */}
    </div>
  );
}
