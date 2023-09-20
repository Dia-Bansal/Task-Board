// import React, { useState } from 'react';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(input));
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput(input + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <div className="input">{input}</div>
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <div className="row">
//           <button onClick={() => handleButtonClick('7')}>7</button>
//           <button onClick={() => handleButtonClick('8')}>8</button>
//           <button onClick={() => handleButtonClick('9')}>9</button>
//           <button onClick={() => handleButtonClick('/')}>&divide;</button>
//         </div>
//         <br/>
//         <div className="row">
//           <button onClick={() => handleButtonClick('4')}>4</button>
//           <button onClick={() => handleButtonClick('5')}>5</button>
//           <button onClick={() => handleButtonClick('6')}>6</button>
//           <button onClick={() => handleButtonClick('*')}>&times;</button>
//         </div>
//         <br/>
//         <div className="row">
//           <button onClick={() => handleButtonClick('1')}>1</button>
//           <button onClick={() => handleButtonClick('2')}>2</button>
//           <button onClick={() => handleButtonClick('3')}>3</button>
//           <button onClick={() => handleButtonClick('-')}>-</button>
//         </div>
//         <br/>
//         <div className="row">
//           <button onClick={() => handleButtonClick('0')}>0</button>
//           <button onClick={() => handleButtonClick('.')}>.</button>
//           <button onClick={() => handleButtonClick('=')}>=</button>
//           <button onClick={() => handleButtonClick('+')}>+</button>
//         </div>
//         <br/>
//         <div className="row">
//           <button onClick={() => handleButtonClick('C')} className="clear-button">
//             C
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistoryPopup, setShowHistoryPopup] = useState(false);
  const [scientificMode, setScientificMode] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculationResult = eval(input);
        setResult(calculationResult);

        // Save the calculation in the history
        setHistory([...history, `${input} = ${calculationResult}`]);

        // Limit history to the last 50 calculations
        if (history.length >= 50) {
          history.shift(); // Remove the oldest calculation
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const openHistoryPopup = () => {
    setShowHistoryPopup(true);
  };

  const closeHistoryPopup = () => {
    setShowHistoryPopup(false);
  };

  const toggleScientificMode = () => {
    setScientificMode(!scientificMode);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>&divide;</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>&times;</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('C')} className="clear-button">
            C
          </button>
          <button onClick={openHistoryPopup}>View History</button>
        </div>
        {scientificMode && (
          <div className="row">
            <button onClick={() => handleButtonClick('sin(')}>sin</button>
            <button onClick={() => handleButtonClick('cos(')}>cos</button>
            <button onClick={() => handleButtonClick('tan(')}>tan</button>
            {/* Add more scientific functions */}
          </div>
        )}
        <div className="row">
          <button onClick={toggleScientificMode}>
            {scientificMode ? 'Switch to Normal' : 'Switch to Scientific'}
          </button>
        </div>
      </div>
      {showHistoryPopup && (
        <div className="history-popup">
          <h2>Calculation History</h2>
          <ul>
            {history.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
          <button onClick={closeHistoryPopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Calculator;
