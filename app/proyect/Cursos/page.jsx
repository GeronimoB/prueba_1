import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardCurso from '../components/CardCurso';
import styles from '../../styles/Cursos.module.css';

export default function Cursos() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Cursos</h1>
        <CardCurso />
        <CardCurso />
      </div>
      <Footer />
    </div>
  );
}
