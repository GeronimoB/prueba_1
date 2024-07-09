"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../../styles/Login.module.css';

export default function Login() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/proyect/Register');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    router.push('/proyect/Cursos');
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src="/fondo1.png" alt="Fondo 2" layout="fill" objectFit="cover" className={styles.fondo2} />
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={412} height={58} />
      </div>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Inicia sesión en tu cuenta</h1>
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Usuario / Correo" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Contraseña" className={styles.input} />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">¿Se te ha olvidado la contraseña?</a>
            </div>
            <div className={styles.buttons}>
              <button type="button" className={styles.registerButton} onClick={handleRegister}>REGISTRARME</button>
              <button type="submit" className={styles.loginButton}>INICIAR SESIÓN</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.womanContainer}>
        <Image src="/woman.png" alt="Woman" layout="intrinsic" width={795} height={981} className={styles.woman} />
      </div>
    </div>
  );
};
