//when subfolder is created in pages then to define the default page of that route index.js is written

import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"
import {MongoClient, ObjectId} from 'mongodb'

function MeetupDetails(props){
    return <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} 
    address={props.meetupData.address} description={props.meetupData.description}></MeetupDetail>
}

export default MeetupDetails
//when static prop is used then context passed return url params as compared context in serversideprops
export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect('mongodb+srv://shivam1040:9695838438@cluster0.nhq4c5q.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    //filtering and getting only id from all the data
    const meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)})

    client.close()
    //this won't be displayed in webpage console as this function is run during build time so you would see where the page gets served from
    console.log(meetup)
    return {
        props: {
            meetupData: meetup.data
        }
    }
}
//this function is needed for staticprops for dynamic or query pages to generate page statically for all the pages that user may visit and need to be generated during build process
export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://shivam1040:9695838438@cluster0.nhq4c5q.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    //filtering and getting only id from all the data
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close()
    return {
        //false means paths contains all supported urls else when set to true then it generates left ones during runtime
        fallback: false,
        //creating path mapped to number of ids present in db
        paths: meetups.map(m => ({params: {meetupId: m._id.toString()}}))
        // paths: [
        //     {params: {
        //         meetupId: 'm1'
        //     }},
        //     {params: {
        //         meetupId: 'm2'
        //     }}
        // ]
    }
}
