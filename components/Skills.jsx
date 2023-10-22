import Image from 'next/image';
import React, { useEffect } from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import mongo from '../public/assets/skills/mongo.png';
import node from '../public/assets/skills/node.png';
import materialui from '../public/assets/skills/materialui.png';
import express from '../public/assets/skills/express1.png';
import mysql from '../public/assets/skills/mysql.png';
import cpp from '../public/assets/skills/c++.png';
import flutter from '../public/assets/skills/flutter.png';
import AWS from '../public/assets/skills/aws.png';
import arduino from '../public/assets/skills/arduino.png';

import { useTheme } from './ThemeContext';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { darkMode } = useTheme();

  const cardStyle = {
    backgroundColor: darkMode ? '#1a202c' : '',
    color: darkMode ? '#ffffff' : '#1f2937',
    boxShadow: darkMode
      ? '10px 10px 20px #0d1117, -10px -10px 20px #2b303b'
      : '10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff',
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        translateX: 0,
        translateY: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full' id="skills">
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Skills
      </p>
      <h2 className='py-4'>What I Can Do</h2>
      <motion.div
        ref={ref}
        className='grid grid-cols-2 lg:grid-cols-4 gap-8'
        initial={{
          opacity: 0,
          translateX: -50,
          translateY: -50,
        }}
        animate={controls}
        style={{ ...cardStyle }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            style={{ ...cardStyle }}
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={skill.image} width='64px' height='64px' alt={skill.name} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{skill.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const skillsData = [
  { name: 'HTML', image: Html },
  { name: 'CSS', image: Css },
  { name: 'JavaScript', image: Javascript },
  { name: 'React', image: ReactImg },
  { name: 'Tailwind', image: Tailwind },
  { name: 'Firebase', image: Firebase },
  { name: 'Github', image: Github },
  { name: 'Next', image: NextJS },
  { name: 'MongoDB', image: mongo },
  { name: 'NodeJS', image: node },
  { name: 'MaterialUI', image: materialui },
  { name: 'ExpressJS', image: express },
  { name: 'MySQL', image: mysql },
  { name: 'C++', image: cpp },
  { name: 'Flutter', image: flutter },
  // { name: 'AWS', image: AWS },
  {name:'Arduino', image: arduino}

];

export default Skills;
