import React from 'react'

import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
                 <div className='col-md-4 col-10 mx-auto'>
{/* card */}
<div className="card">
  <img src={props.imgsrc} className="card-img-top  img1" alt=""/>
  <div className="card-body">
    <h5 className="card-title ">{props.title}</h5>
    <p className="card-text">We offer top-tier software development services tailored to meet your needs.</p>
    <NavLink to="/" className="btn btn-primary">Check Now</NavLink>
  </div>
</div>

{/* card */}
    </div>
    </>
  )
}

export default Card
