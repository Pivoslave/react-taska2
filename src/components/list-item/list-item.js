import whiteCheck from '../../img/white-check.svg';
import trashBin from '../../img/trashbin.svg';

import './list-item.css'
import {useState} from "react";

function ListItem(props){

    const[checked, setChecked] = useState(true);

    return(

        <div className='list-item' key={props.id}>
            <div className='check-wrapper' onClick={() => setChecked(!checked)}>
                <img src={!checked ? whiteCheck : ''} alt=''/>
            </div>

            <div>
                <h3 style={{textDecoration: (!checked ? 'line-through black 0.4vw' : '')}}>{props.text}</h3>
                <h3 style={{textDecoration: (!checked ? 'line-through black 0.4vw' : '')}}>{props.date}</h3>
            </div>

            <div>
                <img src={trashBin} alt='' onClick={() => {props.removeHandler(props.id)}}/>
            </div>

        </div>

    )}

export default ListItem;