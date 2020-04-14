import React, {Component} from 'react';
import Button from './Button';
import Input from './Input';
import ClearButton from './ClearButton';
import './App.css'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  
  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };


 
  render(){
  return (
    <>
    <h1>Calculadora</h1>
    <div className="App">
      <div className="calculator">
      <div className="row">
      <Input>{this.state.input}</Input>
      </div>
      <div className="row">
      <ClearButton handleClear={this.clearInput}>AC</ClearButton>
        <Button handleClick={this.divide}>/</Button>
        <Button handleClick={this.multiply}>*</Button>
      </div>
      <div className="row">  
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.subtract}>-</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.add}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.addDecimal}>.</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addZeroToInput}>0</Button>
        <Button handleClick={this.evaluate}>=</Button>
        </div>
      </div>
    </div>
    </>
    );
  }
}

export default App;
