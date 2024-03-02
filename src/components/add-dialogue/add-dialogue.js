import React, {useState} from "react";

function AddDialogue(props){

    const[inputText, setInputText] = useState('');

    return(

        <div className='text-add'
             style={{display: (props.showState ? '':'none'), padding:'0 2rem'}}>
            <input
                value= {inputText}
                onChange={e => {setInputText(e.target.value); console.log(e.target.value)}}
                style={{marginRight:'3rem', width:'20vw', fontFamily:'Oswald Regular', fontSize:'1vw'}}
            ></input>

            <button
                value='submit'
                onClick={() => {if(inputText !== '') props.addItemHandler(inputText); setInputText('')}}
                style={{width:'7vw', backgroundColor:'black', color:'white', padding:'0.3vh 0 0.3vh 0', fontFamily:'Oswald Regular', fontSize:'1vw', marginRight:'3rem', border:'none', cursor:'pointer'}}
            >Add task</button>

            <button
                value='cancel'
                onClick={() => props.showAdder(false)}
                style={{width:'7vw', backgroundColor:'black', color:'white', padding:'0.3vh 0 0.3vh 0', fontFamily:'Oswald Regular', fontSize:'1vw', border:'none', cursor:'pointer'}}
            >Cancel</button>
        </div>

    )



}

export default AddDialogue;