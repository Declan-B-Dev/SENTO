import React from 'react';
import Header from './components/Header';
import GraphicPanel from './components/GraphicPanel';
import Footer from './components/Footer';
import { theme } from './themes/theme';
import Landing from './components/Landing';
import Contact from './components/Contact';
import DotNavigator from './components/DotNavigator'; // New DotNavigator component
import scrollUtils from './hooks/ScrollUtils'; // Import custom hook

const App = () => {
  // Use the custom hook for scroll logic
  const { refs, activeSection, scrollTo } = scrollUtils();
  
  return (
    <div style={styles.site}>
      <Header 
        scrollTo={scrollTo} 
        refs={refs} 
      />
      <Landing 
        title="Sentato Audio" 
        description="Audio Editing, Mixing and Scoring" 
      />
      <GraphicPanel 
        title="Services" 
        ref={refs.graphic} 
        description="Description of Services" 
      />
      <Contact ref={refs.contact} />
      <Footer />
      <DotNavigator 
        activeSection={activeSection} 
        scrollTo={scrollTo} 
        refs={refs}  
      />
    </div>
  );

};

const styles ={
  site: {
    backgroundColor: theme.colors.primary, 
    display:'flex', 
    flexDirection:'column', 
    height:'auto'
  }
}

export default App;
