import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === '=' ? calculate() : handleClick(btn))}
            className={btn === '=' ? 'equals' : ''}
          >
            {btn}
          </button>
        ))}
        <button onClick={clear} className="clear">C</button>
      </div>
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default Calculator;
