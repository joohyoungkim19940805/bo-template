'use client'
import styles from '@/app/@header/page.module.css'
import flexLayoutStyles from '@styles/flexLayout.module.css'

const Header = () => {
  return (
    <div id={styles.header_wrapper} className={`${flexLayoutStyles.flex_layout_container}`}>
      <div>header array</div>
    </div>
  )
}
export default Header;