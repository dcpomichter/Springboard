const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1)
        }
        console.log(data.toString())
    })
}

cat(process.argv[2])
