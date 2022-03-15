import React from 'react'
import bgHome from '../../images/bgHome.jpg'
import HomeSec from '../HomeSec/HomeSec'
import HomeSec2 from '../HomeSec/HomeSec2'
import HomeSec3 from '../HomeSec/HomeSec3'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <main>
        <div className='  md:w-screen md:h-screen' style={{backgroundImage:`url('${bgHome}')`,backgroundRepeat:"no-repeat", backgroundSize:'cover', backgroundPosition:'center'}}>
            <Navbar/>
            <HomeSec/>
            <HomeSec2/>
            <HomeSec3/>
        </div>

    </main>
  )
}

export default Home