import {useContext} from 'react';
import UserContext from './UserContext';

function UserProfile() {
  // Consume the context value
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      {/* Access data from the context object instead of props */}
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;