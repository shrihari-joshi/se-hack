const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_api_key);

exports.generateResponse = async (req, res) => {
    const { age, area, soilType } = req.body;
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = 'this are the specifications of farmer and farm' +
        `age : ${age}, area : ${area}, type of soil : ${soilType} `+
        'Give me the list of all the schemes that are provided by the government of India suitable for my specifications for next seasons also give the link to the official websites of the schemes ' +
        'Limit word limit to 50 to 70 only'

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('Text generated');
        res.send(text);
    } catch (error) {
        console.log(error);
        res.status(500).send("Couldn't fullfil your request at this time.");
    }
};
exports.generateKisanCare = async (req, res) => {
    const { prompt } = req.body;
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('Text generated');
        res.send(text);
    } catch (error) {
        console.log(error);
        res.status(500).send("Couldn't fullfil your request at this time.");
    }
};