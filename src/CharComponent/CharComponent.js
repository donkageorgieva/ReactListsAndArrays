import React from 'react';
import './CharComponent.css';

const charComponent = (props)=>{
    return(
        <li className = 'char-component' key = {props.id} onClick = {props.click}>
           <p>{props.letter}</p> 


    </li>
    )
  

}
export default charComponent;