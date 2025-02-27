const { MongoClient } = require('mongodb');  // Fixed typo
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const db = "Namastenode";
const collection = "users";

async function updateData() {
    try {
        await client.connect();
        const result = await client.db(db)
            .collection(collection)
            .updateOne({ name: "Rahul" }, { $set: { name: "John Doe" } }); // Added await

        if (result.modifiedCount > 0) {
            console.log("Data updated successfully");
        } else {
            console.log("No matching document found");
        }
    } catch (err) {
        console.log("Error:", err);
    } finally {
        await client.close(); // Added await
        console.log("Database connection closed");
    }
}

updateData();
