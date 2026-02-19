import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile"> Profile</Link> | 
        <Link to="/blog/1"> Blog 1</Link>
      </nav>

      <Routes> {/* Use Routes, NOT Switch */}
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Nested Routes */}
        <Route path="/profile/*" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;