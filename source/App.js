
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <h1 className="title"> Simple Calculator</h1>
      <div className="calculator">
        <input type="text" className="input" value={input} disabled />
        <div className="keypad">
          <button className="operator" onClick={handleClick} value="+">+</button>
          <button className="operator" onClick={handleClick} value="-">-</button>
          <button className="operator" onClick={handleClick} value="*">x</button>
          <button className="operator" onClick={handleClick} value="/">/</button>
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleClick} value="4">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handleClick} value="6">6</button>
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleClick} value="0">0</button>
          <button onClick={clearInput} className="clear" value="clear">Clear</button>
          <button onClick={calculate} className="equal" value="=">=</button>
        </div>
        <div className="result">
          <input type="text" className="output" value={result} disabled />
        </div>
      </div>
    </div>
  );
}

export default App;
