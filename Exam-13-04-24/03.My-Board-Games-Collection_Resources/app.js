const baseUrl = 'http://localhost:3030/jsonstore/games/';

const loadGamesElement = document.getElementById('load-games');

const editGameElement = document.getElementById('edit-game');
const addGameElement = document.getElementById('add-game');

const gamesListElement = document.getElementById('games-list');

const nameInputElement = document.getElementById('g-name');
const playersInputElement = document.getElementById('players');
const typeInputElement = document.getElementById('type');

loadGamesElement.addEventListener('click', async () => {
    await loadGames()
});

addGameElement.addEventListener('click', () => {
    addGame();
});

async function loadGames() {
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            gamesListElement.innerHTML = '';

            Object.values(data).forEach(game => {
                createGameElement(game);
            });
        });
}

function addGame() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInputElement.value,
            players: playersInputElement.value,
            type: typeInputElement.value,
        })
    }).then(result => {
        if (!result.ok) return;

        clearInputFields();
        return loadGames();
    });

}

function createGameElement({ _id, name, type, players }) {
    const divElement = document.createElement('div');
    divElement.classList.add('board-game');

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const nameElement = document.createElement('p');
    const playersElement = document.createElement('p');
    const typeElement = document.createElement('p');

    nameElement.textContent = name;
    playersElement.textContent = players;
    typeElement.textContent = type;

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');

    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    contentElement.appendChild(nameElement);
    contentElement.appendChild(playersElement);
    contentElement.appendChild(typeElement);

    divElement.appendChild(contentElement);
    divElement.appendChild(buttonsDivElement);

    gamesListElement.appendChild(divElement);

    changeButtonElement.addEventListener('click', () => {
        addGameElement.setAttribute('disabled', 'disabled');
        editGameElement.removeAttribute('disabled');

        nameInputElement.value = name;
        playersInputElement.value = players;
        typeInputElement.value = type;

        divElement.remove();
    });

    deleteButtonElement.addEventListener('click', async () => {
        await deleteGame(_id);
    });

    editGameElement.addEventListener('click', () => {
        fetch(baseUrl + _id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameInputElement.value,
                players: playersInputElement.value,
                type: typeInputElement.value,
            })
        }).then(result => {
            if (!result.ok) return;

            clearInputFields();
            return loadGames();
        });

        editGameElement.setAttribute('disabled', 'disabled');
        addGameElement.removeAttribute('disabled');
    });
}

async function deleteGame(_id) {
    fetch(baseUrl + _id, {
        method: 'DELETE'
    });

    await loadGames();
}

function clearInputFields() {
    nameInputElement.value = '';
    playersInputElement.value = '';
    typeInputElement.value = '';
}