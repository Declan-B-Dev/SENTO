import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';

const Footer = () => (
  <div style={styles.footer}>
    <p style={styles.text}>© 2024 Sento Audio. All rights reserved.</p>
  </div>
);

const styles = StyleSheet.create({
  footer: {
    display:'flex',
    backgroundColor: theme.colors.secondBackground,
    padding: 20,
    alignItems: 'center',
    height:'auto',
    justifyContent:'center',
  },
  text: {
    color: theme.colors.secondText,
    fontSize: 14,
    textAlign:'center',
  },
});

export default Footer;
