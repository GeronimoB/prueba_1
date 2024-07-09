import React from 'react';
import Image from 'next/image';
import styles from '../../styles/RetirarComponent.module.css';

const RetirarComponent = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Ajustes {">"} Afiliados {">"} Retiro</h1>
      </div>
      <p className={styles.retirar}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      <form className={styles.form}>
        <input type="text" placeholder="Banco" className={styles.input} />
        <input type="text" placeholder="Nombre del titular" className={styles.input} />
        <input type="text" placeholder="Número de cuenta" className={styles.input} />
        <button type="submit" className={styles.submitButton}>RETIRAR</button>
      </form>
    </div>
  );
};

export default RetirarComponent;
