import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { theme } from '../themes/theme'

const Menu = ({ toggleMenu, menuOpen }) => (
  <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerContainer}>
    <View style={[styles.bar, menuOpen && styles.barOpen]} />
    <View style={[styles.bar, menuOpen && styles.barOpen]} />
    <View style={[styles.bar, menuOpen && styles.barOpen]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  hamburgerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 25,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bar: {
    width: 25,
    height: 3,
    backgroundColor: theme.colors.background,
    borderRadius: 5,
  },
  barOpen: {
    backgroundColor: theme.colors.background,
    transform: [
      { rotate: '45deg' }, // Rotate bars to form "X" when open
    ],
  },
});

export default Menu;
