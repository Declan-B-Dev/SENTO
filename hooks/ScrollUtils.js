// hooks/useScrollNavigation.js

import { useState, useEffect, useRef } from 'react';

const scrollUtils = () => {
  const refs = {
    home: useRef(null),
    graphic: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [disableActive, setDisableActive] = useState(false);

  const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
  const activeOffset = 250; // Offset to identify active section based on center of screen
  const timeout = 700; 
  
  const scrollTo = (targetRef, sectionName) => {
    if (sectionName === 'contact') {
      window.scrollTo({ top: bottom, behavior: 'smooth' });
    } else {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveSection(sectionName); // Set active section when navigating
    setDisableActive(true); // Timeout to allow smooth scrolling to complete before searching for active section
    setTimeout(() => {
      setDisableActive(false);
    }, timeout);
  };

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update the active section
  useEffect(() => {
    if (disableActive) {
      return;
    } else if (scrollY + activeOffset >= refs.contact.current?.offsetTop) {
      setActiveSection('contact');
    } else if (scrollY + activeOffset >= refs.graphic.current?.offsetTop) {
      setActiveSection('graphic');
    } else {
      setActiveSection('home');
    }
  }, [scrollY]); // Re-run when scrollY changes

  return {
    refs,
    activeSection,
    scrollTo,
  };
};

export default scrollUtils;
