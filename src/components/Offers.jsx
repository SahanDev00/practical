import React from 'react'

const Offers = () => {

  return (
    <div className='w-[80%] mx-auto h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-center font-semibold'>Offers</h1>
        <div className='mt-4 grid grid-cols-3 gap-5 w-full'>
            <div className='w-[90%] mx-auto relative border flex flex-col items-center justify-center h-[400px]'>
                <p className='absolute top-2 text-sm bg-white/80 rounded-l-full px-2 right-0'>Member Exclusive</p>
                <img src="https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg" className='w-full h-[150px] object-cover' alt="" />
                <p className='text-xs text-center bg-gray-300 rounded-full px-2 py-1 mt-3 '>stay</p>
                <div className='w-full h-[140px] flex flex-col justify-center items-center'>
                    <h1 className='text-center text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='text-sm text-gray-600 text-center w-[90%] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, provident!</p>
                </div>
                <div className='w-full h-[100px] flex flex-col justify-center items-center'>
                    <h1 className='text-center'>Lorem <span className='font-bold'>ipsum dolor</span> sit amet consectetur.</h1>
                    <button className='w-[120px] mt-2 py-2 border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'>View Details</button>
                </div>
            </div>

            <div className='w-[90%] relative mx-auto border flex flex-col items-center justify-center h-[400px]'>
                <p className='absolute top-2 text-sm bg-white/80 rounded-l-full px-2 right-0'>Member Exclusive</p>
                <img src="https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg" className='w-full h-[150px] object-cover' alt="" />
                <p className='text-xs text-center bg-gray-300 rounded-full px-2 py-1 mt-3 '>stay</p>
                <div className='w-full h-[140px] flex flex-col justify-center items-center'>
                    <h1 className='text-center text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='text-sm text-gray-600 text-center w-[90%] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, provident!</p>
                </div>
                <div className='w-full h-[100px] flex flex-col justify-center items-center'>
                    <h1 className='text-center'>Lorem <span className='font-bold'>ipsum dolor</span> sit amet consectetur.</h1>
                    <button className='w-[120px] mt-2 py-2 border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'>View Details</button>
                </div>
            </div>

            <div className='w-[90%] mx-auto border flex flex-col items-center justify-center h-[400px]'>
                <img src="https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg" className='w-full h-[150px] object-cover' alt="" />
                <p className='text-xs text-center bg-gray-300 rounded-full px-2 py-1 mt-3 '>stay</p>
                <div className='w-full h-[140px] flex flex-col justify-center items-center'>
                    <h1 className='text-center text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='text-sm text-gray-600 text-center w-[90%] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, provident!</p>
                </div>
                <div className='w-full h-[100px] flex flex-col justify-center items-center'>
                    <button className='w-[120px] mt-2 py-2 border border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-white'>View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers