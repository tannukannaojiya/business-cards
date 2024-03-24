import React from 'react';
import eye from "../Images/eye-closed.svg";
import "./Logins.css";
import logs from "../Logo/logo.svg";
import lock from "../Images/lock.svg";
import mail from "../Images/mail.svg";
import google from "../Logo/google.png";
import facebook from "../Logo/facebook.png";

export default function Form() {
  return (
    <section className='container'>
     <div className='registation'>
        <div className='col-1'>
        <div className="heading">
        <h1>Hello,<br></br>
        Welcome back to </h1>
        <span className='first'>LIVI</span> <span className='second'>LEADS</span>
        <p>Enter your details and start journey with us</p>
        </div>
           {/* <div className='col-1-imag'><img src={svg} alt='imagess' className='background-image'/></div> */}
            
        </div>
        
        <div className='col-2'>
         <div className='col-2-imag'><img src={logs} alt='logos'/> </div>
        <h1 className='login'>Log in</h1>
            <div className='email-container'>
            <img src={mail} alt='mail'/>
            <input type='text' placeholder='Email' />
            </div>

            <div className='password-container'>
            <img src={lock} alt='lock' className='lock'/> 
            <input type='Password' placeholder='Password' className='passwordInput'/>
            <img src={eye} alt='eye' className='eye'/>
            </div>

           <div className='check-group'>
            <div className='check-box'>
            <input type='checkbox' className='checkbox'/>
              <label for='formcheck' className='text-check-lable'><small>Remember Me</small></label>
              </div>
              <div className='forgot'>
                <small><a href="#">Forgot Password</a></small>
              </div>
            </div>

           <div className='hrr'>
           <hr/> <span className='orr'>or</span> <hr/>
           </div>
       
        <button className='largLoginBtn'>Log In</button>
        
        <div className='othentication-1'>
        <div className='google-1'>
        <img src={google} alt='logo' className="google-log"/>
        <button className='googleimg'>Google</button>   
        </div> 
        <div className='facebook-1'>
        <img src={facebook} alt='facebook'/>
        <button className='facebockimg'>Facebook</button> 
        </div>
        </div>

        <p>Don’t have an account ? <a href='#'>Register</a></p>
     </div>
      </div>
    </section>
   
  );
}
