import styles from '@styles/flexLayoutPanel.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";


type Props = {
  direction: string;
};



const FlexLayoutPanel = (props : Props) => {
  let {direction} = props;
  const [totalMovement, setTotalMovement] = useState(0);

  return (
    <div className={`${styles.resize_panel} ${styles[direction]}`} >
        <div className={styles.hover}>
        </div>
        <div className={styles.panel}>

        </div>
    </div>
  )
}
export default FlexLayoutPanel;
