import React from 'react'
import vector from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'

function HomeSec() {
  return (
      <section className='flex justify-center'>
          <div className='flex justify-center items-center w-[1492px]'>
              <div className=' h-[1384px] md:h-[900px] md:w-4/5'>
                  <div className='h-11/12 flex flex-col items-center justify-center gap-y-7 md:gap-y-8 mt-32'>
                      <p className='md:w-[450px] text-4xl text-white w-3/5 font-bold text-center p-2'>We Ensure A Best Insurance Service</p>
                      <p className='w-3/6 text-center text-white md:w-[350px]'>We know how large 
                        objects will act, but things 
                        on a small scale just do 
                        not act that way.</p>
                        <div className=' flex flex-col gap-y-6 md:flex-row gap-x-6'>
                        <button className='hover:bg-[#23A6F0] hover:border-[#23A6F0] rounded-3xl px-12 p-2 text-white border-2 border-white'>Get Quote Now</button>
                        <button className='hover:bg-[#23A6F0] hover:border-[#23A6F0] rounded-3xl px-12 p-2 text-white border-2 border-white'>Learn More</button>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-8 md:flex-row mt-44 md:justify-between md:w-full'>
                            <div className='w-[328px] h-[201px] bg-white flex flex-col justify-center  gap-y-2'>
                                <img src={vector} alt="" className='w-12 ml-10' />
                                <h6 className='font-bold text-2xl ml-10' >Peace of Mind</h6>
                                <p className='font-thin w-48 ml-10'>the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className='w-[328px] h-[201px] bg-[#23A6F0] flex flex-col justify-center  gap-y-2'>
                                <img src={vector2} alt="" className='w-12 ml-10' />
                                <h6 className='font-bold text-2xl ml-10 text-white' >Peace of Mind</h6>
                                <p className='font-thin w-48 ml-10 text-white'>the quick fox jumps over the lazy dog</p>
                            </div>
                            <div className='w-[328px] h-[201px] bg-white flex flex-col justify-center  gap-y-2'>
                                <img src={vector} alt="" className='w-12 ml-10' />
                                <h6 className='font-bold text-2xl ml-10' >Peace of Mind</h6>
                                <p className='font-thin w-48 ml-10'>the quick fox jumps over the lazy dog</p>
                            </div>

                        </div>

                  </div>

              </div>
          </div>
      </section>
  )
}

export default HomeSec