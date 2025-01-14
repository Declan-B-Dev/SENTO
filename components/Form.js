import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../themes/theme';

const Form = () => {
  const submitString = ' Submit ';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(submitString);
  const [info, setInfo] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Set status to "Sending" while the form is being submitted
    setStatus('Sending');
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', description);

    try {
      const response = await fetch('https://formspree.io/f/mrbglved', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setInfo('Thank you! Your message has been sent.');
        setStatus(submitString);
        setName(''); // Clear form fields
        setEmail('');
        setDescription('');
      } else {
        setInfo('Something went wrong, please try again.');
        setStatus(submitString);
      }
    } catch (error) {
      setInfo('There was an error submitting your form.');
      setStatus(submitString);
    }
  };

  return (
    <form
      style={styles.form}      
      onSubmit={handleSubmit} // Use handleSubmit function
    >
      <div style={styles.divider}>
        <div style={styles.wrapper}>
          <div style={styles.text}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name" // Name field will be sent to Formspree
              required // Ensure the name field is required
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.wrapper}>
          <div style={styles.text}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email" // Email field will be sent to Formspree
              required // Ensure the email field is required
              style={styles.input}
            />
          </div>
        </div>
      </div>
      <div style={styles.divider2}>
        <div style={styles.wrapper2}>
          <div style={styles.text}>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="message" // Message field will be sent to Formspree
              required // Ensure the message field is required
              style={styles.input2}
            />
          </div>
        </div>
        <button type="submit" style={styles.button}>
          <Text style={styles.input}>{status}</Text>
        </button>
      </div>
      <div>
        <p style={{ color: theme.colors.secondText, textAlign:'center',fontSize: '18px' }}>{info}</p>
      </div>
    </form>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%', 
    display:'flex', 
    flexDirection:'column', 
    height:'auto', 
    paddingBottom: '20px', 
    alignItems: 'center'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    backgroundColor: 'beige',
  },
  wrapper2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: 'beige',
  },
  input: {
    textAlign: 'center',
    fontSize: 'large',
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
    paddingTop:'5px',
    paddingBottom:'5px',
    lineHeight:'normal',
    width: '100%',
    height:'100%',
    border: 'none',
  },
  input2: {
    textAlign: 'center',
    fontSize: 'large',
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
    width: '100%',
    height:'100%',
    border: 'none',
    resize:'none',
    paddingTop:'25px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '10px',
    gap: '2%',
    height: 'auto',
    paddingBottom:'2%',
  },
  divider2: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    borderRadius: '10px',
    gap: '2%',
    height: '50%',
  },
  text: {
    width: '100%',
    height:'100%',
    padding: '10px',
    alignItems:'center',
    justifyContent:'center',
  },
  button: {
    width: '120px',
    height: 'auto', // Let height adjust automatically
    minHeight: '50px', // Set a consistent minimum height
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: theme.colors.secondary,
    cursor: 'pointer',
    padding: '0', // Reset any default padding
    margin: '0', // Reset any default margin
    boxSizing: 'border-box', // Ensure consistent box-sizing across browsers
  },
  message: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
  },
});

export default Form;
