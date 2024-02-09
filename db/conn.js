import {MongoClient} from 'mongodb';

console.log(process.env.ATLAS_URI);
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();
    console.log(`Connected to mongodb`);
} catch (e) {
    console.log(e);
}

const db = conn.db("pokedex-app");

export default db;