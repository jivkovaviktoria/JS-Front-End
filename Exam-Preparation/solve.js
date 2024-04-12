function solve(input){
    let message = input.shift();

    const takeEven = (message) => {
        return message.split('').filter((_, index) => index % 2 === 0).join('');
    }

    const changeAll = (message, substring, replacement) => {
        let newMessage = message;

        while(newMessage.includes(substring)){
            newMessage = newMessage.replace(substring, replacement);
        }

        return newMessage;
    }

    const reverse = (message, substring) => {
        if(!message.includes(substring)){
            return 'error';
        }

        let reversedSubstring = substring.split('').reverse().join('');
        message = message.replace(substring, '');
        message += reversedSubstring;
        return message;
    }

    let line = input.shift();
    while(line != 'Buy'){
        const [command, substring, replacement] = line.split('?');

        let hasError = false;

        if(command === 'TakeEven') message = takeEven(message);
        else if(command === 'ChangeAll') message = changeAll(message, substring, replacement);
        else if(command === 'Reverse') {
            let result = reverse(message, substring);
            if(result === 'error') hasError = true;
            else message = result;
        }

        if(hasError) console.log('error');
        else console.log(message);

        line = input.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
}