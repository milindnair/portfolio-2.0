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
import SplashPage from "../components/Splash"; // Import your SplashPage component

function MyApp({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashPage />
      ) : (
        <ThemeProvider>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          {/* Other components */}
          <Component {...pageProps} />;
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
