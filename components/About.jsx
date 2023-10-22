import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myimg from '../public/assets/myimg.png';
import { useTheme } from './ThemeContext';
import Reveal from './Reveal';

const About = () => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? '#1a1a1a' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1f2937';

  return (
    <Reveal>
    <div id='about' className={`w-full md:h-screen p-2 flex items-center py-16`} style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest' style={{ color: textColor }}>
            About
          </p>
          <h2 className='py-4' style={{ color: textColor }}>
            Who I Am
          </h2>
          <p className='py-2'>
            I am a third year student pursuing my B.Tech in Computer Science and
            Engineering from <a href=''><b><u>KJ Somaiya College of Engineering</u></b></a>, Mumbai with
            a honours in Data Science and Analytics. I am currently serving as 
            the <b><u>Joint Technical Head of <a href=''>CSI KJSCE</a></u></b>. Previously, I have worked 
            as an Embedded Systems Programmer at <a href=''>Team KJSCE Robocon</a>.
          </p>
          <p className='py-2'>
            I specialize in <b>full stack</b> mobile responsive front-end applications
            that connect with APIs and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, JavaScript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2'>
            Apart from being a web developer, I also indulge in developing 
            <b>mobile applications using Flutter and Dart</b>. I am also a deep learning
            enthusiast and have worked on various projects related to computer vision
            and natural language processing.
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer' style={{ color: textColor }}>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={myimg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
    </Reveal>
  );
};

export default About;
