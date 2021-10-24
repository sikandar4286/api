const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        hello: "hi!",
    });
});
router.get("/test", (req, res) => {
    res.json({
        hello: "Sikandar ALI",
    });
});
router.get("/sikandar", (req, res) => {
    res.json({
        hello: "here is the netlify api.......",
    });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
