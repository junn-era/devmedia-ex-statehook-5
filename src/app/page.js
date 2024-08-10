'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [corAlterada, setCorAlterada] = useState(false);
  const [corDefundo, setCorDeFundo] = useState(styles.bg_vermelho);

  function alterarEstilo() {
    if (corAlterada === true) {
      setCorAlterada(false)
      setCorDeFundo(styles.bg_vermelho)
    } else {
      setCorAlterada(true)
      setCorDeFundo(styles.bg_azul)
    }
  }

  return (
    <main className={styles.main}>

      <div className={styles.container}>
        <h2>Alterando estilo do elemento</h2>
        <div className={corDefundo}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button className={styles.btn} onClick={alterarEstilo}>Alterar</button>
      </div>
      
    </main>
  );
}
