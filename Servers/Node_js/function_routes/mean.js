function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length
}

module.exports = findMean
