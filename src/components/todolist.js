import ListAdder from "./list-adder/list-adder";
import ListWrapper from "./list-wrapper/list-wrapper";
import {useState} from "react";

function TodoList(){



    return(
        <>
        <ListAdder/>
        <ListWrapper/>
        </>
    )
}

export default TodoList;