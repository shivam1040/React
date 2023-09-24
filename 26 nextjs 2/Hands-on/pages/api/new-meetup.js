//next js allows one to write backedn code too following the structure here
import {MongoClient} from 'mongodb'
//api/new-meetup
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://shivam1040:9695838438@cluster0.nhq4c5q.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne({data})

        client.close()
        res.status(201).json({message: 'Inserted'})
    }
}

export default handler