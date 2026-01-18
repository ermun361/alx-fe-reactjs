import React from 'react';
import UserProfile from './components/UserProfile';   
import Counter from './components/Counter';
import './App.css';



function App() {
  return (
    <div style={{ 
      backgroundColor: '#1a1a1a',
      minHeight: '100vh', 
      fontFamily: 'system-ui, sans-serif' 
    }}>
      
      <WelcomeMessage />
      <Header />

      <UserProfile
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;