import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

function Message() {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages' className='link'>MESSAGES </Link>{'>'} JAYANTH {'>'}
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Eaque necessitatibus eveniet provident, a accusantium excepturi quisquam, ea ullam doloribus sapiente corrupti voluptatum aperiam</p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque necessitatibus eveniet provident, a accusantium excepturi quisquam, ea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque necessitatibus eveniet provident, a accusantium excepturi </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>adipisicing elit. Eaque necessitatibus eveniet provident, a accusantium excepturi quisquam, ea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque necessitatibus eveniet provident, a accusantium excepturi quisquam, ea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Eaque necessitatibus eveniet provident, a accusantium excepturi quisquam, ea ullam doloribus </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consecteturea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Lorem ipsum dolor, sit amet consecteturea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>Consecteturea ullam doloribus sapiente corrupti voluptatum aperiam! Voluptates cupiditate praesentium vero minima incidunt pariatur?</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message...' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
