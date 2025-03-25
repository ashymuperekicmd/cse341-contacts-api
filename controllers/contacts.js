const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;  // Note: Capital 'O' in ObjectId

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().collection('contacts').find();
        const contacts = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingle = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);  // Note: Capital 'O' in ObjectId
        const result = await mongodb.getDatabase().collection('contacts').find({ _id: contactId });
        const contacts = await result.toArray();
        
        if (contacts.length === 0) {
            res.status(404).json({ message: 'Contact not found' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAll,
    getSingle
};