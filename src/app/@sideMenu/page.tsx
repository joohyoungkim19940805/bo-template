'use client'
import styles from '@/app/@sideMenu/page.module.css'
import flexLayoutStyles from '@styles/flexLayout.module.css'

import {RefObject, useRef} from 'react'

export let sideMenuRef : RefObject<HTMLDivElement> ; 

const SideMenu = () => {

  const sideMenuContainer = useRef<HTMLDivElement>(null)
  sideMenuRef = sideMenuContainer;
  return (
    <div id={styles.side_menu_wrapper} ref={sideMenuContainer}>
      <aside className={styles.side_menu}>
        <ul>
          <li>side menu array</li>
        </ul>
      </aside>
    </div>
  )
}
export default SideMenu;