import ListItem from "../list-item/list-item";

function ListWrapper(props){
    return(
        <div className='list-wrapper'
            style={{padding:'2rem 0'}}>
            {props.todos.map(item => (<ListItem text={item.text} date={item.date} id={item.id} removeHandler={props.itemRemover}/>
            ))}
        </div>
    )
}

export default ListWrapper;