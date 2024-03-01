function cook(number, a1, a2, a3, a4, a5){
    let result = parseInt(number);
    let args = [a1, a2, a3, a4, a5];

    args.forEach(x => {
        if(x === "chop") result /= 2;
        else if(x === "dice") result = Math.sqrt(result);
        else if(x === "spice") result++;
        else if(x === "bake") result *= 3;
        else if(x === "fillet") result*=0.8;

        console.log(result.toFixed(1));
    });
}