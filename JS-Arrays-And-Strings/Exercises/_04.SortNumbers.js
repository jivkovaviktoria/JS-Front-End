function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b);

    let middle = Math.ceil(numbers.length / 2);
    let firstHalf = numbers.slice(0, middle);
    let secondHalf = numbers.slice(middle).reverse();

    let result = [];
    for (let i = 0; i < middle; i++) {
        if (firstHalf[i] !== undefined) {
            result.push(firstHalf[i]);
        }
        if (secondHalf[i] !== undefined) {
            result.push(secondHalf[i]);
        }
    }

    return result;
}