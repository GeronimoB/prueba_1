import React from 'react';
import Image from 'next/image';
import styles from '../../styles/AnadirMetodoDePagoComponent.module.css';

const AnadirMetodoDePagoComponent = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Ajustes {">"} Método de pago {">"} Añadir método de pago</h1>
      </div>
      <div className={styles.paymentIcons}>
        <label className={styles.paymentOption}>
          <input type="radio" name="paymentMethod" value="MasterCard" />
          <Image src="/mastercard.png" alt="MasterCard" width={118} height={67} />
        </label>
        <label className={styles.paymentOption}>
          <input type="radio" name="paymentMethod" value="Visa" />
          <Image src="/visa.png" alt="Visa" width={154} height={50} />
        </label>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre del titular" className={styles.input} />
        <input type="text" placeholder="Número de tarjeta" className={styles.input} />
        <input type="text" placeholder="Fecha de Caducidad" className={styles.input} />
        <input type="text" placeholder="Código de seguridad" className={styles.input} />
        <button type="submit" className={styles.submitButton}>Añadir método de pago</button>
      </form>
    </div>
  );
};

export default AnadirMetodoDePagoComponent;
