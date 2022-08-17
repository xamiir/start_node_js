//require('dotenv').config();
const express = require('express');

const ownersDB = require('./owner-model');
// const { requiredName } = require('../middleware/middleware.js');
const {checkOwner}= require('../middleware/middleware.js');

const router = express.Router();
// module.exports = router;
router.get('/', async (req, res) => {
    try {
        const owners = await ownersDB.find(req.query);
        res.status(200).json(owners);
    } catch(err) {
        res.status(500).json({ message: `Failed to get owners,${err}` });
    }
}
);
// single get route for a owner by id
router.get('/:id', async (req, res) => {
    try {
        const owner = await ownersDB.findById(req.params.id);
        res.status(200).json(owner);
    } catch(err) {
        res.status(500).json({ message: 'Failed to get owner' });
    }
    }
);
// single post route for a owner by id
router.post('/' ,checkOwner, async (req, res) => {
    try {
        const owner = await ownersDB.add(req.body);
        res.status(201).json(owner);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add owner' });
    }
}
);
// single put route for a owner by id
router.put('/:id',checkOwner, async (req, res) => {
    try {
        const owner = await ownersDB.update(req.params.id, req.body);
        res.status(200).json(owner);
    } catch(err) {
        res.status(500).json({ message: 'Failed to update owner' });
    }
}
);
// single delete route for a owner by id
router.delete('/:id',checkOwner, async (req, res) => {
    try {
        const owner = await ownersDB.remove(req.params.id);
        res.status(200).json(owner);
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete owner' });
    }
}
);
module.exports = router;

