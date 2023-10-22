import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

function Experience() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [selected, setSelected] = useState(0);
  const underlineRef = useRef(null);

  useEffect(() => {
    const transformSelected = () => {
      if (underlineRef.current) {
        underlineRef.current.style.top = `${selected * 2.5}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "CSI KJSCE",
      role: "Joint Technical Head",
      url: "https://www.linkedin.com/company/csi-kjsce/",
      start: "July 2023",
      end: "Present",
      shortDescription: [
        "As the Joint Technical Head of CSI KJSCE, I am responsible for leading a team of 20+ members to organize and execute various technical events throughout the year.",
        "Additionally, I am also responsible for managing the technical aspects of the organization, such as the website and other technical projects.",
        "Our council was the first in 20 years to create an app called Eventio that handled over 400 users concurrently during our flagship event, Road To Programming.",
        "Apart from being involved in development , i also was the speaker where i shared my knowledge on software development"
      ],
    },
    {
      name: "TKR",
      role: "Embedded Systems Programmer",
      url: "https://www.linkedin.com/company/teamkjscerobocon/",
      start: "October 2021",
      end: "April 2023",
      shortDescription: [
        "Played an important role in the development of the robot for the national level robotics competition, ABU Robocon 2021 where we achieved All India Rank 6",
        " As an embedded system programmer , i worked with microcontrollers such as arduino , Raspberry Pi ",
        "I was responsible for writing code for the robots load picking mechanism and movement through bluetooth communication and PS5 and also for the vision system",
      ],
    },
  ];
  return (
    <motion.div 
    className="experience ml-40"
    id="experience"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}
    
  >
    <div className="title">
      <h2 style={{
              color: darkMode ? "#ffffff" : "#1f2937",}}>Work&apos;Experience</h2>
    </div>
    <div className="container">
      <ul className="exp-slider">
        <div ref={underlineRef} className="underline"></div>
        {expereinces.map((expereince, index) => (
          <li
            className={`exp-slider-item ${
              index === selected ? "exp-slider-item-selected" : ""
            }`}
            onClick={() => setSelected(index)}
            key={expereince.name}
          >
            <span >{expereince.name }</span>
          </li>
        ))}
      </ul>
      <div className="exp-details">
        <div className="exp-details-position">
          <h3 >
            <span >{expereinces[selected].role}</span>
            <span className="exp-details-position-company">
              &nbsp;@&nbsp;
              <Link href={expereinces[selected].url} className="link">
                {expereinces[selected].name}
              </Link>
            </span>
          </h3>
          <p className="exp-details-range">
            {expereinces[selected].start} - {expereinces[selected].end}
          </p>
          <ul className="exp-details-list">
            {expereinces[selected].shortDescription.map(
              (description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
  );
}

export default Experience;