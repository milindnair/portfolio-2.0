import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import logodark from '../public/assets/logodark3.png';

const SplashPage = ({ onTransitionComplete }) => {
  const [isMounted, setIsMounted] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const animateSplash = async () => {
      // Use controls.start() only when the component has mounted
      if (isMounted) {
        await controls.start({ opacity: 1 });

        await new Promise(resolve => setTimeout(resolve, 2000));

        await controls.start({ opacity: 0, y: -50, transition: { duration: 0.5 } });

        // onTransitionComplete();
      }
    };

    animateSplash();

    // Cleanup on component unmount
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, controls]);

  return (

    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={controls}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Your Logo */}
      <Image src={logodark} alt="Your Logo" width={300} height={300} />

      {/* Your Text */}
      <motion.p
        style={{
          color: '#fff',
          marginTop: '20px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: '1px',
        }}
      >
        Turning Code into Canvas: Web, Apps, and Beyond
      </motion.p>
    </motion.div>
  );
};

export default SplashPage;
