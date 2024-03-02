import './general.css';

import ListAdder from "./list-adder/list-adder";
import ListWrapper from "./list-wrapper/list-wrapper";
import {useState} from "react";

function TodoList(){
    const[todos, setTodos] = useState([]);

    return(
        <>
        <ListAdder addItem={addTodoItem}/>
        <ListWrapper todos={todos} itemRemover={removeItemById}/>
        </>
    )

    function addTodoItem(text){

        let date = new Date();

        setTodos([...todos,
            {'text': text, 'date': `${date.toLocaleTimeString()}, ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth()+1).padStart(2, '0')}-${date.getFullYear()}`, 'id': Date.now()}]);
    }

    function removeItemById(argId){
        setTodos(todos.filter(item => item.id !== argId));
    }
}

export default TodoList;