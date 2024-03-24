import React from 'react';
import Data from './Data';
import addCardImg from "../icons/addCardImg.png";
import downArrow from "../icons/downArrow.png";
import Profils from "./Profils";

const AllCards = () => {
  return (
    <div className='main'>
     <div className="container-heder">
    <h1>Business Card</h1>
      <div className="head-1">
      <div className="head-chiled">
      <p><a href="">Livileads</a></p>
      <img src={downArrow} alt="" className="curser"/>
      <p>Business Card</p>
      <img src={downArrow} alt="" className="curser"/>
      
      <p>Add Card</p>
      </div>
      <img src={addCardImg} alt=""/>
      
      </div>
    </div>

    <div className="allFile">
    {
    Data.map((data) => <Profils
    bgImage = {data.bgImage}
    pfImage = {data.pfImage}
    profileName = {data.profileName}
    profileRole = {data.profileRole}
    />
    )
    }

    
    </div>
      
    </div>
  );
}

export default AllCards;
