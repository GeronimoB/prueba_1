import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Curso.module.css';

export default function Curso() {
  return (
    <div className={styles.curso}>
      <div className={styles.imageContainer}>
        <Image src="/course-image.PNG" alt="Course Image" width={738} height={593} />
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <span>00,00€</span>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.incluyeYBotones}>
            <div>
              <p className={styles.incluye}><strong>Este curso incluye:</strong></p>
              <ul className={styles.courseIncludes}>
                <li>• 2 horas de vídeo bajo demanda</li>
                <li>• 3 recursos descargables</li>
                <li>• Acceso en móvil y TV</li>
                <li>• Acceso completo de por vida</li>
                <li>• Certificado de finalización</li>
              </ul>
            </div>
            <div className={styles.botones}>
              <button className={styles.button}>COMPRAR CURSO</button>
              <button className={styles.wishlist}>Agregar a lista de deseos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
