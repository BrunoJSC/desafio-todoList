const button = document.querySelector('button');
let input = document.querySelector('input');

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    createTask(input.value);
  }
});

function clear(li) {
  li.innerText += ' ';
  const btnClear = document.createElement('button');
  btnClear.innerText = 'Clear';
  li.appendChild(btnClear);
  btnClear.setAttribute('class', 'clear');
  btnClear.setAttribute('title', 'task clear');
}

function createLi() {
  const li = document.createElement('li');
  return li;
}

function createTask(textTask) {
  input.value = "";
  const li = createLi();
  const ul = document.querySelector('ul');

  li.innerText = textTask;
  ul.appendChild(li);
  clear(li);
  storage();
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('clear')) {
    el.parentElement.remove();
  }
});

function storage() {
  const liTask = document.querySelectorAll('li');
  const listTask = [];

  for (let task of liTask) {
    let listText = task.innerText;
    listText = listText.replace('clear', '').trim();
    listTask.push(listText);
  }

  const taskJSON = JSON.stringify(listTask);
  localStorage.setItem('tasks', taskJSON);
  const taks = JSON.parse(localStorage.getItem('tasks'));

  console.log(taks)
}

button.addEventListener('click', () => {
  if (!input.value) return;
  createTask(input.value);
});
