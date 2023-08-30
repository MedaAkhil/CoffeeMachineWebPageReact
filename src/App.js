import { 
  BiCoffee,
} from "react-icons/bi";
import { useState } from "react";

import './App.css';

function App() {
  const [coffeeType, setCoffeeType] = useState('');
  const [cupType,setCupType] = useState('');
  const costPerMl=1;

  return (
    <div className="App">
      <header className="App-header">
        <p><BiCoffee />    Coffee Machine</p>
        <p>Have a good coffee</p>
      </header>
      <section className="coffeeshop">
        <img src={require('./images/coffee-shop.png')}></img>
      </section>
      <section className="bottompannel">
        <div className="bottompannelmenu">
          <h1>Choose Your Coffee</h1>
          <p>Select your favorite type of coffee:</p>

          <select id="coffeeDropdown" value={coffeeType} onChange={(v)=>setCoffeeType(v.target.value)}>
            <option value="espresso">Espresso</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="latte">Latte</option>
            <option value="americano">Americano</option>
            <option value="mocha">Mocha</option>
            <option value="macchiato">Macchiato</option>
          </select>
        </div>
        <div className="bottompannelcup">
          <button value={cupType} onClick={() => setCupType(100)}><img className="img1" src={require('./images/coffee-cup.png')}></img></button>
          <button value={cupType} onClick={() => setCupType(200)}><img className="img2" src={require('./images/coffee-cup.png')}></img></button>
          <button value={cupType} onClick={() => setCupType(300)}><img className="img3" src={require('./images/coffee-cup.png')}></img></button>
        </div>
      </section>
    </div>
    
  );
}

export default App;
