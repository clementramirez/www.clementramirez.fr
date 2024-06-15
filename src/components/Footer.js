import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>
                    Email: <a href="mailto:clement@clementramirez.fr">clement@clementramirez.fr</a>
                </p>
                <p style={{ marginLeft: '10px' }}>Copyrights &copy; 2024 Clément Ramirez</p>
            </div>
        </footer>
    );
};

export default Footer;
