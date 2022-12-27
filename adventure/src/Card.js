import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
<>

<div className="col-md-4 col-10 mx-auto">
<div className="card">
  <img src={props.imgsrc} className="card-img-top vert-move" alt={props.imgsrc}/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <Link to= "/contact"className="btn btn-primary">Read More</Link>
  </div>
</div>
</div>
       
    
</>
    )
}

export default Card