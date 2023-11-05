import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import * as React from 'react'
import styles from '@/app/layout.module.css'
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ['latin'] })

//<div className={classNames(style.red,style.btn)}>Hello Webpack!!!</div>
export const metadata: Metadata = {
	title: 'BO Tempalte',
	description:' TEST description ',
}

//페이지 내부에서 병렬 컨텐츠를 이용할 경우 풀더 경로는 @

const RootLayout = ({
	children
} : {
	children : React.ReactNode
}) => {
	const direction : string = 'column';
	return (
		<div style={{background:'red'}}>
			{children}
		</div>
	)
}

export default RootLayout;