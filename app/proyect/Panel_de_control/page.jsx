"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../../styles/PanelDeControl.module.css';

import PanelDeControlComponent from '../components/PanelDeControlComponent';
import MisCursosComponent from '../components/MisCursosComponent';
import PedidosComponent from '../components/PedidosComponent';
import SuscripcionesComponent from '../components/SuscripcionesComponent';
import AjustesComponent from '../components/AjustesComponent';
import AfiliadosComponent from '../components/AfiliadosComponent';
import RetirarComponent from '../components/RetirarComponent';

import MiPerfilComponent from '../components/MiPerfilComponent';
import MetodosDePagoComponent from '../components/MetodosDePagoComponent';
import CambiarContrasenaComponent from '../components/CambiarContrasenaComponent';
import AnadirMetodoDePagoComponent from '../components/AnadirMetodoDePagoComponent';

export default function PanelDeControl() {
  const [selectedItem, setSelectedItem] = useState('Panel de control');
  const [isAjustesOpen, setIsAjustesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setSelectedItem(section);
    } else {
      setSelectedItem('Panel de control');
    }
  }, [searchParams]);

  const handleMenuClick = (item) => {
    if (item === 'Cerrar Sesión') {
      window.location.href = '/proyect/Login';
    } else if (ajustesItems.includes(item)) {
      setSelectedItem(item);
    } else {
      if (item === 'Ajustes') {
        setIsAjustesOpen(!isAjustesOpen);
      } else {
        setSelectedItem(item);
        setIsAjustesOpen(false);
      }
    }
  };

  const handleAddMethod = () => {
    setSelectedItem('Añadir método de pago');
  };

  const handleRetirar = () => {
    setSelectedItem('Retirar');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: 'Panel de control', icon: '/panel.svg', activeIcon: '/panel_1.svg' },
    { name: 'Mis Cursos', icon: '/cursos.svg', activeIcon: '/cursos_1.svg' },
    { name: 'Pedidos', icon: '/pedidos.svg', activeIcon: '/pedidos_1.svg' },
    { name: 'Suscripciones', icon: '/suscripciones.svg', activeIcon: '/suscripciones_1.svg' },
    { name: 'Ajustes', icon: '/ajustes.svg', activeIcon: '/ajustes_1.svg' },
    { name: 'Cerrar Sesión', icon: '/logout.svg', activeIcon: '/logout_1.svg' }
  ];

  const ajustesItems = [
    'Mi perfil',
    'Métodos de pago',
    'Cambiar contraseña',
    'Afiliados'
  ];

  const componentMap = {
    'Panel de control': <PanelDeControlComponent toggleSidebar={toggleSidebar} />,
    'Mis Cursos': <MisCursosComponent toggleSidebar={toggleSidebar} />,
    'Pedidos': <PedidosComponent toggleSidebar={toggleSidebar} />,
    'Suscripciones': <SuscripcionesComponent toggleSidebar={toggleSidebar} />,
    'Mi perfil': <MiPerfilComponent toggleSidebar={toggleSidebar} />,
    'Métodos de pago': <MetodosDePagoComponent onAddMethod={handleAddMethod} toggleSidebar={toggleSidebar} />,
    'Cambiar contraseña': <CambiarContrasenaComponent toggleSidebar={toggleSidebar} />,
    'Afiliados': <AfiliadosComponent onRetirar={handleRetirar} toggleSidebar={toggleSidebar} />,
    'Añadir método de pago': <AnadirMetodoDePagoComponent toggleSidebar={toggleSidebar} />,
    'Retirar': <RetirarComponent toggleSidebar={toggleSidebar} />,
  };

  const SelectedComponent = componentMap[selectedItem] || componentMap['Panel de control'];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={`${styles.mainContent} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={`${styles.sidebar} ${isAjustesOpen ? styles.noBottomRightRadius : ''} ${isSidebarOpen ? styles.openSidebar : ''}`}>
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              <div
                className={`${styles.menuItem} ${selectedItem === item.name ? styles.selected : ''} ${item.name === 'Ajustes' && isAjustesOpen ? styles.ajustesOpen : ''}`}
                onClick={() => handleMenuClick(item.name)}
              >
                <img src={(selectedItem === item.name || (item.name === 'Ajustes' && isAjustesOpen)) ? item.activeIcon : item.icon} alt={item.name} width={30} height={30} />
                {item.name}
                {item.name === 'Ajustes' && <span className={styles.arrow}>{isAjustesOpen ? '▲' : '▼'}</span>}
              </div>
              {item.name === 'Ajustes' && isAjustesOpen && (
                <div className={`${styles.ajustesMenu} ${isAjustesOpen ? styles.menuExpanded : ''}`}>
                  {ajustesItems.map((subItem) => (
                    <div
                      key={subItem}
                      className={`${styles.subMenuItem} ${selectedItem === subItem ? styles.selectedSubItem : ''}`}
                      onClick={() => handleMenuClick(subItem)}
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.content}>
          {SelectedComponent}
        </div>
      </div>
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      <Footer />
    </div>
  );
}
