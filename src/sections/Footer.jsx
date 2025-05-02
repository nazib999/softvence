import React from 'react'
import FooterCard from '../copmponents/FooterCard'
import { assets } from '../assets'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-img pt-7 pb-6'>

            <div className='wrapper max-sm:px-2 max-lg:px-3'>

            <FooterCard/>

            <footer className='mt-[130px] flex max-lg:flex-col gap-10'>

                <div className='flex-1/2 flex flex-col gap-7 max-sm:w-full'>
                    <img src={assets.logo2} alt="logo2" className='w-fit'/>
                    <p className='text-sm text-[#335386] max-w-xl  leading-6'>SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>
                    <div className='flex gap-4'>
                    <div className='p-3 bg-white rounded-full inline-block'>
                    <FaFacebookF />
                    </div>
                    <div className='p-3 bg-white rounded-full inline-block'>
                    <FaTwitter />
                    </div><div className='p-3 bg-white rounded-full inline-block'>
                    <FaLinkedinIn />
                    </div><div className='p-3 bg-white rounded-full inline-block'>
                    <FaInstagram />
                    </div>
                    </div>
                </div>
                <div className='flex-1/2 flex max-sm:gap-10  justify-between max-sm:w-full'>
                    <div>
                        <h5 className='text-[18px] font-semibold text-[#001C4A] mb-8'>Navigation</h5>
                        <ul className='text-[#335386] text-sm flex flex-col gap-6'>
                            <li>Sevice</li>
                            <li>Agency</li>
                            <li>Case Study</li>
                            <li>Resource</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[18px] font-semibold text-[#001C4A] mb-8'>Licence</h5>
                        <ul className='text-[#335386] text-sm flex flex-col gap-6'>
                            <li>Privacy Policy</li>
                            <li>Copyright</li>
                            <li>Email Adress</li>
                            
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[18px] font-semibold text-[#001C4A] mb-8'>Contact</h5>
                        <ul className='text-[#335386] text-sm flex flex-col gap-6'>
                            <li className='flex gap-2 items-center'><FaPhone /><span>(406) 555-0120</span></li>
                            <li className='flex gap-2 items-center'><IoMdMail /><span>Hey@boostim.com</span></li>
                            <li className='flex gap-2 items-center'><FaLocationDot /><span>2972 Westheimer Rd. <br /> Santa Ana, Illinois 85486</span> </li>
                           
                        </ul>
                    </div>
                </div>
            </footer>
            </div>
            
            
            </div>
    )
}
export default Footer
