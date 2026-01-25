import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  
  // Find the recipe from the store using the ID from the URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId))
  );

  // Favorite actions and state
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return <p>Recipe not found! <Link to="/">Go Back</Link></p>;
  }

  // Check if this specific recipe is already a favorite
  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h1>{recipe.title}</h1>

      {/* --- FAVORITE BUTTON --- */}
      <button
        onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
        style={{
          backgroundColor: isFavorite ? '#ffd700' : '#f0f0f0', // Gold if favorite
          color: '#333',
          padding: '10px 15px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginBottom: '20px'
        }}
      >
        {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
      </button>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{recipe.description}</p>
      
      <hr style={{ margin: '30px 0' }} />

      <section>
        <h3>Edit Recipe Details</h3>
        <EditRecipeForm recipe={recipe} />
      </section>

      <div style={{ marginTop: '20px' }}>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={{ color: '#3498db', textDecoration: 'none' }}>
          ← Back to Recipe List
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;