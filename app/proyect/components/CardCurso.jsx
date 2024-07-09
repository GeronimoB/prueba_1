"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../../styles/CardCurso.module.css';

export default function CardCurso() {
  const router = useRouter();

  const handleBuyCourse = () => {
    router.push('/proyect/VistaCursos?cursoIniciado=false');
  };

  return (
    <div className={styles.card2}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/course-image.png" alt="Course Image" layout="responsive" width={16} height={9} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.cardTitle}>Precios para pequeñas y medianas empresas</h3>
          <p className={styles.lecciones}>Lecciones: 9</p>
          <p className={styles.incluye}><strong>Este curso incluye:</strong></p>
          <ul className={styles.cardList}>
            <li>• 2 horas de vídeo bajo demanda</li>
            <li>• 3 recursos descargables</li>
            <li>• Acceso en móvil y TV</li>
            <li>• Acceso completo de por vida</li>
            <li>• Certificado de finalización</li>
          </ul>
          <a href="#" className={styles.cardLink}>Ver más...</a>
        </div>
        <div className={styles.details}>
          <div className={styles.stars}>
            ★★★★
          </div>
          <div className={styles.price}>
            <span>00,00€</span>
          </div>
          <button className={styles.button} onClick={handleBuyCourse}>COMPRAR CURSO</button>
          <button className={styles.wishlist}>Agregar a lista de deseos</button>
        </div>
      </div>
    </div>
  );
}
