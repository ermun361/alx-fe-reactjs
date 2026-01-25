import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoritesIds = useRecipeStore(state => state.favorites);
  
  // Map the IDs stored in favorites to actual recipe objects
  const favorites = favoritesIds.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);

  return (
    <div style={{ marginTop: '20px', padding: '15px', background: '#fff9db', borderRadius: '8px' }}>
      <h2>My Favorites ❤️</h2>
      {favorites.length === 0 ? <p>No favorites yet!</p> : null}
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;