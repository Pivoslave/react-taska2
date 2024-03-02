import './list-adder.css'
import AddDialogue from "../add-dialogue/add-dialogue";
import {useState} from "react";
function ListAdder(props){

    const[showAdd, setShowAdd] = useState(false);

    return(
        <>
        <div className='list-adder' style={{fontFamily:'Oswald Regular'}}>
            <h1>Todo list:</h1>
            <button onClick={() => setShowAdd(!showAdd)} style={{cursor:'pointer'}}>+</button>
        </div>


        <AddDialogue showAdder={setShowAdd} showState={showAdd} addItemHandler={props.addItem}/>
        </>
    )

}

export default ListAdder;