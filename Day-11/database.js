const { MongoClient } = require("mongodb");

// Connection URL
const URI =
  "mongodb+srv://techasit687:Fsi%401234@namastenodejs.3jkox.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNodejs";

const client = new MongoClient(URI);

const dbName = "Namastenode";

async function main() {
  try {
    await client.connect();
    console.log("Connected to the server");
            
    const db = client.db(dbName);
    const collection = db.collection("User");

    // Find existing data
    const find = await collection.find({}).toArray();
    console.log("The database contains:", find);

    // Data to be inserted
    const data = [
      {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
        city: "New York",
        hobbies: ["reading", "traveling"],
        isActive: true,
      },
      {
        name: "Bob",
        age: 30,
        email: "bob@example.com",
        city: "Los Angeles",
        hobbies: ["gaming", "cycling"],
        isActive: false,
      },
      {
        name: "Charlie",
        age: 28,
        email: "charlie@example.com",
        city: "Chicago",
        hobbies: ["music", "photography"],
        isActive: true,
      },
    ];

    // Insert data into MongoDB
    const result = await collection.insertMany(data);
    console.log("inserdet data " , result);

    return "done.";
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main().then(console.log);
