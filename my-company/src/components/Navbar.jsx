import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

const linkStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '20px 5%',          
  backgroundColor: '#fff',
  borderBottom: '1px solid #eee'
};

export default Navbar;