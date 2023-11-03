import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import * as React from 'react'
import styles from '@/app/layout.module.css'
import flexLayoutStyles from '@styles/flexLayout.module.css'
import FlexLayoutPanel from '@components/FlexLayoutPanel/FlexLayoutPanel'
const inter = Inter({ subsets: ['latin'] })

//<div className={classNames(style.red,style.btn)}>Hello Webpack!!!</div>
export const metadata: Metadata = {
	title: 'BO Tempalte',
	description:' TEST description ',
}

//페이지 내부에서 병렬 컨텐츠를 이용할 경우 풀더 경로는 @
const RootLayout = ({
	children,
	header,
	footer
} : {
	children : React.ReactNode,
	header : React.ReactNode,
	footer : React.ReactNode
}) => {
	const direction = 'column';
	return (
		<html lang="ko">
			<body className={`${inter.className} ${flexLayoutStyles.flex_layout} ${flexLayoutStyles[direction]}`}>
				{header}
				<FlexLayoutPanel direction={direction}></FlexLayoutPanel>
				{children}
				<FlexLayoutPanel direction={direction}></FlexLayoutPanel>
				{footer}
			</body>
		</html>
	)
}

export default RootLayout;