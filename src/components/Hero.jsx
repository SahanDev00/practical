import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlCalender } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';
import { CiShoppingTag } from 'react-icons/ci';

const Hero = () => {

    const slides = [
        {
            name: 'example text',
            text: 'Explore the best interiors designed with care and creativity.',
            img: 'https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg'
        },
        {
            name: 'example text',
            text: 'Explore the best interiors designed with care and creativity.',
            img: 'https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg'
        },
        {
            name: 'example text',
            text: 'Explore the best interiors designed with care and creativity.',
            img: 'https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg'
        },
    ]
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000, 
  };

  return (
    <div className='w-full overflow-hidden relative h-[85vh]'>
      <Slider {...settings}>
        {slides.map((slide) => (
            <div className='h-[85vh] relative'>
                <img
                    src={slide.img}
                    className='w-full h-full object-cover'
                    alt=""
                />
                <div className='absolute w-full h-full inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50'>
                    <h1 className='text-4xl font-semibold'>{slide.name}</h1>
                    <p className='mt-2 text-lg'>{slide.text}</p>
                </div>
            </div>
        ))}
      </Slider>
      <div className='absolute bottom-3 left-44 xl:w-[1200px] h-[80px] bg-white/40 p-2'>
        <div className='w-full h-full flex gap-1'>
            <div className='w-[350px] relative h-full border bg-white grid grid-cols-2'>
                <div className='w-full h-full border-r flex items-center justify-center gap-2'>
                    <SlCalender size={20}/>
                    <h1 className='text-sm cursor-pointer'>OCT 23, 2024</h1>
                </div>
                <div className='w-full h-full border-r flex items-center justify-center gap-2'>
                    <h1 className='text-sm cursor-pointer'>OCT 26, 2024</h1>
                </div>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <h1 className='bg-gray-400/50 px-1 py-1 rounded-full text-xs'>1 night</h1>
                </div>
            </div>
            <div className='w-[320px] h-full border bg-white p-2'>
                <div className='w-full h-full border-r flex items-center gap-2'>
                        <FaUser size={20}/>
                        <h1 className='text-sm cursor-pointer'>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
            <div className='w-[350px] h-full border bg-white'>
                <div className='w-full h-full border-r flex p-2 items-center gap-2'>
                    <CiShoppingTag size={25} />   
                            <h1 className='text-sm cursor-pointer'>Lorem ipsum dolor</h1>
                    </div>
            </div>
            <div className='xl:w-[150px] ml-5  bg-yellow-800'>
                <button className='w-full h-full text-white text-lg'>Search</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
