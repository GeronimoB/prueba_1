import React from 'react';
import Image from 'next/image';
import styles from '../../styles/SuscripcionCard.module.css';

export default function SuscripcionCard() {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Información de la Suscripción</h2>
          <p className={styles.text}><span className={styles.highlight}>Plan:</span> Precios para pequeñas y medianas empresas</p>
          <p className={styles.text}><span className={styles.highlight}>Comenzada el:</span> 10/Oct./2023</p>
          <p className={styles.text}><span className={styles.highlight}>Última factura:</span> 10/Oct./2023</p>
          <p className={styles.text}><span className={styles.highlight}>Próxima factura:</span> 10/Oct./2024</p>
          <p className={styles.text}><span className={styles.highlight}>Método de pago:</span> Tarjeta de crédito</p>
          <p className={styles.text}><span className={styles.highlight}>Estado:</span> <span className={styles.activo}>ACTIVO</span></p>
          <div className={styles.buttonsContainer}>
            <button className={styles.button}>DESCARGAR FACTURA</button>
            <button className={styles.button2}>CANCELAR</button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/course-image.png" alt="Course Image" width={541} height={437} />
        </div>
      </div>
    </div>
  );
}
