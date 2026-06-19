import React from 'react'


const Trustedsites = () => {
    const brands = [
  {
    name: "Google",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png"
  },
  {
    name: "Airbnb",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
  },
  {
    name: "Spotify",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
  },
  {
    name: "Amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  }
];
  return (
    <div className='max-w-7xl mx-auto pb-6 pt-15'>
        <div className='flex justify-center '>
        <p className='text-[#2B7FFF] text-[15px] font-medium'>Trusted by thousands of organisers and attendes</p>
    </div>
    <div className='flex justify-center gap-15 pb-6'>
    {brands.map((Event, idx)=> (

    
    <div key={idx} className='flexborder  flex-row gap-10 py-8'>
        <img src={Event.img} alt="" className=' h-7 object-contain' />

    </div>
    ))}
    </div>






   
    
    </div>
  )
}

export default Trustedsites