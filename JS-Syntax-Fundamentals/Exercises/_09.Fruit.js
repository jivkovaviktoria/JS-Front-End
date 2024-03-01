function calculatePrice(type, weight, pricePerKg) {
    let pricePerGram = pricePerKg / 1000;
    let totalPrice = (weight * pricePerGram).toFixed(2);

    const kg = (parseInt(weight) / 1000).toFixed(2);
    console.log(`I need $${totalPrice} to buy ${kg} kilograms ${type}.`);
}
