const fs = require('fs');
const process = require('process');
const axios = require('axios');

function output(text, out) {
    if (out) {
        fs.writeFile(out, text, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
}

function cat(path, out) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1)
        } else {
            output(data.toString(), out)
        }
    })
}

async function webCat(url, out) {
    try {
        const response = await axios.get(url);
        output(response.data, out);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out);
}
