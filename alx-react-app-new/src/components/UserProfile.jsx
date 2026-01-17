const UserProfile = (props) => {
  const cardStyle = {
        backgroundColor: '#242424', 
        borderRadius: '12px',      
        padding: '25px',
        margin: '20px auto',
        maxWidth: '400px',        
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        color: '#e0e0e0',
        fontFamily: 'system-ui, sans-serif'
  };
   return (
     <div style={cardStyle}>
        <h2 style={{ color: '#646cff', marginTop: '0' }}>{props.name}</h2>
        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
                Age: <span style={{ color: '#fff', fontWeight: 'bold' }}>{props.age}</span>
            </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{props.bio}</p>
      </div>
   );
 };

 export default UserProfile;