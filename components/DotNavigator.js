import React from 'react';

const DotNavigator = ({ activeSection, scrollTo, refs }) => {
  // Define the sections with names and labels
  const navigatorTop = "50%";
  const sections = [
    { name: 'home', label: 'Home', ref: refs.home },
    { name: 'graphic', label: 'Services', ref: refs.graphic },
    { name: 'contact', label: 'Contact', ref: refs.contact },
  ];

  return (
    <div style={{ ...styles.navigator, top: navigatorTop }}>
      {sections.map((section) => (
        <div
          key={section.name}
          onClick={() => scrollTo(section.ref, section.name)} // Scroll to the section when clicked
          style={{
            ...styles.dot,
            ...(activeSection === section.name && styles.activeDot), // Highlight active dot
          }}
        >
          {/* Text inside the dot is hidden for this version */}
        </div>
      ))}
    </div>
  );
};

const styles = {
  navigator: {
    position: 'fixed',  // Fixed position relative to the viewport
    left: '10px',       // Align to the left
    top: '50%',         // Center vertically
    transform: 'translateY(-50%)',
    zIndex: 1000,       // Ensure it's above the other content
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the dots horizontally
  },
  dot: {
    width: '10px',
    height: '10px',
    marginBottom: '20px',
    borderRadius: '50%',
    backgroundColor: '#bbb',  // Default background color for dots
    cursor: 'pointer',       // Show pointer cursor on hover
  },
  activeDot: {
    backgroundColor: '#FF6347', // Highlight active dot with a red color
  },
};

export default DotNavigator;
