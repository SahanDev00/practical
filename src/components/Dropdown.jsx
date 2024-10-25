import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Dropdown = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    'About',
    'Rooms & Suites',
    'Dining',
    'Experience',
    'Events',
    'Gallery',
    'Offers',
    'More'
  ];

  return (
    <div className='w-full bg-stone-800 h-[40px] mt-2 relative z-50'>
      <div className='w-[80%] flex justify-between mx-auto items-center h-full'>
        <div className='w-[90%] flex justify-between items-center h-full'>
          <ul className='uppercase flex w-full items-center h-full text-white font-semibold'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className='cursor-pointer flex justify-center items-center hover:bg-white pl-4 pr-4 hover:text-stone-800 group'
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item}
                {index < 7 && <RiArrowDropDownLine className='group-hover:rotate-180' size={30} />}

                
                {hoveredItem === index && (
                  <div className='absolute top-[100%] left-0 bg-white p-4 text-stone-800 w-screen h-[100px]'>
                    <p>Details about {item}</p>
                    <p>Additional information or links.</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
            <div className='w-[10%]'>
                <button className='px-3 py-1 border border-white text-white hover:text-stone-800 hover:bg-white font-semibold text-sm'>FIND A HOTEL</button>
            </div>
      </div>
    </div>
  );
};

export default Dropdown;
