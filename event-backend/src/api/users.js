const Router = require('express');

const UserEntry = require('../models/UserEntry');

const router = Router();

/*
 * GET /users
 */
router.get('/', async (req, res, next) => {
  try {
    const entries = await UserEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

/*
 * GET /users/:id
 */
router.get('/:id', async (req, res, next) => {
  try {
    const entries = await UserEntry.findById(req.params.id);
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

/*
 * POST /users
 */
router.post('/', async (req, res, next) => {
  try {
    const userEntry = new UserEntry(req.body);
    const createdEntry = await userEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') res.status(422);
    next(error);
  }
});

module.exports = router;
