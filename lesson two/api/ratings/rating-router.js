const express = require('express');

const ratingsDB = require('./rating-model.js');

const router = express.Router();
// module.exports = router;
router.get('/', async (req, res) => {
    try {
      const ratings = await ratingsDB.find(req.query);
        res.status(200).json(ratings);
      } catch(err) {
        res.status(500).json({ message: 'Failed to get ratings' });
      }
  }
);
// single get route for a rating by id
router.get('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.findById(req.params.id);
        res.status(200).json(rating);
    } catch(err) {
        res.status(500).json({ message: 'Failed to get rating' });
    }
    }
);
// single post route for a rating by id
router.post('/', async (req, res) => {
    try {
        const rating = await ratingsDB.add(req.body);
        res.status(201).json(rating);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add rating' });
    }
}
);
// single put route for a rating by id  
router.put('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.update(req.params.id, req.body);
        res.status(200).json(rating);
    } catch(err) {
        res.status(500).json({ message: 'Failed to update rating' });
    }
}
);
// single delete route for a rating by id
router.delete('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.remove(req.params.id);
        res.status(200).json(rating);
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete rating' });
    }
}
);
module.exports = router;
// module.exports = router;