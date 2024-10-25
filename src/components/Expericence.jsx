import React from 'react'

const Expericence = () => {

    const details = [
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
        {
            img: 'https://c1.wallpaperflare.com/preview/684/949/168/al-abrar-mecca-saudi-arabia-hotel-building.jpg',
            text: 'Lorem, ipsum dolor.'
        },
    ]

  return (
    <div className='w-[90%] mx-auto mb-3'>
        <h1 className='font-bold text-blue-600 text-4xl'>Experience Something New</h1>
        <p className='text-gray-500 my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci error voluptates officiis cum laudantium cumque debitis optio quisquam. Maiores, et!</p>
        <div className='w-full grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4'>
            {details.map((detail) => (  
                <div className='w-full h-[300px] relative'>
                    <img src={detail.img} className='h-full w-full object-cover' alt="" />
                    <div className='absolute inset-0 bg-black/40 w-full h-full flex items-center justify-center cursor-pointer group'>
                        <h1 className='text-white text-2xl font-semibold bottom-2 absolute group-hover:relative '>{detail.text}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Expericence