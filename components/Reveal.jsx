import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const handleScroll = () => {
    const elementTop = ref.current.offsetTop;
    const elementHeight = ref.current.offsetHeight;
    const isElementInView = window.scrollY + window.innerHeight > elementTop + elementHeight / 2;

    if (isElementInView) {
      mainControls.start("visible");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width: '100%', overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div>
        {/* Add any additional elements here if needed */}
      </motion.div>
    </div>
  );
};

export default Reveal;
