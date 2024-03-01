function rotate(elements, count) {
    for(let i = 0; i < count; i++){
        const el = elements[0];

        elements.splice(0, 1);
        elements.push(el);
    }

    console.log(elements.join(" "));
}