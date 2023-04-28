const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// import { API_KEY } from "./apikey.js";
// import { PROMPT } from "./prompt.js";
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
});
