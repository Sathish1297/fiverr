import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import star from '../../assets/star.png'
import noavatar from '../../assets/noavatar.jpg'
// import like from '../../assets/like.png'
// import dislike from '../../assets/dislike.png'
import recycle from '../../assets/recycle.png'
import clock from '../../assets/clock.png'
import greencheck from '../../assets/greencheck.png'
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest.js'
import Reviews from '../../components/reviews/Reviews.jsx';
import { Link } from "react-router-dom";

function Gig() {

//   const {id} = useParams();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["gig"],
//     queryFn: () =>
//       newRequest
//         .get(`/gigs/single/${id}`)
//         .then((res) => {
//           return res.data;
//         }),
//   });

//   const userId = data?.userId;

//   const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
//     queryKey: ["user"],
//     queryFn: () =>
//       newRequest
//         .get(`/users/${userId}`)
//         .then((res) => {
//           return res.data;
//         }),
//       enabled: !!userId,
//   });


//   return (
//     <div className="gig">

//     {isLoading ? "loading" : error ? "Something went wrong" : 
//       <div className="container">
//         <div className="left">
//           <span className="breadcrumbs">Fiverr {'>'} Graphics & Design {'>'}</span>
//           <h1>{data?.title}</h1>

//           {isLoadingUser ? "loading" : errorUser ? "Something went wrong in user" : (
//             <div className="user">
//             <img
//               className="pp"
//               src={dataUser?.cover || noavatar}
//               alt=""
//             />
//             <span>{dataUser.username }</span>
//             {!isNaN(data.totalStars/data.totalNumber) && (
//               <div className="stars">
//                 {Array(Math.round(data.totalStars/data.totalNumber)).fill().map((item, i) => (
//                   <img src={star} alt="" key={i}/>
//                 ))}
//                 <span>{Math.round(data.totalStars/data.totalNumber)}</span>
//               </div>
//             )} 
//           </div>)}

//           <Slider slidesToShow={1} arrowsScroll={1} className="slider">
//             {data.images.map(image => (
//               <img
//                 key={image}
//                 src={image}
//                 alt=""
//               />
//             ))}
//           </Slider>
//           <h2>About This Gig</h2>
//           <p>{data.desc}</p>

//           { isLoadingUser ? "loading" : errorUser ? "Something went wrong in user" : (
//           <div className="seller">
//             <h2>About The Seller</h2>
//             <div className="user">
//               <img
//                 src={ dataUser?.cover || noavatar }
//                 alt=""
//               />
//               <div className="info">
//                 <span>{dataUser.username }</span>
//                 {!isNaN(data.totalStars/data.totalNumber) && (
//                   <div className="stars">
//                     {Array(Math.round(data.totalStars/data.totalNumber)).fill().map((item, i) => (
//                       <img src={star} alt="" key={i}/>
//                     ))}
//                     <span>{Math.round(data.totalStars/data.totalNumber)}</span>
//                   </div>
//                 )} 
//                 <button>Contact Me</button>
//               </div>
//             </div>
//             <div className="box">
//               <div className="items">
//                 <div className="item">
//                   <span className="title">From</span>
//                   <span className="desc">{dataUser.country}</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Member since</span>
//                   <span className="desc">Aug 2022</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Avg. response time</span>
//                   <span className="desc">4 hours</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Last delivery</span>
//                   <span className="desc">1 day</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Languages</span>
//                   <span className="desc">English</span>
//                 </div>
//               </div>
//               <hr />
//               <p>{dataUser.desc || "There is no description about User"}</p>
//             </div>
//           </div>
//           )}
//           <Reviews gigId={id}/>
//         </div>
//         <div className="right">
//           <div className="price">
//             <h3>{data.shortTitle}</h3>
//             <h2>Rs {data.price}</h2>
//           </div>
//           <p>
//             {data.shortDesc}
//           </p>
//           <div className="details">
//             <div className="item">
//               <img src={clock} alt="" />
//               <span>{data.deliveryTime} Days Delivery</span>
//             </div>
//             <div className="item">
//               <img src={recycle} alt="" />
//               <span>{data.revisionNumber} Revisions</span>
//             </div>
//           </div>
//           <div className="features">
//             {data.features.map(feature => (
//               <div className="item" key={feature}>
//                 <img src={greencheck} alt="" />
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//           <button>Continue</button>
//         </div>
//       </div>
//     }
//     </div>
//   );
// }


  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr {">"} Graphics & Design {">"}
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || noavatar}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.totalNumber))
                      .fill()
                      .map((item, i) => (
                        <img src={star} alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.totalNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((image) => (
                <img key={image} src={image} alt="" />
              ))}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || noavatar} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.totalNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src={star} alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.totalNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc || "There is no description about User"}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>Rs {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src={clock} alt="" />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src={recycle} alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src={greencheck} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
            <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


export default Gig;