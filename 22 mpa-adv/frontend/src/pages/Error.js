import PageContent from "../components/PageContent"
import {useRouteError} from "react-router-dom"

function Error(){
    //captures error response from nearest routte
    const error=useRouteError()
    let title="Error occurred"
    let message="Something wrong"

    if(error.status===500){
        message=JSON.parse(error.data).message
    }
    else if(error.status===404){
        title="Not found"
        message="No such route"
    }
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}

export default Error