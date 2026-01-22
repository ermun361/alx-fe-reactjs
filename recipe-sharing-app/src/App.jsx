import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;