"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Curso from '../components/Curso';
import ContinuarCurso from '../components/ContinuarCurso';
import Image from 'next/image';
import styles from '../../styles/VistaCursos.module.css';

export default function VistaCursos() {
  const searchParams = useSearchParams();
  const cursoIniciado = searchParams.get('cursoIniciado') === 'true';
  const [selectedClass, setSelectedClass] = useState(1);
  const totalClasses = 9;

  useEffect(() => {
    setSelectedClass(1);
  }, [cursoIniciado]);

  const handleClassClick = (classNumber) => {
    setSelectedClass(classNumber);
  };

  const classList = [
    '1. ¿Qué es el valor para el cliente?',
    '2. Avance',
    '3. Medir el valor del cliente',
    '4. Ejercicio de cuadrícula de valor del cliente',
    '5. La estrategia de fijación de precios en ocho pasos, parte 1',
    '6. La estrategia de fijación de precios en ocho pasos, parte 2',
    '7. Ejemplo de estrategia de precios',
    '8. Manteniendo su política de precios',
    '9. Construyendo valor de diferenciación',
  ];

  const porcentajeCompletitud = Math.round((selectedClass / totalClasses) * 100);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.flanja} />
          <div className={styles.topSection}>
            <h1 className={styles.title}>Precios Para Pequeñas Y Medianas Empresas</h1>
            <h2 className={styles.subtitle}>LO QUE APRENDERÁS</h2>
            <ul className={styles.learnList}>
              <li>• Apreciar Los Peligros De Fijar Precios Basándose En El Coste Incrementado.</li>
              <li>• Describir Los Elementos Del Valor Para El Cliente.</li>
              <li>• Implementar El Customer Value Grid Para Comparar El Valor Proporcionado Por Los Productos Y Servicios De Su Organización Con El De La Competencia.</li>
            </ul>
          </div>
          <div className={styles.bottomSection}>
            <h2 className={styles.sectionTitle}>Contenido Del Curso</h2>
            <ul className={styles.courseList}>
              {classList.map((className, index) => (
                <li
                  key={index}
                  className={`${styles.courseListItem} ${selectedClass === index + 1 ? styles.selected : ''}`}
                  onClick={() => handleClassClick(index + 1)}
                >
                  <Image src="/Play.svg" alt="icon" width={24} height={24} className={styles.img_video} />
                  {className}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.rightContent}>
          {!cursoIniciado ? (
            <Curso />
          ) : (
            <ContinuarCurso porcentaje={porcentajeCompletitud} />
          )}
        </div>
      </div>
      <Footer />
    </div>
    </Suspense>
  );
}
