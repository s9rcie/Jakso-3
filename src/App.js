import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

function calculate(e) {
  e.preventDefault();

  const liters = bottles * 0.33;
  const grams = liters * 8 * 4.5;
  const burning = weight / 10;
  const gramsLeft = grams - (burning * time);

  let result = 0;

  if (gender === "male") {
    result = gramsLeft / (weight * 0.7);
  }
  
  else {
    result = gramsLeft / (weight * 0.6);
  }

  if (result < 0) {
    result = 0;
  }

  setResult(result.toFixed(2));

}

  return (
    <form onSubmit={calculate}>
      <h1 style={{color: "green"}}>Laske veren alkoholitaso</h1>

      <div>
        <label htmlFor="">Paino</label>
        <input type="number" class="textrow" step="1" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Pullot</label>
        <input type="number" class="textrow" step="1" value={bottles} onChange={e => setBottles(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Aika</label>
        <input type="number" class="textrow" step="1" value={time} onChange={e => setTime(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Sukupuoli</label>
        <input type="radio" name="sukupuoli" class="textrow" id="male" onChange={e => setGender(e.target.value)} defaultChecked />
        <label htmlFor="">Mies</label>
        <input type="radio" name="sukupuoli" class="textrow" id="female" onChange={e => setGender(e.target.value)} />
        <label htmlFor="">Nainen</label>
      </div>

      <div>
        <output>{result}</output>
      </div>

      <div>
        <button>Laske</button>
      </div>

    </form>
  );
}

export default App;
