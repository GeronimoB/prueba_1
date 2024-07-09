"use client";

import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VistaCursosContent from './VistaCursosContent';
import styles from '../../styles/VistaCursos.module.css';

export default function VistaCursos() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.container}>
        <Navbar />
        <VistaCursosContent />
        <Footer />
      </div>
    </Suspense>
  );
}
