import React from 'react'
import {assets} from "../assets/index.js";

const CourseCard = ({img}) => {
    return (
        <div className='bg-[#F1F1F3] p-[50px] rounded-xl'>
            <img src={img} alt="img" className='rounded-xl'/>
            <div>
            <div className='mt-10 flex max-lg:flex-col max-lg:gap-3 items-center justify-between max-sm:gap-6'>
              <div className='flex gap-3' >
              <span className='text-[18px] px-[16px] py-[10px] bg-white color-[#4C4C4D] rounded-xl'>4 weeks</span>
              <span className='text-[18px] px-[16px] py-[10px] bg-white color-[#4C4C4D] rounded-xl'>Beginner</span>
              </div>
                <p className=' text-[20px] text-[#262626]'>By John Smith</p>
            </div>
            <h5 className='text-[#262626] font-semibold text-2xl mt-6'>Web Design Fundamentals</h5>
            </div>
            <p className='text-[18px] text-[#4C4C4D] leading-6 my-7'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            <button className='bg-[#002868] text-[18px] text-white py-[18px] px-6 rounded-xl w-full'>Get it Now</button>
        </div>
    )
}
export default CourseCard
