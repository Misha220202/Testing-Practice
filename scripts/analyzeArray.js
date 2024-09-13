const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    const sorted = leftIndex < left.length ? result.concat(left.slice(leftIndex)) : result.concat(right.slice(rightIndex));
    return sorted;
}

const analyzeArray = (arr) => {
    if (!Array.isArray(arr) || arr.length == 0 || !arr.every(item => typeof item == 'number')) {
        throw new Error('Input must be a non-empty array of numbers');
    }
    const sorted = mergeSort(arr);
    const object = {
        average: sorted.reduce((total, current) => total + current, 0) / sorted.length,
        min: sorted[0],
        max: sorted[sorted.length - 1],
        length: sorted.length
    }
    return object;
}

module.exports = analyzeArray;