import React from 'react';
import "./JobForm.css";
import rightArrow from "../icons/rightArrow.png";
import addIcon from "../icons/addIcon.png";

const JobForm = () => {
  return (
    <div>
    <div className="Jobform-container">
    <div className='jobform-heading'>
        <h1>Business Card</h1>
        <div className='jobform-heading-content'>
            <p><a href="">Livileads</a></p>
            <img src={rightArrow} alt='arrow' className='rightarrow'/>
            <p>Business Card</p>
            <img src={rightArrow} alt='arrow'/>
            <p>Add card</p>                
            
        </div>
    </div>
    <div className='head'>
        <h2>Create your first card</h2>
        <p className='head-paira'>Ready to design your card? Pick a field below to get started!</p>
    </div>
    <div className='addImage'>
    <h3>Add Image</h3>
        <div className='addImage-content'>
        <div className='addImage-1 fa'>
            <div className='fa-content'>
            <img src={addIcon} alt='icon'/>
            <p>Profile Picture</p>
            </div>
        </div>
        <div className='addImage-2 fa'>
            <div className='fa-content'>
            <img src={addIcon} alt='icon'/>
            <p>Cover Picture</p>
            </div>
        </div>
        </div>
    </div>

    <div className='addDetail'>
        <h3>Add employee details</h3>
        <div className='addDetail-colum'>
        <div className='colum-1'>
           <div className='colum-div'>
           <label>First Name</label>
            <input type='text' placeholder='First Name'/>
           </div>
            <div className='colum-div'>
            <label>Contact</label>
            <input type='text' placeholder='Contact'/>
            </div>
            <div className='colum-div'>
            <label>Company Name</label>
            <input type='text' placeholder='Company Name'/>
            </div>
            <div className='colum-div'>
            <label>LinkedIn</label>
            <input type='text' placeholder='LinkedIn'/>
            </div>
        </div>
        <div className='colum-2'>
        <div className='colum-div'>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name'/>
        </div>
        <div className='colum-div'>
            <label>Email</label>
            <input type='text' placeholder='Email'/>
        </div>
            <div className='colum-div'>
            <label>Job Title</label>
            <input type='text' placeholder='First Name'/>
            </div>
            <div className='colum-div'>
            <label>Twitter</label>
            <input type='text' placeholder='First Name'/>
            </div>
        </div>
        </div>
    </div>

    <div className='addressDetails'>
        <h3>Address Details</h3>
        <div className='addDetail-colum'>
        <div className='colum-1'>
        <div className='colum-div'>
            <label>Street</label>
            <input type='text' placeholder='Street'/>
        </div>   
        <div className='colum-div'>
            <label>State</label>
            <input type='text' placeholder='State'/>
        </div>  
        </div>

        <div className='colum-2'>
        <div className='colum-div'>
            <label>City</label>
            <input type='text' placeholder='City'/>
        </div>
        <div className='colum-div'>
            <label>Country</label>
            <input type='text' placeholder='Country'/>
        </div>
        </div>
        </div>
    </div>
    <div className='about-1'>
    <div className='colum-div'>
        <label>About</label>
        <textarea rows="5" cols="7" name="comment" placeholder='Type here...'/>
    </div>
    </div>
    
    <div className='jobFormBtn'>
        <button className='btn-1'>Create Card</button>
        <button className='btn-2'>Clear</button>
    </div>
    </div>
    </div>
  );
}

export default JobForm;
