import { FaArrowUp } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoClipboardOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { FaFileAlt } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";

const LiveAi = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-7 pb-12 max-sm:px-2 max-lg:px-3 max-sm:mt-[300px]">
      <div className={"wrapper"}>
        <div >
          <p className="text-2xl text-[#FCE38A]">Live Ai Coach</p>
          <h4 className="text-6xl max-sm:text-4xl text-white my-4 mb-10">Take a Suggestion Coaching </h4>
        </div>
        <div className="flex max-lg:flex-col items-center gap-12 max-sm:gap-8">
            <div className="bg-white rounded-xl max-w-[787px]  flex-3/5 max-sm:w-full">
              <p className="text-[18px] font-bold text-[#1B1B1B] py-6 px-8">
                AI Sales Coach
              </p>
              <div className="bg-[#CDCDCD] pb-[230px] max-sm:pb-[100px] pt-7 px-6 max-sm:px-3">
                <div className="flex gap-6">
                  <div className="rounded-full bg-[#D9D9D9] max-sm:w-[100px] w-[48px] h-[40px] "/>
               
                  <div className="px-6 max-sm:px-2 py-2 bg-white rounded-xl">
                    <p className="text-[18px] leading-8">
                      Hello! I'm your AI sales coach. How can I help you improve
                      your sales performance today?
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-8 pb-6 flex flex-wrap gap-2 justify-between">
                <span className="text-[#002868] bg-[#00286814] rounded-full text-sm max-sm:p-2.5 px-[17px] py-[12px]">
                  How do I handle objections?
                </span>
                <span className="text-[#002868] bg-[#00286814] rounded-full text-sm max-sm:p-2.5 px-[17px] py-[12px]">
                  Closing techniques
                </span>
                <span className="text-[#002868] bg-[#00286814] rounded-full text-sm max-sm:p-2.5 px-[17px] py-[12px]">
                  Give me a cold email template
                </span>
                
                <span className="text-[#002868] bg-[#00286814] rounded-full text-sm max-sm:p-2 px-[17px] py-[12px]">
                  Negotiation tips
                </span>
              </div>
              <div className="mx-6 pb-6 flex gap-4 max-sm:gap-2 ">
                <input
                  type="text"
                  placeholder="Ask anything you need"
                  className="flex-1 px-6 py-4 border-2 border-[#E5E7EB]"
                />
                <button className="flex items-center gap-2.5 bg-[#002868] text-white p-3.5 rounded-xl">
                  <span className="font-medium text-[17px]">Send</span>
                  <FaArrowUp />
                </button>
              </div>
            </div>
            {/* icons  */}
            <div className="flex-2/5 flex justify-center items-center gap-12 max-sm:gap-2 max-lg:w-full">
              <div className="flex flex-col  max-sm:hidden bg-white rounded-full p-6 text-3xl h-fit  gap-8 max-sm:gap-4 text-[#292929]">
                <span >
                  <TfiReload />
                </span>
                <span >
                  <FaRegThumbsUp />
                </span>
                <span >
                  <FaThumbsDown />
                </span>
                <span >
                  <IoClipboardOutline />
                </span>
                <span >
                  <HiOutlineSpeakerWave />
                </span>
              </div>
              <div className="flex flex-col   gap-6 ">
                {/* card 2 */}


                <div className="bg-[#EFEFEF] p-6  rounded-xl    xl:max-w-[535px] max-lg:w-full">
                  <h4 className="text-[#323232] font-bold text-[32px]">
                    Real-time Analysis
                  </h4>
                  <div className="p-4 mt-6 bg-white rounded-xl mb-3 ">
                  <div className="flex items-center gap-2">
                  <TiTickOutline />
                  <p className="font-semibold text-[18px] text-[#171D25]">Confidence Level</p>
                  </div>
                 <div className="flex items-center gap-2">
                 <div className="relative rounded-full bg-[#DFDFDF] h-2 flex-1 ">
                   <div className="absolute bg-green-600 z-10 inset-0 rounded-full w-[60%]"/>
                  
                 </div>
                  <p className="text-[#6D6D6D]">60%</p>
                 </div>
                  </div>
                  <div className="px-4 py-4 my-6 bg-white rounded-xl">
                  <div className="flex items-center gap-2">
                  <TiTickOutline />
                  <p className="font-semibold text-[18px] text-[#171D25]">Confidence Level</p>
                  </div>
                  <p className="text-[#909090] text-[18px] leading-8">85% improvement in objection handling</p>
                  </div>
                </div>

                {/* card 3 */}
                <div className="bg-[#EFEFEF]   p-6  rounded-xl max-w-[535px] max-lg:w-full">
                  <h4 className="text-[#323232] font-bold text-[32px]">
                    Quick Actions
                  </h4>
                  <div className="flex items-center gap-4 justify-between">
                    
                  <div className="p-4 mt-6 bg-white rounded-xl mb-3 xl:min-w-[200px]">
                  <div className="flex flex-col justify-center gap-2">
                  <span className="text-[#002868] text-3xl"><FaFileAlt /></span>
                  <p className="font-semibold text-[18px] text-[#171D25]">Generate Script</p>
                  </div>
                 
                  </div>

                  <div className="p-4  mt-6 bg-white rounded-xl mb-3 xl:min-w-[200px]">
                  <div className="flex flex-col justify-center gap-2">
                  <span className="text-[#002868] text-3xl"><TbMessageFilled /></span>
                  <p className="font-semibold text-[18px] text-[#171D25]">Practice Pitch</p>
                  </div>
                 
                  </div>

                  </div>
                  
                  
                </div>
              </div>
              
            </div>
          </div>
          </div>
      </div>
    
  );
};
export default LiveAi;
