import React from "react";
import bodyImg from '../../images/pngwing.png'
import contactCover from '../../images/contact-cover.png'

function HomeSec6() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-[1840px]">
        <div className="gap-y-4 h-[875px] bg-[#252B42] flex flex-col justify-center items-center">
          <div className="h-[476px] flex flex-col justify-evenly items-center">
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
        <div className="h-[954px] flex flex-col justify-between items-center">
            <div className="w-1/3">
                <img src={contactCover} alt="" className="" />
            </div>
            <div className="2/3">
                <p className="w-[400px] font-bold text-6xl">Get A Free Quote Here</p>
                <div>
                    
                </div>

            </div>

        </div>
      </div>
    </section>
  );
}

export default HomeSec6;
