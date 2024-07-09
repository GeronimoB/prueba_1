import React from 'react';
import SeguirCursoCard from './SeguirCursoCard';
import Image from 'next/image';
import styles from '../../styles/MisCursos.module.css';

export default function MisCursos({ toggleSidebar }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.sidebarToggle} onClick={toggleSidebar}>
            <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
          </div>
          <h1 className={styles.title}>Mis Cursos</h1>
        </div>
        <SeguirCursoCard />
        <SeguirCursoCard />
      </div>
    </div>
  );
}