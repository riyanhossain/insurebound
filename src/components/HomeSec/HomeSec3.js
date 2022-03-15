import { Rating } from '@mui/material'
import React from 'react'
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'


function HomeSec3() {
  return (
    <section className='flex justify-center'>
        <div className='flex justify-center items-center'>
            <div className='w-screen h-[1913px] bg-white flex justify-center items-center md:h-[787.01px] md:w-[1492px]'>
                <div className='w-5/6 h-[1913px]  flex flex-col justify-between items-center md:h-[787.01px] md:flex-col md:w-4/5 md:justify-evenly'>
                    <div className='h-1/4 md:w-full md:h-[107px] flex justify-center items-center flex-col gap-y-4'>
                        <p className='hidden md:inline font-bold text-5xl'>Industry</p>
                        <p className='mt-36 w-72 text-center md:mt-0 md:w-[25rem]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='h-3/4 flex flex-col justify-between items-center md:flex-row w-full md:h-[376.01px]'>
                        <div className='shadow-lg w-[297px] h-[383.2px] flex flex-col justify-center items-center gap-y-4'>
                            <img src={person1} alt="" />
                            <p className='w-[240px] text-center'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <Rating name="read-only" value={4} readOnly />                       
                        </div>
                        <div className=' shadow-xl  w-[297px] h-[383.2px] flex flex-col justify-center items-center gap-y-4'>
                            <img src={person2} alt="" />
                            <p className='w-[240px] text-center'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <Rating name="read-only" value={5} readOnly />
                        </div>
                        <div className='shadow-lg w-[297px] h-[383.2px] flex flex-col justify-center items-center gap-y-4'>
                            <img src={person3} alt="" />
                            <p className='w-[240px] text-center'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                            <Rating name="read-only" value={4} readOnly />
                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default HomeSec3