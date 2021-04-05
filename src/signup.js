import React from 'react'

const signup = () => {
    return (
        <form className='signup-box'>
            <h1>Sign-up</h1>
            <ul>
                <li className="name">
                    <label htmlFor="firstname">Firstname</label><br/>
                    <input type="text" id='firstname' placeholder='enter your name'/><br/>
                    <label htmlFor="lastname">lastname</label><br/>
                    <input type="text" id='lastname'/>
                </li>
                <li className="Email">
                    <label htmlFor="Email">Email</label><br/>
                    <input type="text" id='Email'/>
                </li>
                <li className="phone-no">
                    <label htmlFor="phone-no">Phone no</label><br/>
                    <input type="text" id='phone no.'/>
                </li>
                <li className="password">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id='password'/>
                </li>
                <li className="Confirm-password">
                    <label htmlFor="confirm-password">Confirm-Password</label><br/>
                    <input type="password" id='confirm-password'/>
                </li>
                <li className="gender">
                    <h3>Gender</h3>
                    <input type="radio" id='male' name='gender' value='male'/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">Other</label>
                </li>
                <li className='terms and condition'>
                    <input type="checkbox" id='ckeck-box'/>
                    <label htmlFor="check-box">Terms and condition*</label>
                </li>
            </ul>
            <button type='submit'>Register</button>
        </form>
    )
}

export default signup
