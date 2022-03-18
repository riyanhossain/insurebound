import React from "react";
import bodyImg from '../../images/pngwing.png'
import contactCover from '../../images/contact-cover.png'

function HomeSec6() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-[1640px] md:h-[1150px]  md:bg-gradient-to-b from-[#252B42] to-white" style={{background: 'linear-gradient(to bottom, #252B42 70% , white 40%)'}}>
        <div className="gap-y-4 h-[875px] bg-[#252B42] flex flex-col justify-center items-center md:flex-row md:h-[500px]">
          <div className="h-[476px] flex flex-col justify-evenly items-center md:w-1/2">
            <p className="text-white font-bold text-6xl w-5/6">We Have Branches All Over The World</p>
            <p className="text-white w-5/6">
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th
              century, which gave some indications about how small things do
              behave, produced an increasing confusion which was Heisenberg, and
              Born.
            </p>
          </div>
          <div className="flex justify-center items-center">
              <img src={bodyImg} alt="" />
          </div>
        </div>
        <div className="bg-white h-[954px] flex flex-col justify-between items-center md:flex-row md:w-[885px] md:h-[510px] md:items-start">
            <div className="h-1/3" >
                <img src={contactCover} alt="" className=" w-screen h-[259px] md:h-[510px] md:w-[267px] md:object-fill" />
            </div>
            <div className=" flex flex-col justify-center items-center">
            <p className="hidden font-bold text-2xl mb-12 md:flex mt-10">Book Appointment</p>

                <p className="w-[400px] font-bold text-6xl mb-12 md:hidden">Get A Free Quote Here</p>
                <div className="w-5/6 ">
                  <div>
                    <label className="font-bold">Name</label>
                    <input type="text" className="outline-2 outline-blue-500/50 w-full p-2 mt-2 mb-2 bg-gray-200 rounded-sm " placeholder="Full Name" />
                    <label className="font-bold">Email</label>
                    <input type="email" className="outline-2 outline-blue-500/50 w-full p-2 mt-2 mb-2 bg-gray-200 rounded-sm" placeholder="example@gmail.com" />
                    <label className="font-bold">Department</label>
                    <select className="outline-2 outline-blue-500/50 w-full p-2 mt-2 mb-2 bg-gray-200 rounded-sm">
                      <option>CSE</option>
                      <option>EEE</option>
                      <option>Texas</option>
                    </select>
                    <label className="font-bold">Time</label>
                    <select className="outline-2 outline-blue-500/50 w-full p-2 mt-2 mb-2 bg-gray-200 rounded-sm">
                      <option>4.00 pm</option>
                      <option>5.00 pm</option>
                      <option>6.00 pm</option>
                    </select>
                    <button className="mt-4 bg-[#23A6F0] w-full p-3 text-white rounded">Book Appointment</button>
                  </div>
                    
                </div>

            </div>

        </div>
      </div>
    </section>
  );
}

export default HomeSec6;
