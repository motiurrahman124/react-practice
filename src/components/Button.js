import React from "react";

class Button extends React.Component{
    render(){
        return(
            <button onClick={()=>this.handleClick( 'en-US')}>Click Me</button>
        );
    }
}

export default Button;