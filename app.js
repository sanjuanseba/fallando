import dotenv from 'dotenv'
dotenv.config()

import { OpenAIThread } from "openai-threads";

async function main() {
  try {
    const APIKEY = 'Bearer ' + process.env.OPENAI_API_KEY;
    const thread = new OpenAIThread("asst_talI9bZtZF2xtWnGftJUVqEY", {
        Authorization: APIKEY
      });

    await thread.createThread();
    await thread.createUserMessage("por los creditos");
    const response = await thread.getResponse();
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
