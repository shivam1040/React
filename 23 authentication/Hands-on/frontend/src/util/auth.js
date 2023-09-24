import { redirect } from "react-router-dom"

export function getDuration(){
    const storedDate=new Date(localStorage.getItem("expiration"))
    const now=new Date()
    const duration=storedDate.getTime()-now.getTime()
    return duration
}
export function getToken(){
    const token=localStorage.getItem("token")

    if(!token)
        return null
    if(getDuration()<0)
        return "EXPIRED"
    return token
}
export function checkToken(){
    if(!getToken())
        return redirect("/auth")
}