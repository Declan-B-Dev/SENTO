import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';
import Menu from './Menu';

const Header = ({ scrollTo, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <View ref={refs.home} style={styles.header}>
      <View style={[styles.nav, { display: menuOpen ? 'flex' : 'none' }]}>
        <View style={styles.navItem}>
          <Text style={styles.navText} onPress={() => scrollTo(refs.home)}>
            Home
          </Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navText} onPress={() => scrollTo(refs.graphic)}>
            Services
          </Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navText} onPress={() => scrollTo(refs.contact, 'contact')}>
            Contact
          </Text>
        </View>
      </View>
      <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} /> {/* Add hamburger menu */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display:'flex',
    flexDirection: 'row',
    height:'auto',
    justifyContent: 'right',
    alignItems: 'center',
    backgroundColor: theme.colors.secondBackground,
    padding: 40,
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    marginRight: 40,
  },
  navText: {
    color: theme.colors.secondText,
    fontSize: 18,
    cursor: 'pointer', // Adds a pointer cursor to indicate clickable text
  },
});

export default Header;
