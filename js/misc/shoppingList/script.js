let list = document.querySelector('ul');
let btn = document.querySelector('button');
let input = document.querySelector('#item');
let listItem = '';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    listItem = input.value;

    //list items
    const listEle = document.createElement('li');
    listEle.textContent = listItem;
    list.appendChild(listEle);

    //button element
    const btnEle = document.createElement('button');
    btnEle.textContent = 'Delete';
    listEle.appendChild(btnEle);
    //remove button function
    btnEle.addEventListener('click', () => {
        list.removeChild(listEle);
        input.focus();
    })

    input.value = '';
    input.focus();
})