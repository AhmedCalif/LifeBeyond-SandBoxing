/* import { HfInference } from "@huggingface/inference";

const inference = new HfInference(process.env.HUGGINGFACEHUB_API_KEY);

const result = await inference.textClassification({
	model: "microsoft/Phi-3-mini-4k-instruct",
	inputs: "Today is a nice day",
});

console.log(result); */

async function query(data: { inputs: string }) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/google/gemma-2-2b-it",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.HUGGINGFACEHUB_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: "Today is a great day " }).then((response) => {
	console.log(JSON.stringify(response, null, 2));
});
