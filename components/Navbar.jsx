import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// import { useRouter } from 'next/router';
// import NavLogo from '../public/assets/navLogo.png'
import logolight from '../public/assets/logolight1.png'
import logolight2 from '../public/assets/logolight2.png'
import logodark from '../public/assets/logodark3.png'
import logodark2 from '../public/assets/logodark2.png'
import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  console.log(darkMode)
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const navBg = darkMode ? '#2d2d2d' : '#ecf0f3';
  const linkColor = darkMode ? '#ffffff' : '#1f2937';


  useEffect(() => {
    // Apply dark mode styles when darkMode state changes
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark-mode', darkMode);
    }

  }, [darkMode]);


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);




  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? ' fixed w-full h-[100px]  shadow-xl z-[100] ease-in-out duration-300'
          : ' fixed w-full h-[120px] z-[100]'
      }
    >
      <div className={`flex justify-between items-center w-full h-full px-2 2xl:px-16 ${darkMode ? 'dark-mode' : ''}`}>
        <Link href='/' >
          <a>
            <Image
              src={
                darkMode
                  ? shadow
                    ? logodark2
                    : logodark
                  : shadow
                    ? logolight2
                    : logolight
              }
              alt='/'
              width={shadow ? '310' : '300'}
              height={shadow ? '250' : '300'}
              className='cursor-pointer hidden'
              style={{ scale: `${darkMode ? '0.4' : '0.5'}`, marginTop: `${shadow ? '2px' : '0px'}`, marginLeft: `${shadow ? '-6px' : '0px'}` }}
            />

          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#experience'>Experience</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              {
                darkMode ? <CiLight size={25} onClick={toggleDarkMode} /> : <MdDarkMode size={25} onClick={toggleDarkMode} />
              }

            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className='flex flex-row  gap-5'>
            <div className='ml-10 text-sm uppercase hover:border-b md:hidden'>
              {
                darkMode ? <CiLight size={25} onClick={toggleDarkMode} /> : <MdDarkMode size={25} onClick={toggleDarkMode} />
              }

            </div>

            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
   
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
          style={{ color: `${darkMode == true ? "black" : "white"}` }}
        >
          <div >
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={logolight}
                    width='170'
                    height='200'
                    alt='/'
                  />
                </a>
              </Link>
              {
                nav ?
                  <div
                    onClick={handleNav}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '
                  >
                    <AiOutlineClose />
                  </div>
                  : <></>
              }
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/Milind-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireMilind'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
