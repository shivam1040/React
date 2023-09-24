import {useRouter} from 'next/router'
//using square brackets instead of filename acts as identifier which can be acessed to do ops
function Imp(){
    const router = useRouter()
    //way to access newsId passed via url
    return <h1>{router.query.newsId}</h1>
}

export default Imp
