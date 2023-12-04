import { useState } from "react";
import "./App.css";

function App() {
  const [expresion, setExpresion] = useState("");

  const agregarExpresion = (e) => {
    setExpresion(expresion + e.target.innerText);
  };

  const cancelarExpresion = () => {
    setExpresion("");
  };

  const resultadoExpresion = () => {
    try {
      const resultado = eval(expresion);
      if (isNaN(resultado) || !isFinite(resultado)) {
        throw new Error("Expresión no válida");
      }
      setExpresion(resultado.toString());
    } catch (error) {
      setExpresion("Error");
      console.error(error.message);
    }
  };

  return (
    <main className="cuerpo">
      <h1 className="titulo">🖩 Calculadora</h1>
      <section className="calculadora">
        <header className="cal-header">{expresion}</header>
        <button onClick={cancelarExpresion} className="cal-cancelar">
          AC
        </button>
        <button onClick={agregarExpresion}>/</button>
        <button onClick={agregarExpresion}>*</button>
        <button onClick={agregarExpresion}>1</button>
        <button onClick={agregarExpresion}>2</button>
        <button onClick={agregarExpresion}>3</button>
        <button onClick={agregarExpresion}>+</button>
        <button onClick={agregarExpresion}>4</button>
        <button onClick={agregarExpresion}>5</button>
        <button onClick={agregarExpresion}>6</button>
        <button onClick={agregarExpresion}>-</button>
        <button onClick={agregarExpresion}>7</button>
        <button onClick={agregarExpresion}>8</button>
        <button onClick={agregarExpresion}>9</button>
        <button onClick={resultadoExpresion} className="cal-igual">
          =
        </button>
        <button onClick={agregarExpresion} className="cal-cero">
          0
        </button>
        <button onClick={agregarExpresion}>.</button>
      </section>
    </main>
  );
}

export default App;
