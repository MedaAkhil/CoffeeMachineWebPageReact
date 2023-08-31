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
  const [netCost, setNetCost] = useState(); 
  const [usrAmount,setUsrAmount] = useState();
  const [coffeeType, setCoffeeType] = useState();
  const [cupType,setCupType] = useState();
  const [elertMsg,setElertMsg] = useState();
  const [paymentPage, setPaymentPage] = useState();
  const [rs50coin,setrs50coin] = useState();
  const [rs100coin,setrs100coin] = useState();
  const [rs1000coin,setrs1000coin] = useState();
  const [loadingPage, setLoadingPage] = useState();
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
    setCupType(100);
    funsetnetcost();
  }
  const handleusertrans2 = () =>{
    setCupType(200);
    funsetnetcost();
  }
  const handleusertrans3 = () =>{
    setCupType(300);
    funsetnetcost();
  }
  const funsetnetcost = () =>{
    setNetCost(coffeeCost[coffeeType]*cupType);
  }

  const hndlePowerButtonClick = () =>{
    setShowPowerButton(false);
    setIsBrewing(true);
  }
  const handlePayButton = () => {
    if (rs50coin && rs100coin && rs1000coin){
      setUsrAmount((rs50coin*50)+(rs100coin*100)+(rs1000coin*1000));
    } else if(rs50coin && rs100coin ){
      setUsrAmount((rs50coin*50)+(rs100coin*100));
    } else if (rs50coin){
      setUsrAmount((rs50coin*50));
    }
    if (usrAmount>=netCost){
      setShowPowerButton(true);
      setLoadingPage(true);
      setPaymentPage(false);
    }
    
  }
  const handleProceedToPayButton = () => {
    setNetCost(coffeeCost[coffeeType]*cupType);
    setPaymentPage(true);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p><BiCoffee />    Coffee Machine</p>
        <p>Have a good coffee</p>
      </header>
      {/* <p>usrAmount{usrAmount}:
       50:{rs50coin} 100:{rs100coin} 1000:{rs1000coin}
       </p> */}
      

      <section className="coffeeshop">
        <div>
          <img className="coffeeShop" src={require('./images/coffee-shop.png')}></img>
        </div>
        <div className="coffeemch">
          <img  src={require('./images/coffee-machine.png')}></img>
        </div>
        <div className="billDiv">
          
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
          <p>{coffeeType }:cost:{coffeeCost[coffeeType]} cuptype:{cupType}</p>
        </div>
        <button className="homepaybtn" onClick={handleProceedToPayButton}>Proceed to pay</button>
        <div className="bottompannelcup">
          <button className="cupbtn" onClick={handleusertrans1}><span>100ml</span><img className="img1" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" onClick={handleusertrans2}><span>200ml</span><img className="img2" src={require('./images/coffee-cup.png')}></img></button>
          <button className="cupbtn" onClick={handleusertrans3}><span>300ml</span><img className="img3" src={require('./images/coffee-cup.png')}></img></button>
        </div>
      </section>
      {elertMsg &&<div className="alertMsg">
    {elertMsg}<p>yout have an elert message</p><br />
    <button>OK</button>
    </div>}
    {paymentPage && coffeeType && cupType &&<div className="paymentPage">
    {elertMsg}<h1>Payments</h1><br />
    <div>
    
          <h4>Your Bill Amount:{netCost}</h4>
          <h4>Amount:{usrAmount}</h4>
    </div>

          <div className="tea-making-animation">
            <div className="currency">
            <div className="noteinput"><img src={require('./images/India_50_INR,_MG_series,_2011,_obverse.jpg')}></img><input className="currencyinput" type="number" value={rs50coin} onChange={(v) => setrs50coin(v.target.value)}></input></div>
            <div><img src={require('./images/India_new_100_INR,_Mahatma_Gandhi_New_Series,_2018,_obverse.png')}></img><input className="currencyinput" type="number" value={rs100coin} onChange={(v) => setrs100coin(v.target.value)}></input></div>
            <div><img src={require('./images/India_1000_INR,_MG_series,_2006,_obverse.jpg')}></img><input className="currencyinput" type="number" value={rs1000coin} onChange={(v) => setrs1000coin(v.target.value)}></input></div>
            </div>
      
    </div>
    <button onClick={handlePayButton}>Pay</button>
      </div>}
       {true && <section className="powerButtonAndLoadingButton">
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
         {showPowerButton && <button className="redbut" onClick={hndlePowerButtonClick}><img className="pwbt" src={require('./images/power-on.png')}></img></button>}
          
        </div>
       </section>}
      
    </div>
  );
}


export default App;