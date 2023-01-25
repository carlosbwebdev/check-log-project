const express = require('express');

const NewEntryDataController = require('../controllers/NewEntryDataController');

const router = express.Router();

router
  .route('/')
  .post(NewEntryDataController.createNewEntryData)
  .get(NewEntryDataController.getEntryData);

router
  .route('/:date/:team')
  .get(NewEntryDataController.getEntryDatabyDateAndTeam);

module.exports = router;
