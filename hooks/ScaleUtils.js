import '../themes/index.css'
import { useState, useEffect } from 'react';

// Function to scale font sizes based on screen width
const scaleFont = (size, width) => (width / 1200) * size + (1200 / width) * 6; // Base screen width = 1200
const scaleSmallFont = (size, width) => Math.max((width / 1000) * size, 9.5); // Base screen width = 1000
const scaleLogo = (size, width) => Math.max((width / 1200) * size,170); // Base screen width = 1200
const scaleClip = (size, width) => (width / 1200) * size; // Base screen width = 1200

// Custom hook to get screen width and scale fonts
const ScaleUtils = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial layout on load
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screenWidth,
    scaleFont,
    scaleSmallFont,
    scaleLogo,
    scaleClip,
  };
};

export default ScaleUtils;
