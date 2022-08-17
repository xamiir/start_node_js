const express = require('express');

const restaurantsDB = require('./restaurant-model.js');

const router = express.Router();
// module.exports = router;
router.get('/', async (req, res) => {
    try {
      const restaurants = await restaurantsDB.find(req.query);
        res.status(200).json(restaurants);
      } catch(err) {
        res.status(500).json({ message: 'Failed to get restaurants' });
      }
  });
  // single get route for a restaurant by id
    router.get('/:id', async (req, res) => {
        try {
            const restaurant = await restaurantsDB.findById(req.params.id);
            res.status(200).json(restaurant);
        } catch(err) {
            res.status(500).json({ message: 'Failed to get restaurant' });
        }
        });
        // single post route for a restaurant by id
        router.post('/', async (req, res) => {
            try {
                const restaurant = await restaurantsDB.add(req.body);
                res.status(201).json(restaurant);
            } catch(err) {
                res.status(500).json({ message: 'Failed to add restaurant' });
            }
        }
        );
        // single put route for a restaurant by id
        router.put('/:id', async (req, res) => {
            try {
                const restaurant = await restaurantsDB.update(req.params.id, req.body);
                res.status(200).json(restaurant);
            } catch(err) {
                res.status(500).json({ message: 'Failed to update restaurant' });
            }
        }
        );
        // single delete route for a restaurant by id
        router.delete('/:id', async (req, res) => {
            try {
                const restaurant = await restaurantsDB.remove(req.params.id);
                res.status(200).json(restaurant);
            } catch(err) {
                res.status(500).json({ message: 'Failed to delete restaurant' });
            }
        }
        );
        module.exports = router;
        // module.exports = router;
   