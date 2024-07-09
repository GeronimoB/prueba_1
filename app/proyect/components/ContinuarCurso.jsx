import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ContinuarCurso.module.css';

export default function ContinuarCurso({ porcentaje }) {
  return (
    <div className={styles.curso}>
      <div className={styles.imageContainer}>
        <Image src="/course-image.png" alt="Course Image" width={738} height={593} />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <p className={styles.subscribirse}>Te suscribiste el 10/oct./2023</p>
          <p className={styles.niveles}>Todos los Niveles</p>
        </div>

        <div className={styles.progress}>
          <svg viewBox="0 0 36 36" className={styles.circularChart}>
            <path
              className={styles.circleBg}
              d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={styles.circle}
              strokeDasharray={`${porcentaje}, 100`}
              d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className={styles.percentage}>
              {porcentaje}%
            </text>
          </svg>
        </div>
          <button className={styles.button}>Continuar curso</button>
      </div>
    </div>
  );
}
