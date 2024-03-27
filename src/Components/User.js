
import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        // console.log( this.props.info +'::'+"contructor is called")

    }
    componentDidMount(){
        // console.log( this.props.info +'::' +"did mount is called")
    }
    componentDidUpdate(){
        // console.log('Did update is called')
    }
    componentWillUnmount(){
        // console.log("Will unmount is called")
    }


    render(){
        // console.log(this.props.info +'::'+"render is called")

        return (<div>
            This is from Class based component.
            <h2>{this.props.info}</h2>
        </div>)
    }
};

export default User;