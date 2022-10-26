const express = require("express");
const axios = require("axios");
const router = new express.Router();
const API_KEY = require('../APIKey');

const BASE_URL = 'https://api.nasa.gov/planetary/apod';

router.get('/', async function(req, res) {
    let result = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return res.json(result.data);
})

module.exports = router;