const Button = (props)=> {
    return <button onClick={props.handleClick}>{props.btnName}</button>
  
};

export default Button;