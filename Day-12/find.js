const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function finddb() {
  try {
    await client.connect(); // Connect first
    console.log("Connected to the server");

    const db = client.db("Namastenode"); // Define db after connection
    const collection = db.collection("users");

    const data = await collection.find({}).toArray();
    console.log("Data found:", data);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
}

finddb(); // Call the function to execute
