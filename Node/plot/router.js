const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/fetchPlotData',controller.fetchPlotData);

router.post('/plotRegistration',controller.plotRegistration);

module.exports = router;