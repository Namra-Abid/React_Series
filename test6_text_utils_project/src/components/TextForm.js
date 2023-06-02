import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter Text Here');// by default value is in round bracket
    const HandleUpClick =()=>{
        console.log('Upper Case got clicked '+text);
        setText('You have clicked on handle up click');
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const HandeOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value);
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
