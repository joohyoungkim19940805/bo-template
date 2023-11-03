'use client'
import styles from '@/app/@footer/page.module.css'
import flexLayoutStyles from '@styles/flexLayout.module.css'

const Footer = () => {
  return (
    <div id={styles.footer_wrapper} className={`${flexLayoutStyles.flex_layout_container}`}>
      <div>footer array</div>
    </div>
  )
}
export default Footer;