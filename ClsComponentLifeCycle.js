import React from "react";
class ClsComponentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={Name:''};
        this.fnUpdateName=this.fnUpdateName.bind(this);
        this.fnUpdateName1=this.fnUpdateName1.bind(this);
    }
    fnUpdateName(event){
        this.setState({Name:event.target.value});
    }
    fnUpdateName1(event){
        alert("Nameis:"+this.state.Name);
    }
    componentDidMount(){
        console.log("Calling ComponentDid Methiod");
    }
    shouldComponentUpdate(){
        console.log("calling should component update method");
        return true;
    }
    componentDidUpdate(){
        console.log("Calling componentdid update method ");
    }
    componentWillUnmount(){
        console.log("calling component will unmount method");
    }
    render(){
        return(
            <div>
                <h1>enter name:</h1>
                <input type="text" value={this.state.NAME}
                onChange={this.fnUpdateName}/>
                <h1> {this.state.Name}</h1>
                <button onClick={this.fnUpdateName1 }>Click</button>
            </div>
        );
    }

}
export default ClsComponentLifeCycle;