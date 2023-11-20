import React from 'react'
import './Featured.scss'
import search from '../../assets/search.png'
import man1 from '../../assets/man1.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Featured = () => {

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(`/gigs?search=${input}`);
  }

  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Find the perfect <span>freelance</span> services for your business</h1>
            <div className="search">
                <div className="searchInput">
                    <img src={ search } alt="search" />
                    <input type="text" placeholder='try building a web application' size="50" onChange={(e) => setInput(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>WordPress</button>
                <button>Logo Design</button>
                <button>AI services</button>
            </div>
        </div>
        <div className="right">
            <img src={ man1 } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
