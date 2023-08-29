import React,{useState} from 'react'


export default function Textform(props) {
const handleUppercase = ()=>{
  let newText = text.toUpperCase();
  setText(newText);
}
const handleLowercase = ()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClearspace = ()=>{
  let newText = ' ';
  setText(newText);
}
const handleClearspeak = ()=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handleOnChange = (event)=>{
  setText(event.target.value);
}

  const[text,setText] = useState('');
  return (
<>
<div>
 <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" value ={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button type="button" className="btn btn-success mx-2" onClick={handleUppercase}>Convert to Upper Case</button>
<button type="button" class="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lower Case</button>
<button type="button" class="btn btn-warning mx-2" onClick={handleClearspace}>Clear the Space</button>
<button type="button" class="btn btn-info" onClick={handleClearspeak}>Speak</button>

</div>
<div className='container my-3'>
  <h2>Your Text Summery</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes reads</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
