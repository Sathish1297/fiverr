import React from 'react'
import './Featured.scss'
import search from '../../assets/search.png'
import man1 from '../../assets/man1.png'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Find the perfect <span>freelance</span> services for your business</h1>
            <div className="search">
                <div className="searchInput">
                    <img src={ search } alt="search" />
                    <input type="text" placeholder='try building a web application' size="50"/>
                </div>
                <button>Search</button>
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
