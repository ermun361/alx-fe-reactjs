import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const Home = () => 
<div className="p-4">
    <h1>Home Page</h1>
    <p>Welcome to the advanced routing demo.</p>
</div>;

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/profile"> Profile (protected)</Link> | {" "}
        <Link to="/blog/1"> Blog Post 1</Link> | {" "}
        <Link to="/blog/32"> Blog Post 32</Link>
      </nav>

      <Routes>
        {/* Basic Route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Route: Handles any /blog/ID */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 
           Protected & Nested Route: 
           The '/*' is CRITICAL here. It tells React Router that the Profile component 
           contains its own internal <Routes> for 'details' and 'settings'.
        */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />

        {/* Fallback Route for unmatched paths */}
        <Route path="*" element={<div className="p-4"><h2>404 - Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
      </Routes>
    </Router>

  );
}

export default App;