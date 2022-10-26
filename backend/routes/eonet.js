const express = require("express");
const axios = require("axios");
const router = new express.Router();

const BASE_URL = 'https://eonet.gsfc.nasa.gov/api/v2.1/';

router.get('/events', async function(req, res) {
    let data = await axios.get(`${BASE_URL}events?days=${req.query.days}`);
    return res.json(data.data);
})

module.exports = router;