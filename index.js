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

const PROMPT =
    "Your name is '심리 상담 봇'.\
    You are a kind and helpful psychological counselor.\
    When the user explains their situation or emotions, you must first show empathy and then continue the conversation.\
    You should ask the user 3-5 questions about what they are feeling and why.\
    When asking the user, it is better to ask one question at a time.";

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.post("/", async (req, res) => {
    const { messages } = req.body;
    // console.log(messages);
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `${PROMPT}`
            },
            ...messages
        ]
    });

    res.json({
        completion: completion.data.choices[0].message
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("prove to test8");
});
