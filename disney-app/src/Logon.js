import React from 'react'
import  {useForm}  from 'react-hook-form'

import "./styles.css";

function Logon() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
      alert(JSON.stringify(data));
    };
  
    return (
        // Choose Account Type:Start
        <div>
            <h1>Choose Account Type</h1>
            <div>
            <h2>Parents</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZRP53IZezL33QlMy_q2bOVlSy-IDWdlQe4zUwzTyNbHGyubyr" />
            </div>
            <div className>
            <h2>Child Care Service Provider</h2>
            <img src="https://secure.cdn1.wdpromedia.com/resize/mwImage/2/630/354/75/dam/wdpro-assets/help/guest-services/child-care-services/Childcare-guest-services-icon-00-outline.png?1539801226935" />
            </div>
      {/* Choose Account Type: End */}
            
      {/*Form: Start */}
  <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          placeholder="Please enter your email"
          type="email"
          ref={register}
        />
        <label>New Password: </label>
        <input
          name="Password"
          placeholder="Enter your password"
          ref={register({ required: "Password is required!" })}
        />
        {errors.password && (
          <p style={{ color: "white" }}>{errors.password.message}</p>
        )}
        <input type="submit" />
        <p>No Account?</p>
      <button type="submit">Sign Up</button>
      </form>
      {/* Form End */}
        </div>
    

    );
  }

export default Logon;