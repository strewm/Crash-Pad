const router = require('express').Router();
const { googleMapsAPIKey, googleMapsAPIKeyGeocode } = require('../../config');

router.post('/key', (req, res) => {
  res.json({ googleMapsAPIKey, googleMapsAPIKeyGeocode });
});

module.exports = router;
