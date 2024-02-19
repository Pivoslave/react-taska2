import whiteCheck from '../../img/white-check.svg';
import trashBin from '../../img/trashbin.svg';

import './list-item.css'

function ListItem(props){
    return(

        <div className='list-item'>
            <div className='check-wrapper'>
                <img src={whiteCheck} alt=''/>
            </div>

            <div>
                <h3>{props.text}</h3>
                <h3>{props.date}</h3>
            </div>

            <div>
                <img src={trashBin} alt=''/>
            </div>

        </div>

    )}

export default ListItem;