import React from 'react'
import './GigCard.scss'
import star from '../../assets/star.png'
import heart from '../../assets/heart.png'
import noavatar from '../../assets/noavatar.jpg'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const GigCard = ({item}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
          newRequest
            .get(`/users/${item.userId}`)
            .then((res) => {
              return res.data;
            }),
    });

  return (
    <Link to={`/gig/${item._id}`} className='link'>
        <div className='gigCard'>
            <img src={item.cover} alt="" />
            <div className="info">
                {isLoading ? "loading" : error ? "Something went wrong" : (
                 <div className="user">
                    <img src={data.img || noavatar}alt="" />
                    <span>{data.username}</span>
                 </div> )
                }
                <p>{item.desc}</p>
                <div className="star">
                    <img src={star} alt="star" />
                    <span>{!isNaN(item.totalStars/item.totalNumber) && Math.round(item.totalStars/item.totalNumber)}</span>
                </div>
            </div>
            <hr />
            <div className="details">
                <img src={heart} alt="heart" />
                <div className="price">
                    <span>Starting at</span>
                    <h2> Rs.{item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
}


export default GigCard