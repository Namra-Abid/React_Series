import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter Text Here');
    const HandleUpClick =()=>{
        console.log('Upper Case got clicked ');

    }
    const HandeOnChange=()=>{
        console.log('on change')
    }
    //text="new text"  // wrong way to change state
   // setText("New text"); // correct way to change  state
   
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={HandeOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={HandleUpClick}>Convert to Upper Case</button>

        </div>
    )
}
