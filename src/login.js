import React from 'react' 
const login = () => {
    return (<>
        <div className="log">
            <h1>Login</h1>
            <div className="textbox">
                <i className="fas fa-user"></i>
                <input type="text" placeholder='email'/>
            </div>
            <div className="textbox">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder='password'/>
            </div>
            <input type="button" className='button' value='Sign-in'/>
            <div className="signup">
                <h3>Don't have an account</h3>
                <a href="#">Create New</a>
            </div>
        </div>
        </>
    )
}

export default login
