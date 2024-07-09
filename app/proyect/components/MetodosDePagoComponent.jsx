import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/MetodosDePagoComponent.module.css';

const MetodosDePagoComponent = ({ onAddMethod, toggleSidebar }) => {
  const [metodos, setMetodos] = useState([
    { metodo: 'Lorem ipsum dolor sit amet.', caduca: '10/Oct./2023' },
    { metodo: 'Lorem ipsum dolor sit amet.', caduca: '10/Oct./2023' },
  ]);

  const handleDelete = (index) => {
    const nuevosMetodos = metodos.filter((_, i) => i !== index);
    setMetodos(nuevosMetodos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Ajustes {">"} Método de pago</h1>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Método</th>
            <th>Caduca</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {metodos.map((metodo, index) => (
            <tr key={index}>
              <td>{metodo.metodo}</td>
              <td className={styles.caduca}>{metodo.caduca}</td>
              <td>
                <button className={styles.deleteButton} onClick={() => handleDelete(index)}>BORRAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.addButton} onClick={onAddMethod}>Añadir método de pago</button>
      </div>
    </div>
  );
};

export default MetodosDePagoComponent;
