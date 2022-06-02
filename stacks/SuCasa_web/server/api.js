const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const { data } = await axios('https://sucasa.up.railway.app/')

        return res.json(data)
    } catch(error) {
        console.error(error);
    }
})