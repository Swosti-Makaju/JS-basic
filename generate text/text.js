const fetchData = async () => {
    const todos = document.getElementById("list");
    console.log(todos);

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((response) => response.json());

      console.log("response: ", response);

      if (response) {
        console.log("hello");
        const li = document.createElement("li");

        li.innerHTML = `
          <span>${response.title}</span>
        `;
        todos.appendChild(li); // no need to await appendChild, it's not a promise
      }
    };






/*let currentIndex = 0;
const todos = ['Hello', 'Have a nice day!', 'ByeBye','Take care.'];
document.getElementById('btn-generate').addEventListener('click', generateTodos);

async function fetchTodo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (currentIndex < todos.length) {
                resolve(todos[currentIndex]);
            } else {
                resolve(null);
            }
        }, 500);
    });
}

async function generateTodos() {
    const todoList = document.getElementById('list');
    const todoText = await fetchTodo();
    
    if (todoText) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        currentIndex++;
    } else {
        todoList.innerHTML = '';
        currentIndex = 0;
    }
}*/