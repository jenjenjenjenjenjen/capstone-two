const express = require("express");
const axios = require("axios");
const router = new express.Router();
const API_KEY = require('../APIKey');

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';

router.get("/", async function(req, res) {
    let results = await axios.get(`${BASE_URL}${req.query.rover}?api_key=${API_KEY}`);
    return res.json(results.data);
})

module.exports = router;