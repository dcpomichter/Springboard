function findMode(arr) {
    let freqCounter = arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});;

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}

module.exports = findMode
