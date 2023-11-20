import React from 'react'
import './Review.scss'
import star from '../../assets/star.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import noavatar from '../../assets/noavatar.jpg'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';


const Review = ({ review }) => {

    const { isLoading, error, data } = useQuery(
      {
        queryKey: [review.userId],
        queryFn: () =>
          newRequest.get(`/users/${review.userId}`).then((res) => {
            return res.data;
          }),
      },
    );
  
  
    return (
      <div className="review">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="user">
            <img className="pp" src={data.img || noavatar} alt="" />
            <div className="info">
              <span>{data.username}</span>
              <div className="country">
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className="stars">
          {Array(review.star)
            .fill()
            .map((item, i) => (
              <img src= {star} alt="" key={i} />
            ))}
          <span>{review.star}</span>
        </div>
        <p>{review.desc}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src={like} alt="" />
          <span>Yes</span>
          <img src={dislike} alt="" />
          <span>No</span>
        </div>
      </div>
    );
  };


export default Review;