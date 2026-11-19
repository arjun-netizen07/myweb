import {useState} from 'react';

function TextConverter()
{
    const [text,setText]= useState("");
    const handelUpperCase= () => {setText(text.toUpperCase())}
    const handelLowerCase= () => {setText(text.toLowerCase())}
    return(
        <div>
            <textarea value={text} onChange ={(e)=>setText (e.target.value)}/>
            <button onClick={handelUpperCase}> convert to uppercase</button>
            <button onClick={handelLowerCase}> convert to LowerCase</button>
        </div>
        
    );
}
export default TextConverter();