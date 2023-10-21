// app.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ThemeProvider } from "../components/ThemeContext";
import Reveal from "../components/Reveal";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === null) {
      localStorage.setItem("darkMode", "false");
    } else {
      setDarkMode(storedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <>
      <ThemeProvider>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* <Main darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} /> */}
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
