import React, {useState} from 'react'


export default function FormShaktimaan(props) {
  const [text, setText] = useState('');

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleClick = ()=> {
    console.log("Text was clicked");
    setText('');
  }
  
  const handleUpClick = ()=> {
    console.log("Text was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case", "Success")
  }
  
  const handleLowClick = ()=> {
    console.log("Text was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case", "Success")
  }

  const handleOnChange = (event)=> {
    console.log("This is after change");
    setText(event.target.value);
  }

  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
}

const reversed = () => {
  let splitWord = text.split("");

  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  let newText = joinedWords

  setText(newText);
};

const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied", "Success")
}
  
  return (
    <>
      <div>
        <h1 style={{color: props.mode==='light'?'black':'grey'}}>{props.head}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
    </div>
    
    <button className="btn btn-success mx-2 my-2" onClick={handleClick} >Reset text to default</button>
    <button className="btn-bt-primary mx-2 my-2" style={{backgroundColor:'blue', color:'white'}} onClick={handleUpClick} >Convert to Upper text</button>
    <button className="btn-btnn-primary mx-2 my-2" style={{backgroundColor:'blue', color:'white'}} onClick={handleLowClick} >Convert to Lower text</button>
        <button className="btn-bt-primary mx-2 my-2" style={{backgroundColor:'grey', color:'yellow'}} onClick={handleCopyClick} >Copy the text</button>
    <button className="btn-btnn-primary mx-2 my-2" style={{backgroundColor:'blue', color:'white'}} onClick={handleExtraSpaces} >Remove extra spaces</button>
    <button className="btn-btnn-primary mx-2 my-2" style={{backgroundColor:'blue', color:'white'}} onClick={reversed} >Reverse text</button>
    <button type="submit" className="btn-btnn-primary mx-3 my-3" style={{backgroundColor:'green', color:'white'}} onClick={speak} >Speech</button>
    </div>
    <div className="my-3"> 
         <h2 style={{color: props.mode==='light'?'black':'grey'}}>Count of words - {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</h2>
         <h2 style={{color: props.mode==='light'?'black':'grey'}}>Count of characters - {text.length}</h2>
    </div>
    </>
  )
}
