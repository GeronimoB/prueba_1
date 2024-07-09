import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={412} height={58} />
      </div>
      <div className={styles.menu}>
        <Link href="/proyect/Cursos">Cursos</Link>
        <Link href="/proyect/Panel_de_control?section=Mis%20Cursos">Mis Cursos</Link>
        <Link href="/proyect/Panel_de_control">Panel De Control</Link>
        <Link href="/proyect/carrito">
          <Image src="/tienda.svg" alt="Cart" width={36} height={36} />
        </Link>
        <Image src="/notificacion.svg" alt="Notification" width={36} height={36} />
      </div>
    </div>
  );
}
