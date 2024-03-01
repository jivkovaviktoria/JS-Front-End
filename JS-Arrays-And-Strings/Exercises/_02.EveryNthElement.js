function printArray([...elements], step){
    let result = [];
    for(let i = 0; i < elements.length; i += step) {
        result.push(elements[i]);
    }

    return result;
}
