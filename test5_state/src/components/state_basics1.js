import React, { Component } from 'react'

class ChangeColor extends Component {
    constructor(){
        super()
        this.state={
            message: 'Example Text Area'
        }
    }
        ChangeMessage(){
            
            this.setState({
                message:'Please write your feedback here !'
            })
        }

    
    render() {
        return (
            <div className='mb-3'>
                <h1>{this.state.message}</h1>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
                <br></br>
                <button onClick={()=> this.ChangeMessage()}> Change Heading Just One Time</button>
            </div>
        )
    }
}
export default ChangeColor