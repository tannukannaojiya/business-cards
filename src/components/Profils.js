import React from 'react';
import "./Profile.css";
import socialIcon from "../icons/Group-socalicon.jpg";
import aboutIcon from "../icons/about.png";
import downArrow from "../icons/downArrow.png"
import locationIcon from "../icons/location.png";
import officeIcon from "../icons/office.png";
import cornerIcon from "../icons/Group.png";




const Profils = (props) => {
  return (
    
    <div>
    <div className='container-profile'>
    <div className='card'>
    <div className='profileBackgroundImag'>
      <img src={props.bgImage} alt = ""  className="Imagess" />
      <img src={cornerIcon} alt='' className="Iconss" />
      
    </div>
   
    <div className='profileImag'>
    <img src={props.pfImage} alt = ""  className="profileImages"/>
    </div>

    <div className='title'>
    <div className="profileName">{props.profileName}</div>
    <div className="profileRole">{props.profileRole}</div>
    </div>
    <div className='socialIcon'>
        <div className= "icons">
        <img src={socialIcon} alt = ""/>  
        </div>
    </div>
    <div className ="btn">
    <div className='button'><a href='#'>+Add to Contacts</a></div>
    </div>
    <div className='boxes'>
        <div className='about'>
        <img src={aboutIcon} alt=""className='aboutImg'/>
        <p>About</p> 
        <span> <img src={downArrow} alt="" className="arrow"/></span> 
        </div>

        <div className='address'>
        <img src={locationIcon} alt="" className='addressImg'/>
        <p>Adress</p>
        <span><img src={downArrow} alt=""/></span> 
        </div>

        <div className='company'>
        <img src={officeIcon} alt="" className='officeIconImg'/> 
        <p>Company</p> 
        <span><img src={downArrow} alt=""/></span> 
        </div>
    </div>

    </div>
      
    </div>
    </div>
  );
}

export default Profils;
