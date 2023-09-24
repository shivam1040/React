import MainNavigation from "../components/MainNavigation"
import {Outlet, useNavigation} from "react-router-dom"

function Root(){
    //this hook tells the state of trnasition or not like moving to differnent path
    //this is only used in places which has been already rendered and we wanna move from there to other page, best is root page which is available everyhere in this case
    // const navigation=useNavigation()

    return <>
        <MainNavigation/>
            <main>
                {/* {navigation.state==="loading" && <p>loading</p>} */}
                <Outlet></Outlet>
            </main>
    </>
}

export default Root