const {MonngoClient, MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const databansename = "Namastenode";

async function datacreate(params) {
    await client.connect();

    console.log("Connected to the server");

    const db = client.db(databansename);

    const collection = db.collection("user");

    const insertdata= await collection.insertMany([
        {name: "Amit", age: 25},
        {name: "Sumit", age: 30},
        {name: "Rahul", age: 35},
        {name: "Rohit", age : 40}
    ]);
    console.log("inserted  data", insertdata);
    
    
    return "connected ";
}

datacreate()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());
