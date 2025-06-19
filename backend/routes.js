const express = require('express');
const router = express.Router();
const ctl = require('./controllers');

//create a new entry
router.route('/')
  .post(ctl.createBiodata)
  .get(ctl.getAllBiodata);

//get a single entry by id
router.get('/:id', ctl.getOneBiodata);


module.exports = router;