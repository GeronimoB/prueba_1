import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/AfiliadosComponent.module.css';

const AfiliadosComponent = ({ onRetirar, toggleSidebar }) => {
  const afiliados = [
    { correo: 'Lorem ipsum dolor sit amet.', cantidad: '00,00€', fecha: '10/Oct./2023' },
    { correo: 'Lorem ipsum dolor sit amet.', cantidad: '00,00€', fecha: '10/Oct./2023' },
    { correo: 'Lorem ipsum dolor sit amet.', cantidad: '00,00€', fecha: '10/Oct./2023' },
    { correo: 'Lorem ipsum dolor sit amet.', cantidad: '00,00€', fecha: '10/Oct./2023' },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleRowClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Ajustes {">"} Afiliados</h1>
      </div>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      <div className={styles.codeContainer}>
        <span className={styles.codeLabel}>Tu código:</span>
        <span className={styles.code}>XXXXXXXXXXX</span>
      </div>
      <div className={styles.linkContainer}>
        <a href="https://ejemplo.com/ref?codigo1">https://ejemplo.com/ref?codigo1</a>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.correoHeader}>Correo</th>
            <th>Cantidad</th>
            <th className={styles.fechaHeader}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {afiliados.map((afiliado, index) => (
            <tr
              key={index}
              className={`${styles.row} ${index === selectedIndex ? styles.selectedRow : ''}`}
              onClick={() => handleRowClick(index)}
            >
              <td className={styles.correo}>{afiliado.correo}</td>
              <td className={styles.cantidad}>{afiliado.cantidad}</td>
              <td className={styles.fecha}>{afiliado.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.retirarButton} onClick={onRetirar}>RETIRAR</button>
    </div>
  );
};

export default AfiliadosComponent;
