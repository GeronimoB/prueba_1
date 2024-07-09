import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/PedidosComponent.module.css';

export default function PedidosComponent({ toggleSidebar }) {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const pedidos = [
    { id: '12468PR4', curso: 'Lorem ipsum dolor sit amet.', monto: '00,00€', estado: 'Completado', fecha: '10/Oct./2023' },
    { id: '12468PR4', curso: 'Lorem ipsum dolor sit amet.', monto: '00,00€', estado: 'Completado', fecha: '10/Oct./2023' },
    { id: '12468PR2', curso: 'Lorem ipsum dolor sit amet.', monto: '00,00€', estado: 'En proceso', fecha: '10/Oct./2023' },
    { id: '12468PR9', curso: 'Lorem ipsum dolor sit amet.', monto: '00,00€', estado: 'Completado', fecha: '10/Oct./2023' },
  ];

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.sidebarToggle} onClick={toggleSidebar}>
          <Image src="/puntos.svg" alt="Menu" width={24} height={24} />
        </div>
        <h1 className={styles.title}>Pedidos</h1>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Curso</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr
              key={index}
              className={`${styles.tableRow} ${selectedRowIndex === index ? styles.selectedRow : ''}`}
              onClick={() => handleRowClick(index)}
            >
              <td>• {pedido.id}</td>
              <td>{pedido.curso}</td>
              <td className={styles.monto}>{pedido.monto}</td>
              <td className={`${styles.estado} ${pedido.estado === 'En proceso' ? styles.inProcess : ''}`}>{pedido.estado}</td>
              <td>{pedido.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.downloadButton}>Descargar todas las factura</button>
      </div>
    </div>
  );
}
