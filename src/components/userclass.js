import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     personaldetails:{
        //         name:"dummy",
        //         rollno:"dummy"
        //     },
        //     count:0
        // }
    }
    // componentDidMount(){
    //     console.log("component has been mounted")
    //     this.timer=setInterval(()=>{
    //         console.log("timer ")
    //     },1000)
    // }
    // componentDidUpdate(){
    //     console.log("component has been updated")
    // }
    // componentWillUnmount(){
    //     console.log("componet has been unmounted")
    //     clearInterval(this.timer)
    // }
    render(){
        return (<div>
            <h1>
                {this.props.name}
            </h1>
            <h2>
                {this.props.location}
            </h2>
            {/* <h1>
                {this.state.personaldetails.name}
            </h1>
            <h1>
                {this.state.personaldetails.rollno}
            </h1>
            <h1>
                {this.state.count}
            </h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Increment Button</button> */}
        </div>)
    }
}
export default UserClass