import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './ThemeContext';
import contact from '../public/assets/contact.jpg';

const Contact = () => {
  const { darkMode } = useTheme();
  const bgColor = darkMode ? '#1a1a1a' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1f2937';
  const shadowStyle = darkMode ? 'md' : 'xl';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ContactHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const colRef = collection(db, 'contacts');
      await addDoc(colRef, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success('Message sent successfully!');

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div id='contact' className={`w-full lg:h-screen bg-${bgColor}`}>
      <ToastContainer />
      <div className={`max-w-[1240px] m-auto px-2 py-16 w-full text-${textColor}`}>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className={`col-span-3 lg:col-span-2 w-full h-full shadow-${shadowStyle} shadow-gray-400 rounded-xl p-4`}>
            <div className='lg:p-4 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={"/../public/assets/contact.jpg"} width={400} height={300} alt='/' />
              </div>
              <div>
                <h2 className='py-2'>Milind Nair</h2>
                <p>Full stack Web and App developer</p>
                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a href='https://www.linkedin.com/in/Milind-briley-50056920a/' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/fireMilind' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className={`col-span-3 w-full h-auto shadow-${shadowStyle} shadow-gray-400 rounded-xl lg:p-4`}>
            <div className='p-4'>
              <form action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      style={{ color: 'black' }}
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      style={{ color: 'black' }}
                      onChange={handleInputChange}
                      value={formData.phone}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    style={{ color: 'black' }}
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    style={{ color: 'black' }}
                    onChange={handleInputChange}
                    value={formData.subject}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    style={{ color: 'black' }}
                    onChange={handleInputChange}
                    value={formData.message}
                  ></textarea>
                </div>
                <button className={`w-full p-4 text-gray-100 mt-4 shadow-${shadowStyle}`} onClick={ContactHandler}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className={`text-${textColor}`} size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
