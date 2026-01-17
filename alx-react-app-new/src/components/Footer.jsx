function Footer() {
    const footerStyle = {
        padding: '40px 20px',
        textAlign: 'center',
        color: '#555',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontFamily: 'sans-serif'
    };

    return (
        <footer style={footerStyle}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;