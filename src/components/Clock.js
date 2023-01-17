import React from 'react';


class Clock extends React.Component{

    // when we have to use props then use the constructor given bellow:
    // constructor(props){
    //     super(props);
    //     this.state ={ date: new Date()};
    // }

    // otherwise we will use
    state ={ date: new Date(), locale: 'bn-BD'};

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
    // handleClick(e){
    //     e.preventDefault();
    //     console.log('the button was clicked');
    // }
    
    // handleClick = () => {
    //     this.setState({
    //         locale: 'en-us',
    //     });
    // }

    handleClick = (locale) =>{
        this.setState({
            locale
        });
    }

    render(){
        const { date, locale } = this.state;
        
        // if(locale === 'bn-BD'){
        //     button = <button onClick={()=>this.handleClick( 'en-US')}>Click Me</button>
        // } else {
        //     button = <button onClick={()=>this.handleClick( 'bn-BD')}>Click Me</button>
        // }
        return(
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* <button onClick={this.handleClick}>Click Me</button> */}
                {/* <button onClick={this.handleClick.bind(this, 'en-US')}>Click Me</button> */}
                {/* {button} */}
                { locale==='bn-BD'? <button onClick={()=>this.handleClick( 'en-US')} >Ghori Change Korun</button>: <button onClick={()=>this.handleClick( 'bn-BD')} >Change Clock</button>
                }

                
                
                
            </div>
            
        );
    }
}

export default Clock;