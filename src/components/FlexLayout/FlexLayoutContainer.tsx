import styles from '@styles/flexLayout.module.css'
import {ReactNode} from 'react'

type Props = {
    grow: number;
    children: ReactNode;
};


const FlexLayoutContainer = (prop : Props) => {
	const {grow = 1, children} = prop
	return (
		<div className={`${styles.flex_layout_container}`} style={{flex : `${grow} 1 0%`}}>
			{children}
		</div>
	)
}
export default FlexLayoutContainer;
  