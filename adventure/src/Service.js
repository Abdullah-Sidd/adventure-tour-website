import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Services = () => {
  return (
<>
<div className="my-5">
    <h1 className='text-center'>Lets Explore The World Famous Places.</h1>
</div>
<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
<div className="row gy-4">
{
Sdata.map((e,ind)=>{
return <Card key={ind}
      imgsrc = {e.imgsrc}
      title = {e.title}
      desc ={e.desc}
      url = {e.url}/>
})

}

</div>
        </div>
    </div>
</div>
</>
    )
}

export default Services