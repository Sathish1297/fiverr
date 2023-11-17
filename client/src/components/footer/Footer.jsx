import React from 'react'
import './Footer.scss'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import pinterest from '../../assets/pinterest.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import language from '../../assets/language.png'
import accessibility from '../../assets/accessibility.png'
import rupee from '../../assets/rupee.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr<i>®</i></h2>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="socials">
              <img src={instagram} alt="" className='image'/>
              <img src={facebook} alt="" className='image'/>
              <img src={pinterest} alt="" className='image'/>
              <img src={twitter} alt="" className='image'/>
              <img src={linkedin} alt="" className='image'/>
            </div>
            <div className="link">
              <img src={language} alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={rupee} alt="" className='coin'/>
              <span>INR</span>
            </div>
            <img src={accessibility} alt="" className='access'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
