import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import '../themes/graphicPanel.css';
import logo1 from '../assets/logos/mx4.jpg';
import logo2 from '../assets/logos/mx2.jpg';
import logo3 from '../assets/logos/mx3.jpg';
import useScreenWidth from '../hooks/ScaleUtils';

const GraphicPanel = React.forwardRef((props, ref) => {
  const [isNarrow, setIsNarrow] = useState(false);
  const [isMini, setIsMini] = useState(false);
  const { screenWidth, scaleLogo, scaleFont } = useScreenWidth();

  const scalar = 290;

  // Text content for the sections
  const para3 = `We process your audio, removing excessive background noise and 
                ensuring that all speakers are at the proper volume.
                We also trim the audio to remove long silences, coughs and 'umms'
                while retaining a natural warmth.`;
  const para2 = `We can write the perfect score to match your podcast or ad.
                Whether you are looking for a polished snappy refrain for your 
                investigative piece, or moody background sounds for your campy
                true crime piece, we can deliver.`;
  const para1 = `We deliver that clean mix your song needs to ensure it 
                stands out. Our mix engineers are experienced in matching 
                the demands of the streaming to ensure that your music will sound
                good regardless of whether it is being played on a phone via Spotify
                or at a club.`;

  // Check window size to adjust layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsNarrow(width <= 1268); // Set true if window is 1268px or smaller
      setIsMini(width <= 768); // Set true if window is 768px or smaller
    };

    // Set initial layout on load
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className={`container ${isNarrow ? 'container-narrow' : ''}`} ref={ref}>
      <div className="section section-1" href="https://www.vectorstock.com/royalty-free-vector/audio-icons-vector-36973884">
        <div className="box">
          { isNarrow && <img src={logo1} alt="Logo 1" style={{width: `${scaleLogo(scalar, screenWidth)}px`, height: `${scaleLogo(scalar, screenWidth)}px`}} className="logo logo-1"/>}
          { !isNarrow && <img src={logo1} alt="Logo 1" className="logo logo-1"/>}
          <div className={`text-wrapper ${isNarrow ? 'text-wrapper-1' : 'text-wrapper-1'}`}>
            <h1 style={styles.heading}>Post Production</h1>
            <div className="text">
              <p>{para1}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - dynamically adjust class based on screen size */}
      <div className={`section ${isNarrow ? 'section-1' : 'section-3'}`}>
        <div className={`box ${isNarrow ? '' : 'box-3'}`}>
          { !isNarrow && <img src={logo3} alt="Logo 3" className="logo logo-3" /> }
          { isNarrow && isMini && <img src={logo3} style={{width: `${scaleLogo(scalar, screenWidth)}px`, height: `${scaleLogo(scalar, screenWidth)}px`}} alt="Logo 3" className="logo logo-2" /> }
          <div className={`text-wrapper ${isNarrow ? 'text-wrapper-2' : 'text-wrapper-3'}`}>
            <h1 style={styles.heading}>Mix Engineering</h1>
            <div className="text">
              <p>{para3}</p>
            </div>
          </div>
          { isNarrow && !isMini && <img src={logo3} style={{width: `${scaleLogo(scalar, screenWidth)}px`, height: `${scaleLogo(scalar, screenWidth)}px`}} alt="Logo 3" className="logo logo-2" /> }
        </div>
      </div>

      <div className="section section-2">
        <div className="box">
          { isNarrow && <img src={logo2} style={{width: `${scaleLogo(scalar, screenWidth)}px`, height: `${scaleLogo(scalar, screenWidth)}px`}} alt="Logo 3" className="logo logo-1" /> }
          <div className={`text-wrapper ${isNarrow ? 'text-wrapper-1' : 'text-wrapper-2'}`}>        
            <h1 style={styles.heading}>Musical Scoring</h1>
            <div className="text">
              <p>{para2}</p>
            </div>
          </div>
          { !isNarrow && <img src={logo2} alt="Logo 2" className="logo logo-2" /> }
        </div>
      </div>

    </div>
  );
});

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    padding: '0%',
  },
});

export default GraphicPanel;
