import './Card.css'


function Card(props){
    const classes = 'card ' + props.className;

    
    return (
        
        <div className={classes} onDoubleClick={props.handleDoubleClick} onClick={props.handleClick} onChange={props.handleChange}>{props.children} </div>
        
    )
}

export default Card;