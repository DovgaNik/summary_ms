const express = require("express");
const router = express.Router();

const {GoogleGenerativeAI} = require("@google/generative-ai");
const prompts = require("../utils/promptCreator.js");

router.post("/summary", async (req, res) => {

    const { GEMINI_API_KEY, GEMINI_MODEL } = req.app.locals.config;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

    const prompt = prompts.createPrompt(req.body.transcript);

    const result = await model.generateContent(prompt);
    res.send(result.response.text());

});

module.exports = router;