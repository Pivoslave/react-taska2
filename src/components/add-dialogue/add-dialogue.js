import {useState} from "react";

function AddDialogue(props){

    const[inputText, setInputText] = useState('');

    return(

        <div className='text-add' style={(props.showAdder ? {} : {display:'none'})}>
            <input value={inputText} onChange={e => {setInputText(e.target.value)}}></input>
        </div>

    )}

export default AddDialogue;