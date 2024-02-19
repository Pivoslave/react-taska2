import './list-adder.css'
import AddDialogue from "../add-dialogue/add-dialogue";
import {useState} from "react";
function ListAdder(props){

    const[showAdd, setShowAdd] = useState(false);

    return(
        <>
        <div className='list-adder'>
            <h1>Todo list:</h1>
            <button onClick={() => setShowAdd(!showAdd)}>+</button>
        </div>


        <AddDialogue showAdder={showAdd}/>
        </>
    )}

export default ListAdder;