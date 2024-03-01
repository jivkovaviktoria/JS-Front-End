function checkNumberAndSum(number) {
    number = parseInt(number);

    let lastDigit = number % 10;
    number /= 10;

    let sum = lastDigit;

    let areTheSame = true;

    while(number > 0){
        number = parseInt(number);

        let digit = number % 10;
        sum += digit;

        if(digit != lastDigit){
            areTheSame = false;
        }

        number /= 10;
        number = parseInt(number);
    }

    console.log(areTheSame);
    console.log(sum);
}


