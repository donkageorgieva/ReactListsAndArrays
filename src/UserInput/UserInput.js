import React from 'react';

const input = (props) => {
    return (
        <div>
  <input type ='text' onChange = {props.showLength} value={props.value} /> 
        <p>Text Length: {props.length} characters</p>
        </div>
      
    )

}

export default input