var express = require('express');
var router = express.Router();
let { notesArray } = require('../database/notes.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(notesArray));
});

module.exports = router;
