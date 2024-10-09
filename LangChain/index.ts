import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new HuggingFaceInference({
	model: "gpt2",
});

const messages = [
	new SystemMessage("Translate the following from English into Italian"),
	new HumanMessage("hi!"),
];

const parser = new StringOutputParser();

// await model.invoke(messages);
// const res = await model.invoke("1 + 1 =");
const res = await model.invoke(messages);
const chat = await parser.invoke(res);
console.log(chat);
