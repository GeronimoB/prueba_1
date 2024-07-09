import React from 'react';
import Image from 'next/image';
import styles from '../../styles/MiPerfilComponent.module.css';

export default function MiPerfilComponent({ toggleSidebar }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Ajustes {">"} Mi perfil</h1>
      </div>
      <div className={styles.profileSection}>
        <div className={styles.circle}>
          <div className={styles.innerCircle}></div>
          <button className={styles.uploadButton}>SUBIR FOTO</button>
        </div>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre y Apellido" className={styles.input} />
        <input type="text" placeholder="Número Telefónico" className={styles.input} />
        <input type="text" placeholder="Dirección" className={styles.input} />
        <input type="email" placeholder="Correo" className={styles.input} />
        <div className={styles.row}>
          <input type="text" placeholder="DNI/NIF/CIF" className={`${styles.input} ${styles.inputHalf}`} />
          <button type="submit" className={`${styles.updateButton} ${styles.inputHalf}`}>Actualizar perfil</button>
        </div>
      </form>
    </div>
  );
}
