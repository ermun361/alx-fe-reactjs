import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Select the state and the action from the store
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Re-generate recommendations when the component loads
  useEffect(() => {
    if (typeof generateRecommendations === 'function') {
      generateRecommendations();
    }
  }, [generateRecommendations]);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h2>Recommendations</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;