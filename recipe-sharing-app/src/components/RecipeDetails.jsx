import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === Number(recipeId)));
  
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) return <p>Recipe not found!</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <button 
        onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
        style={{ backgroundColor: isFavorite ? '#fab005' : '#ced4da', color: 'black' }}
      >
        {isFavorite ? '⭐ Unfavorite' : '☆ Add to Favorites'}
      </button>
      <p>{recipe.description}</p>
      <hr />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;