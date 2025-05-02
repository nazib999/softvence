import React from 'react'
import {assets} from "../assets/index.js";

const Header = () => {
    return (
        <header className='flex items-center justify-between py-[30px] wrapper max-sm:px-2 max-lg:px-3'>
            <div>
                <img src={assets.logo} alt="logo" width={240} height={48}/>
            </div>
            <nav className={'mr-auto max-lg:mx-auto ml-[74px] max-sm:hidden '}>
                <ul className={'text-[14px] flex items-center  gap-8 text-[#020407] font-semibold'}>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Consulting</li>
                    <li className='cursor-pointer'>Ai Coach</li>
                </ul>
            </nav>
            <button className={'text-base font-bold rounded-full cursor-pointer p-4 border-[1px] outline-none border-[#010205]'}>Get started</button>
        </header>
    )
}
export default Header
