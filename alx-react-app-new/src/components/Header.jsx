function Header() {
    const headerStyle = {
         padding: '30px 20px',
        borderBottom: '1px solid #333', 
        textAlign: 'center',
        color: '#ffffff',
        letterSpacing: '1px'
    };
    return (
        <header style= {headerStyle}>
             <h1 style={{margin: 0, fontWeight: '300'}}>My Favorite Cities</h1>
        </header>
    );
}

export default Header;
