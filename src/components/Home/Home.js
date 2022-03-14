import React from 'react'
import bgHome from '../../images/bgHome.jpg'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className='flex-col justify-center items-end' >
        <div style={{backgroundImage:`url('${bgHome}')`,backgroundRepeat:"no-repeat", backgroundSize:'cover',backgroundPosition:'center'}}>
            <Navbar/>
        </div>

    </div>
  )
}

export default Home