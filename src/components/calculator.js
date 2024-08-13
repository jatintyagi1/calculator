// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay(evaluate(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  const evaluate = (expression) => {
    const operators = expression.split(/[\d.]+/).filter(Boolean);
    const operands = expression.split(/[+\-*/]/).map(Number);
    
    let result = operands[0];
    
    for (let i = 1; i < operands.length; i++) {
      switch (operators[i - 1]) {
        case '+':
          result += operands[i];
          break;
        case '-':
          result -= operands[i];
          break;
        case '*':
          result *= operands[i];
          break;
        case '/':
          result /= operands[i];
          break;
        default:
          break;
      }
    }
    
    return result;
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" className="calculator-display-input" value={display} disabled />
      </div>
      <div className="calculator-keys">
        {['C', 'DEL', '%', '/'].map((item) => (
          <button key={item} className="key" onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
        {[7, 8, 9, '*'].map((item) => (
          <button key={item} className="key" onClick={() => handleButtonClick(item.toString())}>{item}</button>
        ))}
        {[4, 5, 6, '-'].map((item) => (
          <button key={item} className="key" onClick={() => handleButtonClick(item.toString())}>{item}</button>
        ))}
        {[1, 2, 3, '+'].map((item) => (
          <button key={item} className="key" onClick={() => handleButtonClick(item.toString())}>{item}</button>
        ))}
        {['0', '.', '='].map((item) => (
          <button key={item} className="key" onClick={() => handleButtonClick(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
