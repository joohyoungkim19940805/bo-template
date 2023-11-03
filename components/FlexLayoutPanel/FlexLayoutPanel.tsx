'use client'
import styles from '@styles/flexLayoutPanel.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const FlexLayoutPanel = (props : any) => {
  let {direction} = props;
  return (
    <div className={`${styles.resize_panel} ${styles[direction]}`}>
        <div className={styles.hover}>
        </div>
        <div className={styles.panel}>

        </div>
    </div>
  )
}
export default FlexLayoutPanel;
