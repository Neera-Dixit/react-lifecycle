import React,{Component} from 'react';
import "./component.css"

export default class ComponentOne extends Component {
    constructor(props){
        super(props);
        this.state = { count : 0};
        console.log("Constructor invoked");
    }

    componentWillMount(){
        console.log("Component Will Mount!!");
    }

    componentDidMount(){
        console.log("Component Mounted!!");
    }

    componentWillReceiveProps(){
        console.log("Component will receive Props");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should component Update");
        return true;
    }

    componentWillUpdate(){
        console.log("Component Will Update!!");
    }

    componentDidUpdate(){
        console.log("Component Did Update!!");
    }

    handleBtnClick = ()=>{
        let count = this.state.count;
        count++;
        this.setState({count});
    }

    render(){
        const {count} = this.state;

        console.log("Render Invoked!!");

            return (
                <div id="count">
                    <label><h3>Count : {count}</h3></label>
                    <br/>
                    <h5>Click Me</h5><button onClick={this.handleBtnClick}>+</button>
                </div>
            );
    }

    componentWillUnmount(){
        console.log("Component Will UnMount!!");
    }
}