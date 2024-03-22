
// import './App.css';

import Profils from "./components/Profils";
import Data from "./components/Data";
import downArrow from "../src/icons/downArrow.png";
import addCardImg from "../src/icons/addCardImg.png";





function App() {
  return (
   
    <div className="App">
    <div className="container-heder">
    <h1>Business Card</h1>
      <div className="head">
      <div className="head-chiled">
      <p><a href="">Livileads</a></p>
      <img src={downArrow} alt="" className="curser"/>
      <p>Business Card</p>
      </div>
      <img src={addCardImg} alt=""/>

      </div>
    </div>
    <div className="allFile">

    

    <Profils
    bgImage = {Data[0].bgImage}
    pfImage = {Data[0].pfImage}
    profileName = {Data[0].profileName}
    profileRole = {Data[0].profileRole}
    />
    
    <Profils
    bgImage = {Data[1].bgImage}
    pfImage = {Data[1].pfImage}
    profileName = {Data[1].profileName}
    profileRole = {Data[1].profileRole}
    />
   
    <Profils
    bgImage = {Data[2].bgImage}
    pfImage = {Data[2].pfImage}
    profileName = {Data[2].profileName}
    profileRole = {Data[2].profileRole}
    />

    <Profils
    bgImage = {Data[3].bgImage}
    pfImage = {Data[3].pfImage}
    profileName = {Data[3].profileName}
    profileRole = {Data[3].profileRole}
    />
    <Profils
    bgImage = {Data[4].bgImage}
    pfImage = {Data[4].pfImage}
    profileName = {Data[4].profileName}
    profileRole = {Data[4].profileRole}
    />

   <Profils
    bgImage = {Data[5].bgImage}
    pfImage = {Data[5].pfImage}
    profileName = {Data[5].profileName}
    profileRole = {Data[5].profileRole}
    />


    </div>
    </div>

    
  );
}

export default App;
