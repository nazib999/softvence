import React from 'react'
import {assets} from "../assets/index.js";
import Card from "../copmponents/Card.jsx";

const Topbar = () => {
    return (
        <div className='flex max-sm:flex-col  justify-between mt-[50px] mb-10 wrapper max-sm:px-2 max-lg:px-3'>
            <div className='flex flex-col'>
                <h1 className={'font-semibold text-[80px] max-lg:text-6xl max-sm:text-5xl max-sm:leading-20 leading-[100px]'}>Your AI- <br/>Powered <br/>  Sales Coach</h1>
                <div className={'flex items-center mt-4'}>
                    <img src={assets.robot} alt="robot" height={204} width={198}/>
                    <p className='w-[340px] max-lg:w-[180px] text-[20px] leading-[30px] ml-[70px] max-sm:ml-10 max-lg:ml-4'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                </div>
                <div className='flex mt-10 gap-12 max-sm:gap-2'>
                    <div className='flex gap-8 max-sm:gap-4 items-center'>
                        <div className='bg-white p-3 rounded-xl'><img src={assets.icon1} alt="icon" className='h-auto max-w-fit'/></div>
                        <div className='flex flex-col'><span className='xl:text-[40px] max-sm:text-2xl  font-semibold text-[#05131D]'>2000+</span> <span className='text-[20px] max-sm:text-base'>Your protection</span></div>
                    </div>
                    <div className='flex gap-8 max-sm:gap-4 items-center'>
                        <div className='bg-white p-3 rounded-xl'><img src={assets.icon2} alt="icon" className='h-auto max-w-fit'/></div>
                        <div className='flex flex-col'><span className='max-sm:text-2xl text-[40px] font-semibold text-[#05131D]'>7001+</span> <span className='text-[20px] max-sm:text-base'>Provide tailored</span></div>
                    </div>

                </div>
            </div>
            <div className='relative max-sm:mt-12'>
                <img src={assets.img1} alt="" className={'mr-0 w-fit h-auto'}/>
                <Card/>
            </div>
        </div>
    )
}
export default Topbar
