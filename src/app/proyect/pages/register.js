import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src="/background-image.png" alt="Background" layout="fill" objectFit="cover" className={styles.backgroundImage} />
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={300} height={50} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Regístrate</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Usuario" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" placeholder="Contraseña" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Correo" className={styles.input} />
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Confirmo y acepto los Términos y Condiciones y he leído la Política de Privacidad
            </label>
          </div>
          <button type="submit" className={styles.registerButton}>REGISTRARSE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
