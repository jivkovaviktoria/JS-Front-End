function getTotalPrice(count, type, day) {
    let price = 0;
    let totalPrice = 0;

    if (type === "Students") {
        if (day === "Friday") price = 8.45;
        else if (day === "Saturday") price = 9.80;
        else price = 10.46;

        if (count >= 30) totalPrice = (count * price) * 0.85;
        else totalPrice = count*price;
    }
    else if (type === "Business") {
        if (day === "Friday") price = 10.90;
        else if (day === "Saturday") price = 15.60;
        else price = 16;

        if (count >= 100) totalPrice = (count - 10) * price;
        else totalPrice = count*price;
    }
    else {
        if (day === "Friday") price = 15;
        else if (day === "Saturday") price = 20;
        else price = 22.50;

        if(count >= 10 && count <= 20) totalPrice = (count*price) * 0.95;
        else totalPrice = count*price;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}