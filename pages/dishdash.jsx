import Image from 'next/image';
import React from 'react';
// import DishdashImg from '../public/assets/projects/Dishdash.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import dishdash from '../public/assets/projects/dishdash.png'
import Link from 'next/link';

const Dishdash = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={dishdash}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>DishDash</h2>
          <h3>MERN stack / TailwindCss</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            DishDash is a social media website where users can create their own
            account and post their thoughts and images.Users can also follow
            other users and like their posts.Users can also edit their profile
            and update their profile picture.Users can also search for other
            users and view their profile.Users can also view their own profile
            and view their posts.
            The website is built using MERN stack and Tailwind CSS.
          </p>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/milindnair/DishDash'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Dishdash;
