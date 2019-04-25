import React from 'react';
import TextEditor from './components/TextEditor'
import MarkDownPreviewer from './components/MarkDownPreviewer'
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      input : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  //method to set the internal state to what is being inputed
  handleChange(event){
    const {  value} = event.target 
    this.setState(
      { input: value}
    )

  }
  render(){
  return (
    <div className="App">
      < TextEditor  value={this.state.input} handleChange={this.handleChange}/>
      < MarkDownPreviewer input={this.state.input}/>  
    </div>
  );
}
}
export default App;
