//when subfolder is created in pages then to define the default page of that route index.js is written
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import {useRouter} from 'next/router'

function NewMeetup(){
    const router = useRouter()
    async function addMeetupHandler(enteredMeetupData){
        //this url is the url created under api directory which only serves on server side as backend code
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        console.log(await response.json())
        //route to base page
        router.push('/')
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
}

export default NewMeetup