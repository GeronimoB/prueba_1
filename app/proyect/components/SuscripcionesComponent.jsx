import React from 'react';
import SuscripcionCard from './SuscripcionCard';
import Image from 'next/image';
import styles from '../../styles/SuscripcionesComponent.module.css';

export default function SuscripcionesComponent({ toggleSidebar }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Suscripciones</h1>
      </div>
      <SuscripcionCard />
      <SuscripcionCard />
    </div>
  );
}