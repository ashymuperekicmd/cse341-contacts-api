const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

// Debug: Verify environment variables are loaded
console.log('MONGODB_URI:', process.env.MONGODB_URI);

let database;
let client;

const initDb = async (callback) => {
    try {
        if (database) {
            console.log("Db is already initialized!");
            return callback(null, database);
        }

        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        client = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        database = client.db();
        console.log('Database connected successfully');
        callback(null, database);
    } catch (err) {
        console.error('Database connection failed:', err);
        callback(err);
    }
};

const getDatabase = () => {
    if (!database) {
        throw Error('Database not initialized');
    }
    return database;
};

module.exports = {
    initDb,
    getDatabase
};