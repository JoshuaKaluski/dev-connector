const express = require('express');
const router = express.Router();

/*
Route:       GET api/posts
Description: Test route
Access:      Public
*/
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;