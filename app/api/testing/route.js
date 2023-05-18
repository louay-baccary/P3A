const { Configuration, OpenAIApi } = require("openai");

export const POST = async (request) => {
  try {
    const {  prompt } = await request.json();
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
    });
    return new Response(JSON.stringify(completion.data.choices[0].text), {
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
};
