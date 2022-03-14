import React from 'react'
import bgHome from '../../images/bgHome.jpg'
import HomeSec from '../HomeSec/HomeSec'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <main>
        <div className='md:w-screen md:h-screen' style={{backgroundImage:`url('${bgHome}')`,backgroundRepeat:"no-repeat", backgroundSize:'cover', backgroundPosition:'center'}}>
            <Navbar/>
            <HomeSec/>
        </div>

    </main>
  )
}

export default Home