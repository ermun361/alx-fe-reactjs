import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';   
import './App.css';


function App() {
  return (
    <div>
      
      <WelcomeMessage />
      <Header />

      <UserProfile name="Eric Munyi" 
      age="26" 
      bio="Software developer passionate about React and JavaScript." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;