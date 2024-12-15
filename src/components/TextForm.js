// import React from 'react'
// import {useState} from 'react'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here');

  const handleUpClick = ()=>{
    // console.log("Upper case was clicked");
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);   //text = newtext => wrong way to update the text we have to use setText function to upadte
    props.showAlert("Converted to Upper Case!", "success");
  }   //this is how we handle events

  const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);  //jo text already tha + new text i.e.user is entering at run time
    //this enable us to type in our text area
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "warning");
  }

  const handleCopyClick = ()=>{
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
    props.showAlert("Text copied to the clipboard!", "info");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!", "success");
  }

  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className=" mb-3"> {/*mb-3 means margin bottom*/} 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters </p>
      <p>{0.008 * (text.split(" ").length-1)} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
