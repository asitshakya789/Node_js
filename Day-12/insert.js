const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "Namastenode";

async function connectDb() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to database");

        const db = client.db(dbname);
        const collection = db.collection("users");

        const data = await collection.insertMany([
            { "Name": "Asit Kumar", "Age": 22 },
            { "Name": "Rahul", "Age": 23 },
            { "Name": "Raj", "Age": 24 }
        ]);

        console.log("Data inserted successfully:", data.insertedCount);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
        console.log("Database connection closed");
    }
}

connectDb();
