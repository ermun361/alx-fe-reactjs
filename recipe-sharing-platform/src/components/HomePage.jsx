import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import recipeData  from '../data.json';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        // simulating  a data fetch from the local JSON file
        setRecipes(recipeData);
    }, []); // empty dependency array means this runs once on mount

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
                Recipe Sharing Platform
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out cursor-pointer"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                {recipe.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-3">
                                {recipe.summary}
                            </p>
                            <Link to={`/recipe/${recipe.id}`} className="inline-block mt-4 text-orange-500 font-medium hover:underline">
                                View Recipe
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default HomePage;