import React from 'react'
import CourseCard from '../copmponents/CourseCard'
import { assets } from '../assets'

const Courses = () => {
    return (
        <section>
           <div className="wrapper max-sm:px-2 max-lg:px-3 ">
               <div className='mt-[80px]'>
                   <h2 className='font-semibold text-[48px] text-[#262626]'>Our Courses</h2>
                   <div className='flex items-baseline max-lg:flex-col  justify-between'>
                       <p className='text-[#59595A] text-[18px] max-w-5xl mt-[30px] mb-[50px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                       <button className='bg-[#002868] text-white text-[18px] px-6 rounded-xl py-[18px]'>View all</button>
                   </div>
               </div>
               <div className='flex max-sm:flex-col max-sm:mt-5  justify-between gap-10'>
               <CourseCard img={assets.img2}/>
               <CourseCard img={assets.img3}/>
               </div>
           </div>

        </section>
    )
}
export default Courses
