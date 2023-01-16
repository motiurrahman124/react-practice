import React from 'react';


class Clock extends React.Component{

    // when we have to use props then use the constructor given bellow:
    // constructor(props){
    //     super(props);
    //     this.state ={ date: new Date()};
    // }

    // otherwise we will use
    state ={ date: new Date()};

    componentDidMount(){
        this.clockTimer = setInterval(()=> {this.tick()},1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    handleClick(){
        console.log('the button was clicked');
    }

    render(){
        const { date } = this.state;
        return(
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString('bn-bd')}</span>
                </h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
            
        );
    }
}

export default Clock;