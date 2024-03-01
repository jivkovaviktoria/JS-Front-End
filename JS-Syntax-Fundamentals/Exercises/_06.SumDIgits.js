function sumDigits(number){
    let sum  = 0
    while(number > 0) {
        number = parseInt(number);

        let digit = number % 10;
        sum += digit;

        number /= 10;
        number = parseInt(number);
    }

    console.log(sum);
}