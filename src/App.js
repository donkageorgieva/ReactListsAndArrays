import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/UserInput';
import Validate from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    values: {
      textLength: 0,
      enteredText: '',
   
    }
  
    
  }

  calculateTextLength = (e) => {
    const newValues = {...this.state.values}
    newValues.textLength = e.target.value.length;
    newValues.enteredText = e.target.value;
  this.setState({values: newValues});

 
  }
  deleteChar = (id) => {
    const currentCharacters =[... this.state.values.enteredText ];
    const indexOfChosenChar = currentCharacters.indexOf(id);
    const chosenChar = currentCharacters[indexOfChosenChar];
    const copiedData = {... this.state.values};
 
    copiedData.enteredText =  currentCharacters.filter(currChar => {
   return currChar  != chosenChar;
    } )
    
   this.setState({values: copiedData})
   


  }
  

  render() {
  

    
 

  
    return (
   
      <div className="App">
        <Input  showLength={this.calculateTextLength} length={this.state.values.textLength} value={this.state.values.enteredText}/> 
        <Validate lngth={this.state.values.textLength} />
        <CharComponent letter = {this.state.values.enteredText[0]} id={this.state.values.enteredText[0]}  click={this.deleteChar.bind(this, this.state.values.enteredText[0])}/>
        <CharComponent letter = {this.state.values.enteredText[1]}  id={this.state.values.enteredText[1]}  click={this.deleteChar.bind(this, this.state.values.enteredText[1])} />
        <CharComponent letter = {this.state.values.enteredText[2]}  id={this.state.values.enteredText[2]}  click={this.deleteChar.bind(this, this.state.values.enteredText[2])}/>

        
       
     
  
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
