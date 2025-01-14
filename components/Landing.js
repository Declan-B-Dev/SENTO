import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';
import useScreenWidth from '../hooks/ScaleUtils';

const Landing = ({ title, description }) => {
  const text = 'SENTO';
  const text2 = 'AUDIO.';

  // Use the custom hook to get screen width and scaling functions
  const { screenWidth, scaleFont, scaleSmallFont } = useScreenWidth();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.secondText,fontSize: scaleFont(180, screenWidth) }]}>{text}</Text>
        <Text style={[styles.title, { fontSize: scaleFont(180, screenWidth) }]}>{text2}</Text>
      </View>
      <Text style={[styles.description, { fontSize: scaleSmallFont(40, screenWidth) }]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height:'auto',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: theme.colors.primary,
    shadowColor: theme.colors.accent,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexGrow:1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    display: 'flex',
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'left',
    fontFamily: 'Circular Std, sans-serif',
    marginLeft: '15%',
  },
  description: {
    fontFamily: 'Circular Std, sans-serif',
    backgroundColor:theme.colors.text,
    color: theme.colors.background,
    borderRadius:'10px',
    paddingVertical:'10px',
    margin: 50,
    textAlign: 'center',
  },
});

export default Landing;
