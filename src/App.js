import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './nav'
import Login from './login'
import Signup from './signup'
import AboutUs from './AboutUs'
import Idea from './idea'
import Project from './project'
const App = () => {
    return (
        <Router>
            <Route exact path='/'>
                <Nav/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/signup'>
                <Signup/>
            </Route>
            <Route path='/aboutus'>
                <AboutUs/>
            </Route>
            <Route path='/idea'>
                <Idea/>
            </Route>
            <Route path='/project'>
                <Project/>
            </Route>
        </Router>


        // <div>
        //     <Nav/>
        // </div>
    )
}

export default App
