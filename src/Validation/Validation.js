import React from 'react';

const validation = (props) => {
    let validate;
    if (props.lngth > 5){
        validate = ' Text too long!'
    } else {
      validate = 'Text too short!'
    }
    return(
        <div textLength = {props.lngth}> 
        <h1>   {validate}</h1>
     
        </div>
    )
   
}

export default validation;