import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.glow}>404</h1>
      <h2 style={styles.message}>Page Not Found</h2>
      <p style={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" style={styles.homeLink}>Go Back Home</a>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#0e0e0e',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    animation: 'fadeIn 2s ease-in-out',
  },
  glow: {
    fontSize: '8rem',
    fontWeight: 'bold',
    color: '#ff3c3c',
    textShadow: '0 0 10px #ff3c3c, 0 0 20px #ff3c3c, 0 0 30px #ff3c3c',
    animation: 'pulse 2s infinite',
  },
  message: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  homeLink: {
    padding: '10px 20px',
    backgroundColor: '#ff3c3c',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

// Include this in your CSS or styled-components if you're using them
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes pulse {
    0% { text-shadow: 0 0 10px #ff3c3c; }
    50% { text-shadow: 0 0 20px #ff6a6a, 0 0 40px #ff6a6a; }
    100% { text-shadow: 0 0 10px #ff3c3c; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`, styleSheet.cssRules.length);

export default NotFound;
