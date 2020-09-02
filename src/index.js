import {createStore} from "redux";


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span')

number.innerText = 0;

const ADD = "ADD"
const MINUS = "MINUS"


const reducer = (number = 0, action) => {
    switch (action.type) {
        case ADD:
            return number + 1

        case MINUS:
            return number - 1

        default:
            return number
    }
}



const countStore = createStore(reducer)

const onChnage = () => {
    number.innerText = countStore.getState()
}
countStore.subscribe(onChnage);


const handleAdd = () => {
    countStore.dispatch({type: ADD})
}
const handleMinus = () => {
    countStore.dispatch({type: MINUS})
}



add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)