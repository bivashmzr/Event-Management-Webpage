import React from 'react'
import image2 from "../assets/Image/image2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersRays } from '@fortawesome/free-solid-svg-icons'


const Createevent = () => {
    const EventData =[
        {
            icon:<FontAwesomeIcon icon={faUsersRays} style={{color: "#7C3AED",}} fontSize={18}/>,
            title:"Large Audience",
            caption:"Get more visibility and reach a larger audience"
        },
        {
            icon:<FontAwesomeIcon icon={faUsersRays} style={{color: "#7C3AED",}} fontSize={18}/>,
            title:"Large Audience",
            caption:"Get more visibility and reach a larger audience"
        },
        {
            icon:<FontAwesomeIcon icon={faUsersRays} style={{color: "#7C3AED",}} fontSize={18}/>,
            title:"Large Audience",
            caption:"Get more visibility and reach a larger audience"
        },
        {
            icon:<FontAwesomeIcon icon={faUsersRays} style={{color: "#7C3AED",}} fontSize={18}/>,
            title:"Large Audience",
            caption:"Get more visibility and reach a larger audience"
        }
       
    ]
  return (
    <div className='max-w-7xl mx-auto px-4 py-2'>
        <div className='bg-[#4C2BD4] px-13 py-3 rounded-2xl flex'>
            <div className='w-[40%] flex flex-col items justify-center'>
                <h2 className='font-bold text-[20px] text-white'>Create Your Own Event</h2>
                <p className='text-white py-5 w-90'>Share yout ideas, bring people together and make your event a huge success</p>
                <button className='bg-white text-black px-4 py-3 rounded-md text-[13px] font-bold w-30'>Create Event</button>
            </div>
            <div className='w-[50%]'>
                <img className='' src={image2} alt="" />

            </div>
            

        </div>
        
        {/* -----------Section 2----------- */}
        <div className='flex flex-col py-6'>
            <h3 className='py-4 font-bold text-[22px]'>Why Choose Us</h3>
            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 '>
        {EventData.map((event, idx)=>(

        
            <div key={idx} className='bg-white  rounded-2xl border-2 border-gray-200 shadow-md w-full flex flex-col p-4 hover:bg-gray-100 duration-300 transition hover:shadow-2xl'>
                <span className=' w-9 bg-blue-50 h-9 items-center flex justify-center rounded-full'>{event.icon}</span>
                <h3 className='font-bold text-[16px]'>{event.title}</h3>
                <p className='font-medium text-gray-500 text-[14px]'>{event.caption}</p>
            </div>
            
))}
            </div>
            </div>



    </div>
  )
}

export default Createevent