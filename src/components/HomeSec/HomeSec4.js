import React from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'
import logo5 from '../../images/logo5.png'
import logo6 from '../../images/logo6.png'

function HomeSec4() {
  return (
    <section className='flex justify-center'>
        <div className='flex justify-center items-center md:w-[1492px]'>
            <div className='h-[1230px] flex flex-col justify-center items-center md:w-4/5 md:h-[339px] gap-y-4'>
                <div className='h-[1018px] flex flex-col justify-evenly items-center md:h-[175px] md:flex-row w-full'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                </div>
                <div className=' gap-y-3 w-screen h-[212px] flex flex-col bg-gradient-to-r from-indigo-900 to-fuchsia-500 justify-center items-center md:w-full md:justify-evenly md:flex-row'>
                    <p className='text-white font-bold text-2xl'>Subscribe For Latest Newsletter</p>
                    <div className='flex'>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    <button className='bg-[#23A6F0] p-3 w-36 rounded-r text-white text-xs'>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default HomeSec4