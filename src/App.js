import { 
  BiCoffee,
} from "react-icons/bi";
import { useState } from "react";

import './App.css';

function App() {
  const [coffeeType, setCoffeeType] = useState('');
  const [cupType,setCupType] = useState('');
  var coffeeCost = {
    espresso:2,
    cappuccino:9,
    latte:3,
    americano:5,
    mocha:7,
    macchiato:6,
  }
  const [netCost, setNetCost] = useState(''); 
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
          <option value="">Choose Coffee Type</option>
            <option value="espresso">Espresso-2Rs/ml</option>
            <option value="cappuccino">Cappuccino-9Rs/ml</option>
            <option value="latte">Latte-3Rs/ml</option>
            <option value="americano">Americano-5Rs/ml</option>
            <option value="mocha">Mocha-7Rs/ml</option>
            <option value="macchiato">Macchiato-6Rs/ml</option>
          </select>
        </div>
        <div className="redbtndiv">
        <button className="redbut" onClick={()=> setNetCost(coffeeCost[coffeeType]*cupType)}><img className="pwbt" src={require('./images/power-on.png')}></img></button>
          <br /><h4>Your Bill:{netCost}</h4>
        </div>
        <div className="bottompannelcup">
          <button className="cupbtn" value={cupType} onClick={() => setCupType(100)}><span>100ml</span><img className="img1" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" value={cupType} onClick={() => setCupType(200)}><span>200ml</span><img className="img2" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" value={cupType} onClick={() => setCupType(300)}><span>300ml</span><img className="img3" src={require('./images/coffee-cup.png')}></img></button>
        </div>
      </section>
    </div>
    
  );
}

export default App;
