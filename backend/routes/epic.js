const express = require("express");
const axios = require("axios");
const router = new express.Router();
const API_KEY = require('../APIKey');

const BASE_URL = 'https://api.nasa.gov/EPIC/api/';

router.get('/natural', async function(req, res) {
    let data = await axios.get(`${BASE_URL}natural/date/${req.query.date}?api_key=${API_KEY}`);
    return res.json(data.data);
})

router.get('/enhanced', async function(req, res) {
    let data = await axios.get(`${BASE_URL}enhanced/date/${req.query.date}?api_key=${API_KEY}`);
    return res.json(data.data);
})

module.exports = router;