import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dishdash from '../public/assets/projects/dishdash.png'
import eventhub from '../public/assets/projects/eventhub.png'
import taskflow from '../public/assets/projects/taskflow.png'
import bookmydoc from '../public/assets/projects/bookmydoc.png'
import ProjectItem from './ProjectItem';
import prayas1 from '../public/assets/projects/prayas1.png'
import { useTheme } from './ThemeContext';

const Projects = () => {
  const { darkMode } = useTheme();
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            darkMode={darkMode}
            title='DishDash - social media website'
            backgroundImg={dishdash}
            projectUrl='/dishdash'
            tech='MERN STACK'
          />
          <ProjectItem
            darkMode={darkMode}
            title='EventHub - event management website'
            backgroundImg={eventhub}
            projectUrl='/eventhub'
            tech='HTML,CSS,JS,PHP'

          />
          <ProjectItem
            darkMode={darkMode}
            title='TaskFlow - task management website'
            backgroundImg={taskflow}
            projectUrl='/taskFlow'
            tech='Next JS'

          />
          <ProjectItem
            darkMode={darkMode}
            title='BookMyDoc - doctor appointment website'
            backgroundImg={bookmydoc}
            projectUrl='/BookMyDoc'
            tech='MERN STACK'

          />
          <div className={`relative flex items-center justify-center h-auto w-full shadow-${darkMode == true ? 'md' : 'lg'} shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]`}>
            <Image className='rounded-xl group-hover:opacity-10 ' src={prayas1} alt='/' style={{ scale: "0.7" }} />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center w-full'>Prayaas - helping marginal farmers </h3>
              <p className='pb-4 pt-2 text-white text-center'>NextJs / MongoDb / node-JS / Express-JS</p>
              <Link href="/Prayas">
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
