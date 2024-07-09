import React from 'react';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        © 2024 emprendeya.es. Todos los derechos reservados. Página desarrollada por Eslogan
      </div>
      <div className={styles.right}>
        <a href="#">Política de Privacidad y Cookies</a>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Aviso Legal</a>
      </div>
    </div>
  );
}
