import React from 'react'
import vector3 from '../../images/vector3.png'

function HomeSec2() {
  return (
    <section className='flex justify-center mt-48 md:m-0'>
        <div className='flex justify-center items-center'>
            <div className='w-screen h-[950px] bg-white flex justify-center items-center md:h-[435px] md:w-[1492px]'>
                <div className='w-5/6 h-[950px]  flex flex-col justify-between md:h-[243px] md:flex-row md:w-4/5'>
                    <div className=' h-[243px] flex flex-col justify-center items-center gap-y-4'>
                        <img src={vector3} alt="" />
                        <p className='font-bold text-xl'>Peace of Mind</p>
                        <p className='w-[200px] text-center'>the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className=' h-[243px] flex flex-col justify-center items-center gap-y-4'>
                        <img src={vector3} alt="" />
                        <p className='font-bold text-xl'>Set For Life</p>
                        <p className='w-[240px] text-center'>They were used to create the machines that launched </p>
                    </div>
                    <div className=' h-[243px] flex flex-col justify-center items-center gap-y-4'>
                        <img src={vector3} alt="" />
                        <p className='font-bold text-xl'>100% Satisfaction</p>
                        <p className='w-[240px] text-center'>So it really behaves like neither. Now we have given up. </p>
                    </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default HomeSec2