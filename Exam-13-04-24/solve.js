function wildWestAdventure(input) {
    let characters = {};
    const numberOfCharacters = parseInt(input[0]);

    for (let i = 1; i <= numberOfCharacters; i++) {
        const parts = input[i].split(' ');
        const name = parts[0];
        const hp = parseInt(parts[1]);
        const bullets = parseInt(parts[2]);
        characters[name] = { hp, bullets };
    }

    for (let i = numberOfCharacters + 1; i < input.length; i++) {
        const line = input[i];
        
        if (line === "Ride Off Into Sunset") {
            let results = [];
            Object.keys(characters).forEach(name => {
                const { hp, bullets } = characters[name];
                results.push(`${name}\n HP: ${hp}\n Bullets: ${bullets}`);
            });
            return results.join('\n');
        } 
        else processCommand(line, characters);
    }

    function processCommand(command, characters) {
        const [action, characterName, param, attacker] = command.split(" - ");
    
        if (action === 'FireShot') {
            if (characters[characterName].bullets > 0) {
                characters[characterName].bullets--;
                console.log(`${characterName} has successfully hit ${param} and now has ${characters[characterName].bullets} bullets!`);
            }
            else{
                console.log(`${characterName} doesn't have enough bullets to shoot at ${param}!`);
            }
        }
        else if (action === 'TakeHit') {
            const damage = parseInt(param);
            characters[characterName].hp -= damage;
            if (characters[characterName].hp <= 0){
                delete characters[characterName];
                console.log(`${characterName} was gunned down by ${attacker}!`);
            } 
            else{
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${characters[characterName].hp} HP!`);
            }
        }
        else if (action === 'Reload') {
            const bulletsToAdd = 6 - characters[characterName].bullets;
            if (bulletsToAdd > 0) {
                characters[characterName].bullets += bulletsToAdd;
                console.log(`${characterName} reloaded ${bulletsToAdd} bullets!`);
            }
            else{
                console.log(`${characterName}'s pistol is fully loaded!`);
            }
        }
        else if (action === 'PatchUp') {
            const healAmount = parseInt(param);
            if (characters[characterName].hp < 100) {
                const newHp = characters[characterName].hp + healAmount;
                characters[characterName].hp = newHp > 100 ? 100 : newHp;

                console.log(`${characterName} patched up and recovered ${healAmount} HP!`);
            }
            else{
                console.log(`${characterName} is in full health!`);
            }
        }
    }
}