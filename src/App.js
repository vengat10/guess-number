import "./App.css";
import { useState } from "react";
import Result from "./component/Result";

const systemNo = Math.floor(Math.random() * 10) + 1;
function App() {
  const [term, setTerm] = useState("");

  const handlerChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess the correct Number 1 to 10 
        </label>
      </div>
      <input type="text" name="term" id="term" onChange={handlerChange} />
      <Result systemNo={systemNo} term={term} />
    </div>
  );
}

export default App;
