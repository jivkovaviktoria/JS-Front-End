function reveal(words, text) {
    wordsCollection = words.split(", ");

    for (let word of wordsCollection) {
        text = text.replace("*".repeat(word.length), word);
    }

    console.log(text);
}