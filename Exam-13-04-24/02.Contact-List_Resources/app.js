
function solve() {
  const addButtonElement = document.getElementById('add-btn');
  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categoryInputElement = document.getElementById('category');

  const checkListElement = document.getElementById('check-list');
  const contactsListElement = document.getElementById('contact-list');

  addButtonElement.addEventListener('click', () => {
    const name = nameInputElement.value;
    const phone = phoneInputElement.value;
    const category = categoryInputElement.value;

    if (name === '' || phone === '' || category === '') {
      return;
    }

    createContactElement({ name, phone, category });
  });

  function createContactElement({ name, phone, category }) {
    const liElement = document.createElement('li');
    const articleElement = document.createElement('article');
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons');

    const nameElement = document.createElement('p');
    const phoneElement = document.createElement('p');
    const categoryElement = document.createElement('p');

    nameElement.textContent = `name:${name}`;
    phoneElement.textContent = `phone:${phone}`;
    categoryElement.textContent = `category:${category}`;

    articleElement.appendChild(nameElement);
    articleElement.appendChild(phoneElement);
    articleElement.appendChild(categoryElement);

    liElement.appendChild(articleElement);

    const editButtonElement = document.createElement('button');
    const saveButtonElement = document.createElement('button');

    editButtonElement.classList.add('edit-btn');
    saveButtonElement.classList.add('save-btn');

    buttonsDivElement.appendChild(editButtonElement);
    buttonsDivElement.appendChild(saveButtonElement);

    liElement.appendChild(buttonsDivElement);

    checkListElement.appendChild(liElement);
    clearInputFields();

    editButtonElement.addEventListener('click', () => {
      liElement.remove();

      nameInputElement.value = name;
      phoneInputElement.value = phone;
      categoryInputElement.value = category;
    });

    saveButtonElement.addEventListener('click', () => {
      liElement.removeChild(buttonsDivElement);

      const deleteButtonElement = document.createElement('button');
      deleteButtonElement.classList.add('del-btn');

      liElement.appendChild(deleteButtonElement);
      contactsListElement.appendChild(liElement);

      deleteButtonElement.addEventListener('click', () => {
        contactsListElement.removeChild(liElement);
      });
    });
  }


  function clearInputFields() {
    nameInputElement.value = '';
    phoneInputElement.value = '';
    categoryInputElement.value = '';
  }
}

