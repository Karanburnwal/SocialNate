import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Project = () => {

    return (<>
    <nav className="nav-idea">
        <div className="nav-center">
            <div className="nav-header">
                <div className="logo">
                    S<span>N</span>
                </div>
            </div>
            <div className="search-container">
                <input className="search-bar" type="text" placeholder="Search Project" size='30'/>
                <button type="search"><i className="fas fa-search"></i></button>
            </div>
            <ul className="log-src">
                <li>
                    <button className="btn login" >
                        <Link to='/login'>login</Link> 
                    </button>
                </li>
                <li>
                    <Link to='/signup'>
                    <button className="getstarted">
                        Get Started
                    </button>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

    </>
)      
}
export default Project
