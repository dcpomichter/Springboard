/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function generateText(text) {
    let genText = new markov.MarkovMachine(text);
    console.log(genText.makeText());
}


function makeText(file) {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        } else {
            generateText(data.toString());
        }
    });

}


/** read URL and make text from it. */


async function makeURLText(url) {
    let response;

    try {
        response = await axios.get(url);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    generateText(response.data)
}


/** interpret cmdline to decide what to do. */

let method = process.argv[2]
let path = process.argv[3];

if (method === "file") {
    makeText(path);
}

else if (method === "url") {
    makeURLText(path);
}

else {
    console.error('Unknown method:', method);
    process.exit(1);
}
