import React from 'react'
import bgHome from '../../images/bgHome.jpg'
import Footer from '../Footer/Footer'
import HomeSec from '../HomeSec/HomeSec'
import HomeSec2 from '../HomeSec/HomeSec2'
import HomeSec3 from '../HomeSec/HomeSec3'
import HomeSec4 from '../HomeSec/HomeSec4'
import HomeSec5 from '../HomeSec/HomeSec5'
import HomeSec6 from '../HomeSec/HomeSec6'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <main>
        <div className=' h-screen w-screen  md:w-screen md:h-screen' style={{backgroundImage:`url('${bgHome}')`,backgroundRepeat:"no-repeat", backgroundSize:'cover', backgroundPosition:'center'}}>
            <Navbar/>
            <HomeSec/>
            <HomeSec2/>
            <HomeSec3/>
            <HomeSec4/>
            <HomeSec5/>
            <HomeSec6/>
            <Footer/>
        </div>

    </main>
  )
}

export default Home