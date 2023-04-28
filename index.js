// const { API_KEY } = require("./apikey.js");
// const { PROMPT } = require("./prompt.js");

const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;
const configuration = new Configuration({
    organization: "org-xctP8O1XB6NLY9K7RK9xnKiM",
    apiKey: `${API_KEY}`
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("prove to test7");
});
