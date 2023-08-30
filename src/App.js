import { 
  BiCoffee,
} from "react-icons/bi";
import { useState,
  useEffect
 } from "react";
import './App.css';





function App() {


  const [percentage, setPercentage] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);
  const [showPowerButton, setShowPowerButton] = useState(true);
  const [netCost, setNetCost] = useState(''); 
  const [usrAmount,setUsrAmount] =useState();
  const [coffeeType, setCoffeeType] = useState('');
  const [cupType,setCupType] = useState('');
  useEffect(() => {
    let interval;
  
    if (isBrewing) {
      interval = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        } else {
          setIsBrewing(false);
        }
      }, 40);
    } else {
      clearInterval(interval);
    }
  
    return () => clearInterval(interval);
  }, [percentage, isBrewing]);
  
  const handleStartButtonClick = () => {
    setIsBrewing(true);
    setNetCost(coffeeCost[coffeeType]*cupType);
  };
  
  var coffeeCost = {
    espresso:2,
    cappuccino:9,
    latte:3,
    americano:5,
    mocha:7,
    macchiato:6,
  }
  const handleusertrans1 = () =>{
    setNetCost(0);
    setCupType(100);
    setNetCost(coffeeCost[coffeeType]*cupType);
  }
  const handleusertrans2 = () =>{
    setNetCost(0);
    setCupType(200);
    setNetCost(coffeeCost[coffeeType]*cupType);
  }
  const handleusertrans3 = () =>{
    setNetCost(0);
    setCupType(300);
    setNetCost(coffeeCost[coffeeType]*cupType);
  }

  const hndlePowerButtonClick = () =>{
    if (usrAmount>netCost){
      setShowPowerButton(false);
      setNetCost(handleStartButtonClick);
    }
    

  }
  return (
    <div className="App">
      <header className="App-header">
        <p><BiCoffee />    Coffee Machine</p>
        <p>Have a good coffee</p>
      </header>

      

      <section className="coffeeshop">
        <div>
          <img className="coffeeShop" src={require('./images/coffee-shop.png')}></img>
        </div>
        <div className="coffeemch">
          <img  src={require('./images/coffee-machine.png')}></img>
        </div>
        <div className="billDiv">
          <input value={usrAmount} onChange={(v)=>setUsrAmount(v.target.value)} placeholder="Pay Your money"></input>
          <h4>Your Bill:{netCost}</h4>
          <h4>Your Change:</h4>
        </div>
      </section>
      <section className="bottompannel">
        <div className="bottompannelmenu">
          <h1>Choose Your Coffee</h1>
          <p>Select your favorite type of coffee:</p>
          <select id="coffeeDropdown" value={coffeeType} onChange={(v)=>setCoffeeType(v.target.value)}>
          <option value="">Choose Coffee Type</option>
            <option value="espresso">Espresso - 2Rs/ml</option>
            <option value="cappuccino">Cappuccino - 9Rs/ml</option>
            <option value="latte">Latte - 3Rs/ml</option>
            <option value="americano">Americano - 5Rs/ml</option>
            <option value="mocha">Mocha - 7Rs/ml</option>
            <option value="macchiato">Macchiato - 6Rs/ml</option>
          </select>
          <p>{coffeeType }cost:{coffeeCost[coffeeType]}</p>
        </div>
        <div className="tea-making-animation">
      <div className="circle">
        <div className={`mask full ${isBrewing ? 'brewing' : ''}`}>
          <div className="fill"></div>
        </div>
        <div className={`mask half ${isBrewing ? 'brewing' : ''}`}>
          <div className="fill"></div>
        </div>
        <div className="inside-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
        <div className="redbtndiv">
         <button className="redbut" onClick={hndlePowerButtonClick}>{showPowerButton &&<img className="pwbt" src={require('./images/power-on.png')}></img>}</button>
          
        </div>
      
    </div>
        <div className="bottompannelcup">
          <button className="cupbtn" onClick={handleusertrans1}><span>100ml</span><img className="img1" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" onClick={handleusertrans2}><span>200ml</span><img className="img2" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" onClick={handleusertrans3}><span>300ml</span><img className="img3" src={require('./images/coffee-cup.png')}></img></button>
        </div>
      </section>
    </div>
  );
}


export default App;