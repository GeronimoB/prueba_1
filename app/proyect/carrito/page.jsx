"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../../styles/Carrito.module.css';

export default function Carrito() {
  const [items, setItems] = useState([
    { id: 1, curso: 'Lorem ipsum dolor sit amet.', monto: 0.00, cantidad: 1, total: 0.00 },
    { id: 2, curso: 'Lorem ipsum dolor sit amet.', monto: 0.00, cantidad: 1, total: 0.00 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, cantidad: newQuantity, total: item.monto * newQuantity } : item
    ));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  return (
    <div className={styles.cantou}> 
      <Navbar />
      <div className={styles.container}>
        <div className={styles.background}>
          <Image
            src="/fondo1.png"
            alt="Fondo"
            layout="fill"
            objectFit="cover"
            className={styles.backgroundImage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Carrito</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Monto</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.curso}</td>
                  <td style={{ color: '#00FFA3' }}>{item.monto.toFixed(2)}€</td>
                  <td>
                    <div className={styles.quantityControl}>
                      <button onClick={() => handleQuantityChange(item.id, Math.max(1, item.cantidad - 1))}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.cantidad + 1)}>+</button>
                    </div>
                  </td>
                  <td style={{ color: '#00FFA3' }}>{item.total.toFixed(2)}€</td>
                  <td><button className={styles.removeButton} onClick={() => handleRemove(item.id)}>Borrar</button></td>
                </tr>
              ))}
              <tr className={styles.separator}></tr> {/* Añadir la línea de separación */}
              <tr>
                <td colSpan="2" className={styles.leftContainer}>
                  <label className={styles.descuento}>Introduce cupón de descuento</label>
                  <input type="text" placeholder="Código descuento" className={styles.input} />
                </td>
                <td colSpan="3" className={styles.rightContainer}>
                  <div className={styles.subtotal}>
                    <span>Subtotal:</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className={styles.iva}>
                    <span>Incluye IVA</span>
                    <span>{iva.toFixed(2)}€</span>
                  </div>
                  <div className={styles.total}>
                    <span>TOTAL:</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.buttonContainer}>
            <button className={styles.updateButton}>Actualizar carrito</button>
            <button className={styles.payButton}>Pagar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
