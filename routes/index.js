const express = require('express');
const router = express.Router(); // This is the critical line

// GET / route
router.get('/', (req, res) => {
  res.send('Hello from routes!');
});

router.use('/contacts', require('./contact'));

module.exports = router;