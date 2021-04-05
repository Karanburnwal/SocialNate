import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import ShowNews from './shownews'
const url='https://newsapi.org/v2/everything?q=tesla&from=2021-02-25&sortBy=publishedAt&apiKey=e013d770514847eeaea403d6a876a815'
const Nav = () => {
    const [value,setValue]=useState(false);
    const [blogNews,setBlogNews]=useState([]);
    const fetchNews=async ()=>{
        setValue(true);
    const response=await fetch(url);
    const newNews=await response.json();
    setBlogNews(newNews.articles);
    // console.log(blogNews[0]);
    setValue(false);
  }
useEffect(() => {
    fetchNews();
}, []);
    return (<>
    <nav>
        <div>
            <div className="nav-center">
                <div className="nav-header">
                    <div className="logo">
                        Social<span>Nate</span>
                    </div>
                </div>
                <ul className="link">
                    
                    <li>
                        <Link to='/idea'><a href="#" >Ideas</a></Link>
                    </li>
                    <li>
                        <Link to='/project'><a href="#">Projects</a> </Link>
                    </li>
                    <li>
                        <a href="#">Write</a>
                    </li>
                    <li>
                        <Link to='/aboutus'><a href="#" >About Us</a></Link>
                    </li>
                </ul>
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
        </div>
    </nav>
    <section>
        {
            value?<div>loading..</div>: blogNews.map((news,index)=><div> <ShowNews key={index} news={news}/></div>)
        }
    </section>
    </>
)      
}
export default Nav
