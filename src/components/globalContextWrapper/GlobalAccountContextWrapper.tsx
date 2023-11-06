'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useEffect } from 'react'
import { usePathname, useRouter, } from 'next/navigation';
interface AccountContext {
	isLogin: Boolean
	checkIsLoginForToken : Function;
	callLoginLogic : Function;
	callLogoutLogic : Function;
	accountSummary : AccountSummaryType;
}
type AccountSummaryType = {
	accountId: string,
	fullName: string
}

export const AccountContext = createContext<AccountContext>({
	isLogin : false,
	checkIsLoginForToken: ()=>false,
	callLoginLogic: (accountId: string, password: string) => false,
	callLogoutLogic: () => false,
	accountSummary : {} as AccountSummaryType
});

export default ({
    children
} : {
    children: ReactNode
}) => {
    const [isLogin, setIsLogin] = useState(false);
	const [accountSummary, setAccountSummary] = useState<AccountSummaryType>({} as AccountSummaryType);
	const value = {
		isLogin,
		checkIsLoginForToken: ()=>{
			// to do token check is login
			let token = ''
			let accountId = '';
			let fullName = '';
			setAccountSummary({accountId, fullName})
			setIsLogin(true)
			return true;
		},
		callLoginLogic: (accountId: string, password: string) => {
			// to do call login logic
			setAccountSummary({accountId, fullName:'kim joo hyoung'})
			setIsLogin(true)
			return true;
		},
		callLogoutLogic: () => {
			//to do call logout logic
			setAccountSummary({} as AccountSummaryType);
			setIsLogin(false);
			return false;
		},
		accountSummary
	};
    return (
		<AccountContext.Provider value = {value}>
			{children}
		</AccountContext.Provider>
    )
}