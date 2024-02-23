const route = require('express').Router();

const { convertPdf } = require('../controllers/home');

route.get("/", (req, res) => {
    res.render('home');
});

route.post("/convert", async (req, res) => {
    const {url, filename, directory} = req.body;

    const result = await convertPdf(url, filename, directory);

    res.render('convert', {result});
});

module.exports = route;