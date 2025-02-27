const  {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const db = client.db("Namastenode");

async function conccteddb(){
    try{
        await client.connect();
        console.log("Connected to the server");

    }catch(err){
        console.log(err);
    }finally{
        await client.close();
        console.log("Disconnected from the server");
    }   
}
conccteddb();