import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../data.json";


const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

useEffect(() => {
    // Find the recipe by ID from the local JSON data
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
}, [id])

if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
}

return (
    <div className="container mx-auto p-4 md:p-10">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition shadow-md"
      >
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" 
        />
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 italic mb-8 text-lg">{recipe.summary}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <section className="bg-orange-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          {/* Instructions Section */}
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Instructions</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="pl-2">{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;