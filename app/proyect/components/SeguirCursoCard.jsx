import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../../styles/SeguirCursoCard.module.css';

export default function SeguirCursoCard() {
  const router = useRouter();
  const porcentaje = 50;

  const handleContinueCourse = () => {
    router.push('/proyect/VistaCursos?cursoIniciado=true');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src="/course-image.PNG" alt="Course Image" width={293} height={235} />
      </div>
      <div className={styles.progressWrapper}>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}%`}
          className={styles.CircularProgressbar}
          styles={buildStyles({
            pathColor: '#00FFA3',
            textColor: '#fff',
            trailColor: '#fff',
            backgroundColor: '#00004B',
          })}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Precios para pequeñas y medianas empresas</h2>
            <p className={styles.lessons}>Lecciones: 9</p>
          </div>
          <div className={`${styles.progressWrapperMobile} ${styles.mobileOnly}`}>
            <CircularProgressbar
              value={porcentaje}
              text={`${porcentaje}%`}
              className={styles.CircularProgressbarMobile}
              styles={buildStyles({
                pathColor: '#00FFA3',
                textColor: '#fff',
                trailColor: '#fff',
                backgroundColor: '#00004B',
              })}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={handleContinueCourse}>Continuar curso</button>
          <div className={styles.stars}>
            ★★★★☆
          </div>
        </div>
      </div>
    </div>
  );
}
