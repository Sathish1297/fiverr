import React from 'react'
import './Home.scss'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import check from '../../assets/check.png'

function home() {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />

      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card}/>
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className='title'>
              <img src={ check } alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <div className='title'>
              <img src={ check } alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <div className='title'>
              <img src={ check } alt="" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <div className='title'>
              <img src={ check } alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video src="https://player.vimeo.com/external/436375789.sd.mp4?s=a5f19d627bbf279bf01f12e7ca4f14d847ee30c5&profile_id=164&oauth2_token_id=57447761" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr<i>.</i><span> Business Solutions</span></h1>
            <h3>Advanced solutions and professional talent for businesses</h3>
            <div className='title'>
              <img src={ check } alt="" />
              Fiverr Pro
            </div>
            <p>
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
            <div className='title'>
              <img src={ check } alt="" />
              Fiverr Certified
            </div> 
            <p>
            Access top freelancers and professional business tools for any project
            </p> 
            <div className='title'>
              <img src={ check } alt="" />
              Fiverr Enterprise
            </div>
            <p>
            Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
            </p>  
            <button>Learn More</button>
          </div>
          <div className="item">
            <img className='image' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project}/>
        ))}
      </Slide>

    </div>
  )
}

export default home