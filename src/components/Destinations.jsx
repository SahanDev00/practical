import React from 'react'
import lanka from '../images/lanka.png'

const Destinations = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-purple-700 text-4xl italic'>OUR DESTINATIONS</h1>
        <select className='w-[700px] h-[40px] border mt-2' name="Destinations" id="">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
        </select>

        <div className='relative mt-10'>
            <img src="https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg" className='w-[700px] h-[400px] object-cover' alt="" />
            <div className=' shadow-md w-[300px] h-[300px] bg-white absolute border p-5 -right-32 top-12 flex flex-col justify-center'>
                <h1 className='text-2xl text-purple-500 italic'>Cinnamon Life</h1>
                <p className='text-sm mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolores alias. Minus accusantium itaque dolore deserunt iure optio? Beatae, mollitia?</p>
                <button className='w-[200px] py-2 mt-5 border bg-purple-600 text-white'>Discover Now</button>
            </div>
            <img className='absolute w-[400px] -left-44  top-0' src={lanka} alt="" />
        </div>
    </div>
  )
}

export default Destinations