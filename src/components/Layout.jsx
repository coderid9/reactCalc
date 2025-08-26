function Layout() {
  return (
    <div id="calc">
      <div className="display">
        <p className="calculation"></p>
        <p className="result">00</p>
      </div>
      <div className="calc-buttons">
        <button className="clean">Clean</button>
        <button className="operator">/</button>
        <button className="operator">X</button>
        <button className="operator">-</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator">+</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operator">%</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="cut">x</button>

        <button>.</button>
        <button>0</button>
        <button className="equal">=</button>
      </div>
    </div>
  );
}

export default Layout;
