'use client'
import dynamic from 'next/dynamic'
import BackPage from '../page'
import { useRouter, useParams, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';

const Default = () => {
    let param = useParams();
    let searchParam = useSearchParams();
    console.log('searchParam', searchParam);
    console.log('searchParam', searchParam.get('background'));
    console.log('useParams', param)
    return <BackPage></BackPage>
}

export default Default;