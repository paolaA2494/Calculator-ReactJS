import React, { Component } from "react";
import './Button.css';

class ClearButton extends Component {
  acOperator = val => {
        return !isNaN(val) || val === "." || val === "*" || val === "/" || val === "-" || val === "+" || val === "=";
 }

  render() {
    return( 
      <div 
        className={`clear-btn ${this.acOperator
            (this.props.children)? "" : "operator2"}`}
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearButton;