import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import * as React from 'react'
import styles from '@/app/layout.module.css'
import flexLayoutStyles from '@styles/flexLayout.module.css'
import FlexLayoutPanel from '@components/FlexLayout/FlexLayoutPanel'
import { useRouter } from "next/navigation";
import FlexLayoutWrapper from '@components/FlexLayout/FlexLayoutWrapper'
import FlexLayoutContainer from '@/components/FlexLayout/FlexLayoutContainer'
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
	footer,
	sideMenu,
	...aaa
} : {
	children : React.ReactNode,
	header : React.ReactNode,
	footer : React.ReactNode,
	sideMenu : React.ReactNode
}) => {
	const direction : string = 'column';
	return (
		<html lang="ko">
			<body className={inter.className}>
				<FlexLayoutWrapper direction='column' grow={[0.3, 1, 0.1]}>
					{header}
					
					<FlexLayoutWrapper direction='row' grow={[0.3, 1]}>
						{sideMenu}
						{children}
					</FlexLayoutWrapper>

					{footer}
				</FlexLayoutWrapper>
			</body>
		</html>
	)
}

export default RootLayout;