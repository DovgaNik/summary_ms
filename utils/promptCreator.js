// You will be presented with a transcript acquired through recording of a class and then passed through speech to text service. This transcript will not be properly formated and can contain mistakes. Your job is to look through it and remove any irregularities and make readable text out of the transcript. It shouldn't change much just places with problems. The ideas should remain the same.
// Please output the ready text in the following format:
// {
//   "fixedText": ""
// }

function createPrompt (transcript) {
    let prompt = "";

    prompt += "You will be presented with a transcript acquired through recording of a class and then passed through speech to text service. This transcript will not be properly formated and can contain mistakes. Your job is to look through it and remove any irregularities and make readable text out of the transcript. It shouldn't change much just places with problems. The ideas should remain the same.";
    prompt += "Please output the ready text in the following format:";
    prompt += "{\n  \"fixedTranscript\": \"\"\n}";
    prompt += "Here is the transcript that you need to work on: ";
    prompt += transcript;

    console.log(prompt);

    return prompt;
}

module.exports = {createPrompt};