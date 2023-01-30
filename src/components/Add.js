function Add(props){
    return(
        <>
            <h1>This is add component.</h1>
            {props.x}
            {props.y}
            <h3>Sum of {props.x} and {props.y} is {props.x+props.y}</h3>
        </>
    )
}

export default Add;

