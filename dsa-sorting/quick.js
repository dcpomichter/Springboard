/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
function pivot(arr, left = 0, right = arr.length - 1) {
    let swapIndex = left;
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < arr[left]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, left, swapIndex);
    return swapIndex
}
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);

    }
    return arr;
}
module.exports = quickSort;
