import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Calculator = () => {
  let [result, setResult] = useState("");
  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  console.log(result);

  const handleclick = (e) => {
    setResult(result.concat(e.target.className));
  };

  const calculate = () => {
    result = eval(result).toString();
    console.log(result);
    if (result.includes(".")) {
      result = +eval(result);
      setResult(result);
    } else {
      setResult(eval(result).toString());
    }
    toast(` The result is ${result} `);
  };
  return (
    <div className="main">
      <div className="container">
        <h1>Smart Calculator</h1>
        <input
          type="text"
          value={result}
          style={{ width: "fit-content", backgroundColor: "transparent" }}
        />
        <div className="keypad">
          <button onClick={clear} className="Btn1">
            AC
          </button>
          <button onClick={backspace}>C</button>
          <button onClick={handleclick} className="/">
            /
          </button>
          <button onClick={handleclick} className="7">
            7
          </button>
          <button onClick={handleclick} className="8">
            8
          </button>
          <button onClick={handleclick} className="9">
            9
          </button>
          <button onClick={handleclick} className="*">
            *
          </button>
          <button onClick={handleclick} className="4">
            4
          </button>
          <button onClick={handleclick} className="5">
            5
          </button>
          <button onClick={handleclick} className="6">
            6
          </button>
          <button onClick={handleclick} className="-">
            -
          </button>
          <button onClick={handleclick} className="1">
            1
          </button>
          <button onClick={handleclick} className="2">
            2
          </button>
          <button onClick={handleclick} className="3">
            3
          </button>
          <button onClick={handleclick} className="+">
            +
          </button>
          <button onClick={handleclick} className="0">
            0
          </button>
          <button onClick={handleclick} className=".">
            .
          </button>
          <button onClick={calculate} className="Btn2">
            =
            <ToastContainer />
          </button>
        </div>
      </div>
      <div className="roller">
        <span id="rolltext">
          <h2>Thank You for Visiting</h2>
          <br />
          <h2>Designed By Vivek Sai</h2>
          <br />
        </span>
      </div>
    </div>
  );
};

export default Calculator;
