import React, { useState } from 'react'
import Heading from './Heading'
import TextArea from './TextArea'
import ButtonContainer from './ButtonContainer'
import Preview from './Preview'
import Counter from './Counter'

function App() {

  const [textValue, setTextValue] = useState("Enter or paste your text");
  const [previewValue, setPreviewValue] = useState();
  const [characterCount, setCharacterCount] = useState('0');
  const [wordCount, setwordCount] = useState('0');

  const btnValue = (myValue)=>{
    
    let updatedValue;

    if(myValue==='Uppercase'){
      updatedValue = textValue.toUpperCase();
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Lowercase'){
      updatedValue = textValue.toLowerCase();
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Capitalise'){
      updatedValue = textValue.charAt(0).toUpperCase() + textValue.slice(1);
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Trim'){
      updatedValue = textValue.trim();
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Bold'){
      updatedValue = textValue.bold();
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Italic'){
      updatedValue = textValue.italics();
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Underline'){
      updatedValue = `<u>${textValue}</u>`;
      setPreviewValue(updatedValue);   
    }
    else if(myValue==='Remove Extra Space'){
      updatedValue = textValue.split(/[ ]+/).join(" ");
      setPreviewValue(updatedValue);   
    }
    else{
      updatedValue = "";
      setPreviewValue(updatedValue);   
    }
  }

  const handleCount = ()=>{
    let characterCount =  textValue.trim().split('').filter((item)=>item!=' ').length;
    setCharacterCount(characterCount);

    let wordCount = textValue.trim().split(/\s+/).length;
    setwordCount(wordCount);
  }


  return (
    <>
     <div className="container-fluid" id='main_container'>
      <div className="container">
        <Heading myHeading="Text Cleaner: Text Cleaner, Text Formatter Online"/>
        <TextArea setTextValue={setTextValue} textValue={textValue} handleCount={handleCount}/>
        <ButtonContainer btnValue={btnValue}/>
        <Counter characterHeading="Characters" wordHeading="Words" characterCount={characterCount} wordCount={wordCount} />
        <Preview PreviewHeading="Preview" previewValue={previewValue}/>
      </div>
     </div>
    </>
  )
}

export default App
