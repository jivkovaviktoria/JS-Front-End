const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

const loadPresentsButtonElement = document.getElementById('load-presents');
const addPresentButtonElement = document.getElementById('add-present');

const giftListElement = document.getElementById('gift-list');

const giftInputElement = document.getElementById('gift');
const giftForElement = document.getElementById('for');
const giftPriceElement = document.getElementById('price');

loadPresentsButtonElement.addEventListener('click', async () => {
    await loadPresents();
});

addPresentButtonElement.addEventListener('click', () => {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gift: document.getElementById('gift').value,
            for: document.getElementById('for').value,
            price: document.getElementById('price').value,
        })
    }).then(result => {
        if (!result.ok) return;

        clearInputFields();
        return loadPresents();
    });
});

function clearInputFields() {
    document.getElementById('gift').value = '';
    document.getElementById('for').value = '';
    document.getElementById('price').value = '';
}

function editPresent(e, _id, gift, recipient, price) {
    const giftSockElement = e.target.parentElement.parentElement;

    giftInputElement.value = gift;
    giftForElement.value = recipient;
    giftPriceElement.value = price;

    const addButtonElement = document.getElementById('add-present');
    addButtonElement.setAttribute('disabled', 'disabled');

    const editButtonElement = document.getElementById('edit-present');
    editButtonElement.removeAttribute('disabled');

    giftSockElement.remove();

    editButtonElement.addEventListener('click', () => {
        fetch(baseUrl + _id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gift: giftInputElement.value,
                for: giftForElement.value,
                price: giftPriceElement.value,
            })
        }).then(result => {
            if (!result.ok) return;

            clearInputFields();
            return loadPresents();
        });

        editButtonElement.setAttribute('disabled', 'disabled');
        addButtonElement.removeAttribute('disabled');
    })
}

async function loadPresents() {
    await fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            giftListElement.innerHTML = '';

            Object.values(data).forEach(present => {
                const element = createPresentElement(present);
                giftListElement.appendChild(element);
            });
        });
}

function deletePresent(_id) {
    fetch(baseUrl + _id, {
        method: 'DELETE'
    });

    loadPresents();
}

function createPresentElement({ _id, gift, for: recipient, price }) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');

    const giftNameElement = document.createElement('p');
    giftNameElement.textContent = gift;

    const giftRecipientElement = document.createElement('p');
    giftRecipientElement.textContent = recipient;

    const giftPriceElement = document.createElement('p');
    giftPriceElement.textContent = price;

    const giftSockElement = document.createElement('div');
    giftSockElement.classList.add('gift-sock');

    contentDivElement.appendChild(giftNameElement);
    contentDivElement.appendChild(giftRecipientElement);
    contentDivElement.appendChild(giftPriceElement);

    giftSockElement.appendChild(contentDivElement);
    giftSockElement.appendChild(buttonsDivElement);

    changeButtonElement.addEventListener('click', (e) => editPresent(e, _id, gift, recipient, price));

    deleteButtonElement.addEventListener('click', () => {
        deletePresent(_id);
    });

    giftSockElement.setAttribute('data-id', _id);
    giftSockElement.setAttribute('data-gift', gift);
    giftSockElement.setAttribute('data-for', recipient);
    giftSockElement.setAttribute('data-price', price);

    return giftSockElement;
}