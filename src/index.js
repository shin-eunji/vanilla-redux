import {createStore} from "redux";

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}
const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}


const reducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
})

const paintTodos = () => {
    const todos = store.getState();
    ul.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        const btnDelete = document.createElement('button');

        li.id = todo.id;
        li.innerText = todo.text;
        ul.appendChild(li);

        btnDelete.innerText = 'DELETE';
        li.appendChild(btnDelete)
        btnDelete.addEventListener('click', dispatchDeleteTodo)
    })
}

store.subscribe(paintTodos)

const dispatchAddTodo = (text) => {
    store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id)
    store.dispatch(deleteTodo(id))
}

const onSubmit = e => {
    e.preventDefault();
    const todo = input.value;
    input.value = '';
    dispatchAddTodo(todo);
}

form.addEventListener('submit', onSubmit)