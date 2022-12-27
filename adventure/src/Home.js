import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
<>
<div className="container-Home">
    <h1 className='h'>Adventure Awaits</h1>
    <h2 className='my-3'>What Are You Wating For ?</h2>
  <Link to="/service" className='btn-get-started'>Get Started</Link>
    
    </div>
</>

    )
}

export default Home