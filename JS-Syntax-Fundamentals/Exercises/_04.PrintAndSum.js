function printAndSum(start, end) {
    let sum = 0;
    let digits = start.toString();

    for(let i = start; i <= end; i++) {
        if(i != start) digits += ` ${i}`
        sum += i;
    }

    console.log(digits);
    console.log(`Sum: ${sum}`);
}