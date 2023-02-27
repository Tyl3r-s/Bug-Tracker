const router = require('express').Router();
const userRoutes = require('./user-routes');
const entryRoutes = require('./entry-routes');

router.use('/users', userRoutes);
router.user('/entries', entryRoutes);

module.exports = router;