import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Form from './Form';
import useScreenWidth from '../hooks/ScaleUtils'; // Import the custom hook
import { theme } from '../themes/theme';

const Contact = React.forwardRef((props, ref) => {
  const email = `audio@sento.com`;
  const whatsapp = `+39 338-758-2600`;
  const threshold = 700;
  const copied = `Copied`;

  const { screenWidth, scaleClip, scaleFont, scaleSmallFont } = useScreenWidth();

  const [showClipboardMessage, setShowClipboardMessage] = useState({
    Email: true,
    Whatsapp: true
  });

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowClipboardMessage(prevState => ({
        ...prevState,
        [type]: true, // Hide the original text and show "Copied"
      }));
    } catch (error) {
      console.error(`Failed to copy ${type} to clipboard: , error`);
    }
  };

  // ContactButton
  const ContactButton = ({ type, value }) => (
    <TouchableOpacity
      style={styles.button}
      onMouseDown={() => setShowClipboardMessage({ ...showClipboardMessage, [type]: false })}
      onMouseUp={() => handleCopy(value, type)} // Set copied state on press
    >
      <View style={[styles.wrapper, !showClipboardMessage[type] && styles.pressedButton, {backgroundColor: theme.colors.secondary}]}>
        <View style={styles.copyBox}>
          <Text style={[styles.text, { fontSize: scaleSmallFont(15, screenWidth) }]}>
            { showClipboardMessage[type] ? `${type}: ${value}` : `${copied}`}
          </Text>
          {screenWidth > threshold && (
            <MaterialIcons name="content-copy" size={scaleClip(24, screenWidth)} color="black" style={styles.icon} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contactContainer} ref={ref}>
      <View style={styles.contactSection}>
        <View style={styles.contactBox}>
          <Text style={[styles.heading, { fontSize: scaleFont(30, screenWidth) }]}>Contact Us</Text>
          <Form />
          <View style={styles.contactDivider}>
            <ContactButton
              type="Email"
              value={email}
            />
            <ContactButton
              type="Whatsapp"
              value={whatsapp}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    borderRadius: 10,
    backgroundColor: theme.colors.text,
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 10,
  },
  heading: {
    color: theme.colors.secondText,
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
    padding: 20,
  },
  contactDivider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: '2%',
    flexWrap: 'wrap',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    height: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  copyBox: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
  },
  button: {
    width: '49%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  pressedButton: {
    opacity: '0.5',
  }
});

export default Contact;
