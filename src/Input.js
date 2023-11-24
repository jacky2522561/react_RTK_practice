import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addItem } from "./store";
const Input = () =>{
    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const handleClick =() =>{
        dispatch(addItem(input));
        setInput('');
    }
    const handleChange =(e) =>{
        setInput(e.target.value);
    }
    return(
        <div>
            <input onChange={handleChange} value={input} />
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Input;