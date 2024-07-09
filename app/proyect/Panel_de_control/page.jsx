"use client";

import React, { Suspense } from 'react';
import PanelDeControlContent from './PanelDeControlContent';
import styles from '../../styles/PanelDeControl.module.css';

export default function PanelDeControl() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PanelDeControlContent />
    </Suspense>
  );
}
