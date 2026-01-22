function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <button style={{ 
        marginTop: '20px', 
        padding: '10px 25px', 
        backgroundColor: '#3498db', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}>Learn More</button>
    </div>
  );
}
export default Home;