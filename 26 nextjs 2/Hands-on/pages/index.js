import MeetupList from "../components/meetups/MeetupList"
import {MongoClient} from 'mongodb'
//this head componenent is used to add metadata to pages like title, dexcription headers etc.
import Head from 'next/head'
import { Fragment } from "react"

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "First Meetup",
        image: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
        address: "301, Gamma",
        description: "Meetup"
    },
    {
        id: "m2",
        title: "Second Meetup",
        image: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
        address: "301, Gamma",
        description: "Meetup"
    }
]

function Home(props){ 
    return <Fragment>
        <Head>
            <title>Next</title>
            <meta name="React" content="Learn"></meta>
        </Head>
        <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
}

//this is next js reserved function which is called during prerendering, useful when data is required in pages, cant'be used with getServerSideProps
// export function getStaticProps(){
//     //this meetup being passed to only the one where this is defined ie home component
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         //use this for data auto refresh every 10 secs, basically regenerate the page
//         revalidate: 10
//     }
// }
//this is also reserved nextjs fun which runs after page deployed and runs for every request
// export async function getServerSideProps(context){
//     const request = context.req
//     const response = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://shivam1040:9695838438@cluster0.nhq4c5q.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()
    return {
        props: {
            meetups: (meetups).map(m => ({
                title: m.data.title,
                address: m.data.address,
                image: m.data.image,
                id: m._id.toString()
            }))
        },
        revalidate: 1
    }
}
export default Home