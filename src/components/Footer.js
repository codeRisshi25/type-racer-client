import React from 'react';

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '98%',
    backgroundColor: 'rgba(31, 57, 64, 0.68)',
    color: 'white',
    textAlign: 'center',
    padding: '0.5rem',
    borderRadius: '50px 50px 0 0'
};


const Footer = () => {
    return (
        <footer style={footerStyle}>
        <p>@codeRsshi25</p>
        </footer>
    );
    }

    export default Footer;