window.addEventListener("load", solve);

function solve() {
    //place, action, person, add-btn

    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const addButtonElement = document.getElementById('add-btn');

    const taskListElement = document.getElementById('task-list');

    addButtonElement.addEventListener('click', () => {
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;

        if (place != '' && action != '' && person != '') {
            const newTaskElement = createTaskElement(place, action, person);
            taskListElement.appendChild(newTaskElement);

            clearInputs();
        }
    });

    function createTaskElement(place, action, person) {
        const editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        editButtonElement.classList.add('edit');

        const doneButtonElement = document.createElement('button');
        doneButtonElement.textContent = 'Done';
        doneButtonElement.classList.add('done');

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');

        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);

        const placeElement = document.createElement('p');
        placeElement.textContent = `Place:${place}`;

        const actionElement = document.createElement('p');
        actionElement.textContent = `Action:${place}`;

        const personElement = document.createElement('p');
        personElement.textContent = `Person:${place}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placeElement);
        articleElement.appendChild(actionElement);
        articleElement.appendChild(personElement);

        const liTaskElement = document.createElement('li');
        liTaskElement.classList.add('clean-task');
        liTaskElement.appendChild(articleElement);
        liTaskElement.appendChild(buttonsDivElement);

        editButtonElement.addEventListener('click', () => {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            liTaskElement.remove();
        });

        doneButtonElement.addEventListener('click', () => {
            const doneListElement = document.getElementById('done-list');
            liTaskElement.removeChild(buttonsDivElement);

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.classList.add('delete');

            liTaskElement.appendChild(deleteButtonElement);

            doneListElement.appendChild(liTaskElement);

            deleteButtonElement.addEventListener('click', () => {
                doneListElement.removeChild(liTaskElement);
            });
        });

        return liTaskElement;
    }

    function clearInputs() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }
}