let form = document.getElementById('todo');

let todo_list = document.getElementById('todo-row');

let date = document.getElementById('date');

function setTime() {
    date.innerHTML = moment(new Date()).format('ddd, DD MMM YYYY HH:mm:ss A');
}

setInterval(setTime, 1000);

form.addEventListener('submit', event => {
    event.preventDefault();

    let item = event.target.todo;

    let todo = generateHTMLCode(item.value);

    todo_list.appendChild(todo);

    todo.scrollIntoView();

    item.value = '';
})


function generateHTMLCode(todo_text) {
    let list_div = document.createElement('div');
    let text_div = document.createElement('div');
    let text_p = document.createElement('p');
    let created_p = document.createElement('p');
    let btn_div = document.createElement('div');
    let btn = document.createElement('button');
    let icon = document.createElement('i');

    list_div.classList.add('list');
    text_div.classList.add('todo-item-date-text');
    text_p.classList.add('todo-text');
    created_p.classList.add('created-date');
    btn_div.classList.add('list-buttons');
    btn.classList.add('delete-list');
    icon.classList.add('far', 'fa-times-circle');

    text_p.innerHTML = todo_text;
    created_p.innerHTML = moment(new Date()).format('ddd, DD MMM YYYY HH:mm:ss A');

    list_div.addEventListener('click', () => { listDone(list_div); });
    btn.addEventListener('click', () => { removeListItem(list_div); });

    text_div.append(text_p, created_p);
    btn.appendChild(icon);
    btn_div.appendChild(btn);
    list_div.append(text_div, btn_div);

    return list_div;
}

function listDone(list) {
    list.classList.toggle('done')
}

function removeListItem(list) {
    list.remove();
}