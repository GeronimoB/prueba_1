import React from 'react';
import styles from '../../styles/PanelDeControlComponent.module.css';
import SeguirCursoCard from './SeguirCursoCard';
import Image from 'next/image';

export default function PanelDeControlComponent({ toggleSidebar }) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h3 className={`${styles.title_e} ${styles.tiltess}`}>Panel de Control</h3>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statContent}>
            <p className={styles.statNumber}>1</p>
            <Image src="/icon-mis-cursos.svg" alt="Mis Cursos" width={64} height={72} />
          </div>
          <p className={styles.statLabel}>Mis Cursos</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statContent}>
            <p className={styles.statNumber}>1</p>
            <Image src="/icon-cursos-activos.svg" alt="Cursos Activos" width={75} height={70} />
          </div>
          <p className={styles.statLabel}>Cursos Activos</p>
        </div>
        <div className={styles.stat}>
          <div className={styles.statContent}>
            <p className={styles.statNumber}>0</p>
            <Image src="/icon-cursos-completos.svg" alt="Cursos Completos" width={43} height={72} />
          </div>
          <p className={styles.statLabel}>Cursos Completos</p>
        </div>
      </div>
      <h3 className={styles.title_e}>Ultimo Curso al que has accedido</h3>
      <SeguirCursoCard />
    </div>
  );
}
