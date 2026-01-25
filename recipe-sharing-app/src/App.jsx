import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        
        <Routes>
          {/* Main Home Route */}
          <Route
            path="/"
            element={
              <div className="dashboard-layout">
                {/* Left Column: Search, Add, and List */}
                <div className="main-content">
                  <SearchBar />
                  <AddRecipeForm />
                  <hr />
                  <RecipeList />
                </div>

                {/* Right Column: Favorites and Recommendations */}
                <div className="sidebar">
                  <FavoritesList />
                  <RecommendationsList />
                </div>
              </div>
            }
          />

          {/* Details Route */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
    
export default App;