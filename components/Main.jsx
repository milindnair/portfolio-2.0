import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from './ThemeContext';

const Main = () => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? '#1a1a1a' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1f2937';

  

  return (
    <div id='home' className={`w-full h-screen text-center bg-${bgColor} text-${textColor}`}>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className={`py-4 text-${textColor}`}>
            Hi, I&#39;m <span className={`text-[#5651e5]`}> Milind</span>
          </h1>
          <TypeAnimation
            sequence={[
              'I am a Full-Stack Web Developer',
              1000,
              'I am a Mobile App Developer',
              1000,
              'I am a Deep-learning enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className={`py-2 text-${textColor}`}
            style={{ fontSize: '2.25rem', display: 'inline-block' }}
            repeat={Infinity}
          />

          <p className={`py-4 text-${textColor} sm:max-w-[70%] m-auto w-full`}>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/milind-nair26/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={`rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300`}>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/milindnair'
              target='_blank'
              rel='noreferrer'
            >
              <div className={`rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300`}>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className={`rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300`}>
                <AiOutlineMail />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
