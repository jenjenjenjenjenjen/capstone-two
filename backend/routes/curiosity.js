const express = require("express");
const axios = require("axios");
const router = new express.Router();
const API_KEY = require('../APIKey');

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity';


router.get('/photos', async function(req, res) {
    let baseQuery = `${BASE_URL}/photos?api_key=${API_KEY}`
    req.query.sol ? baseQuery = baseQuery + `&sol=${req.query.sol}` : null;
    req.query.earth_date ? baseQuery += `&earth_date=${req.query.earth_date}` : null;
    req.query.camera ? baseQuery += `&camera=${req.query.camera}` : null;
    let results = await axios.get(baseQuery);
    return res.json(results.data.photos);
})

router.get('/', async function(req, res) {
    let results = await axios.get(`${BASE_URL}/?api_key=${API_KEY}`);
    console.log(results)
    return res.json([results.data.rover])
})

router.get('/latest_photos', async function(req, res) {
    let results = await axios.get(`${BASE_URL}/latest_photos?api_key=${API_KEY}`);
    return res.json(results.data.latest_photos);
})

module.exports = router;