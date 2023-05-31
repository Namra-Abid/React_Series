import React, { Component } from 'react'

class ChangeText2 extends Component {
    constructor(){
        super()
        this.state={
            message: 'Example Text Area'
        }
    }
        ChangeMessage(){
            if (this.state.message==='Example Text Area')
            { console.log("if")
            this.setState({
                message:'Please write your feedback here !'
                
            })}
            else{ console.log("else")
                this.setState({
                    message:'Example Text Area'
                })
            }
        }

    
    render() {
        return (
            <div className='mb-3'>
                <h1>{this.state.message}</h1>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
                <br></br>
                <button onClick={()=> this.ChangeMessage()}> Change Heading Again and Again</button>
            </div>
        )
    }
}
export default ChangeText2