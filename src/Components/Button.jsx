import React, {Component} from 'react';
import './Button.css';


class Button extends Component {
  isOperator = val => {
    return !isNaN(val)  || val === "=" || val === "AC";
  }

  equalOperator = val => {
    return !isNaN(val) || val === "." || val === "*" || val === "/" || val === "-" || val === "+" || val === "AC";
  }

  render(){
  return (
    <div 
        className={`button ${this.isOperator
        (this.props.children)? "" : "operator"}  ${this.equalOperator
            (this.props.children)? "" : "operator3"}`}
       onClick={() => this.props.handleClick(this.props.children)}
    >
        {this.props.children}
    </div>
    );
  }
}

export default Button;
