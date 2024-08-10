'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const corDeFundoVermelho = styles.bg_vermelho;
  const corDeFundoAzul = styles.bg_azul;

  const [corAlterada, setCorAlterada] = useState(false);
  const [corDefundo, setCorDeFundo] = useState(corDeFundoVermelho);

  function alterarEstilo() {
    if (corAlterada === true) {
      setCorAlterada(false)
      setCorDeFundo(corDeFundoVermelho)
    } else {
      setCorAlterada(true)
      setCorDeFundo(corDeFundoAzul)
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
