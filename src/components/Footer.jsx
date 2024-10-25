import React from 'react'
import img from '../images/footer2.jpeg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full h-[1200px] lg:h-[500px] relative border-t'>
        <img src={img} className='w-full h-full' alt="" />
        <div className='w-[60%]  h-full absolute left-10 lg:left-60 top-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full pt-5'>
                <div className='w-full'>
                    <h1 className='text-2xl italic text-purple-700'>About</h1>
                    <ul className='space-y-2 mt-2 text-gray-600'>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                        <li>item 6</li>
                        <li>item 7</li>
                        <li>item 8</li>
                        <li>item 9</li>
                        <li>item 10</li>
                    </ul>
                </div>
                <div className='w-full mt-8 lg:mt-0'>
                    <h1 className='text-2xl italic text-purple-700'>Get in Touch</h1>
                    <ul className='space-y-2 mt-2 text-gray-600'>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                    <h1 className='text-2xl mt-4 italic text-purple-700'>Sections</h1>
                    <ul className='space-y-2 mt-2 text-gray-600'>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                </div>
                <div className='w-full mt-8 lg:mt-0'>
                    <h1 className='text-2xl italic text-purple-700'>Follow Us</h1>
                    <div className='w-[70%] mt-2 flex justify-between items-center'>
                        <FaFacebook className='cursor-pointer hover:text-purple-600' size={20}/>
                        <FaInstagram className='cursor-pointer hover:text-purple-600' size={20}/>
                        <FaLinkedin className='cursor-pointer hover:text-purple-600' size={20}/>
                        <FaTwitter className='cursor-pointer hover:text-purple-600' size={20}/>
                        <FaYoutube className='cursor-pointer hover:text-purple-600' size={20}/>
                    </div>
                    <h1 className='text-2xl italic text-purple-700 mt-5'>Get Cinnamon in Your Inbox</h1>
                    <div className='w-full flex flex-col items-center'>
                        <input type="email" placeholder='Email Addess' className='w-full pl-3 h-[50px] border mt-2 border-gray-300' />
                        <div className='w-full flex justify-start mt-3'>
                            <input type="checkbox" />
                            <p className='text-gray-600 pl-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus, exercitationem earum eos sit voluptatibus doloribus vero veritatis. Natus, impedit.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer