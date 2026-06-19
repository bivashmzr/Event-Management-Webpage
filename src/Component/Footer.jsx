import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


import { FaLinkedinIn } from "react-icons/fa6";





const Footer = () => {
  return (
    <div className='pb-4'>
    <div className='max-w-7xl mx-auto px-6 border-b-2 border-gray-300 '>
        <div className='grid lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.6fr] gap-10 pb-3 md:grid-cols-3 '>
            {/* Logo with Copyright */}
            
            <div>
                <p className='font-bold text-[18px]'>Logo</p>
                <p>© 2024 Evently. All rights reserved.</p>
            </div>
                        {/* quick link */}
            <div>
                <h3 className='font-bold text-[16px]'>Quick Link</h3>
                <ul className='gap-1 flex flex-col'>
                <li className='text-[15px] text-gray-400 font-medium'>Home</li>
                <li className='text-[15px] text-gray-400 font-medium'>Events</li>
                <li className='text-[15px] text-gray-400 font-medium'>Categories</li>
                <li className='text-[15px] text-gray-400 font-medium'>Create Event</li>

                </ul>
            </div>
            <div >
                <h3 className='font-bold text-[16px]'>Company</h3>
                <ul className='gap-1 flex flex-col'>
                <li className='text-[15px] text-gray-400 font-medium'>About Us</li>
                <li className='text-[15px] text-gray-400 font-medium'>Contact Us</li>
                <li className='text-[15px] text-gray-400 font-medium'>Terms & Conditions</li>
                <li className='text-[15px] text-gray-400 font-medium'>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-[16px]'>Support</h3>
                <ul className='gap-1 flex flex-col'>
                <li className='text-[15px] text-gray-400 font-medium'>Help Center</li>
                <li className='text-[15px] text-gray-400 font-medium'>FAQs</li>
                <li className='text-[15px] text-gray-400 font-medium'>Community</li>
                <li className='text-[15px] text-gray-400 font-medium'>Report an issue</li>
                </ul>
            </div>
            <div className='flex gap-3 flex-col w-70'>
                <h3 className='font-bold text-[16px]'>Follow Us</h3>
                
                <div className='flex gap-3  '>
                    <span className='border justify-center p-2 rounded-full border-gray-300'><FaFacebookF/></span>
                    <span className='border justify-center p-2 rounded-full border-gray-300'><FaTwitter/></span>
                    <span className='border justify-center p-2 rounded-full border-gray-300'><FaInstagram /></span>
                    <span className='border justify-center p-2 rounded-full border-gray-300'><FaLinkedinIn /></span>
                
                </div>
                <div>
                    <p className='text-[16px] font-bold'>Download App</p>
                    <div className='w-full py-2 flex gap-2 '>
                        <div className='border flex gap-2 leading-4 p-1 rounded-[5px] justify-center px-2'>
                            <span className='flex items-center'><FaApple size={25}/></span>
                            <div className='flex flex-col '>
                                <p className='text-[10px]'>Download on the </p>
                                <span className='text-[16px]'>App Store</span>
                                
                            </div>

                        </div>

                        {/* Android Application */}
                        <div className='border flex gap-2 leading-4 p-1 rounded-[5px] justify-center px-2'>
                            <span className='flex items-center'><FaGooglePlay size={25}/></span>
                            <div className='flex flex-col '>
                                <p className='text-[10px]'>Download on the </p>
                                <span className='text-[16px]'>Play Store</span>
                                
                            </div>

                        </div>
                    </div>
                </div>
                
                
                
            </div>

        </div>
        
        

    </div>
    </div>
  )
}

export default Footer