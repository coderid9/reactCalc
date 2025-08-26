import { useState } from "react";

function Layout() {
  const [result,setResult]=useState(null);
  const [calculation,setCalculation]=useState("");

  const hadleCalc = ()=>{
    try {
      setResult(eval(calculation));
    } catch (error) {
      alert("please Enter valid calulation")
    }
  }

  return (
    <div id="calc">
      <div className="display">
        <p className="calculation">{calculation}</p>
        <p className="result">{result}</p>
      </div>
      <div className="calc-buttons">
        <button className="clean" onClick={()=>{
          setCalculation("")
          setResult(null)
          }}>Clean</button>
        <button className="operator" onClick={()=>setCalculation(prev=>prev+"/")}>/</button>
        <button className="operator" onClick={()=>setCalculation(prev=>prev+"*")}>X</button>
        <button className="operator" onClick={()=>setCalculation(prev=>prev+"-")}>-</button>

        <button onClick={()=>setCalculation(prev=>prev+"7")}>7</button>
        <button onClick={()=>setCalculation(prev=>prev+"8")}>8</button>
        <button onClick={()=>setCalculation(prev=>prev+"9")}>9</button>
        <button className="operator" onClick={()=>setCalculation(prev=>prev+"+")}>+</button>

        <button onClick={()=>setCalculation(prev=>prev+"4")} >4</button>
        <button onClick={()=>setCalculation(prev=>prev+"5")} >5</button>
        <button onClick={()=>setCalculation(prev=>prev+"6")} >6</button>
        <button onClick={()=>setCalculation(prev=>prev+"%")}  className="operator">%</button>

        <button onClick={()=>setCalculation(prev=>prev+"1")}>1</button>
        <button onClick={()=>setCalculation(prev=>prev+"2")}>2</button>
        <button onClick={()=>setCalculation(prev=>prev+"3")}>3</button>
        <button onClick={()=>setCalculation(prev=>prev.slice(0,[prev.length-1]))} className="cut">x</button>

        <button onClick={()=>setCalculation(prev=>prev+".")}>.</button>
        <button onClick={()=>setCalculation(prev=>prev+"0")}>0</button>
        <button className="equal" onClick={()=>hadleCalc()}>=</button>
      </div>
    </div>
  );
}

export default Layout;
