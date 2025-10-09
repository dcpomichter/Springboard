const express = require('express');

const app = express();

const validateNums = require('./validate')
const findMode = require('./mode')
const findMean = require('./mean')
const findMedian = require('./median')

app.get('/mean', function (req, res) {
    if (!req.query.nums) {
        res.status(400)
        throw new Error('You must pass a query key of nums with a comma-separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = validateNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new Error(nums);
    }


    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
});

app.get('/median', function (req, res) {
    if (!req.query.nums) {
        res.status(400)
        throw new Error('You must pass a query key of nums with a comma-separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = validateNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new Error(nums);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result);

});

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        res.status(400)
        throw new Error('You must pass a query key of nums with a comma-separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = validateNums(numsAsStrings);
    if (nums instanceof Error) {
        throw new Error(nums);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);


});

app.use(function (req, res, next) {
    const err = new Error("Not Found");
    err[status] = 404

    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
    });
});

app.listen(3000, () => {
    console.log('Listening to Port 3000')
})
