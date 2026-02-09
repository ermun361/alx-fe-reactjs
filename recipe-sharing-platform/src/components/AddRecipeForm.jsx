import React, { useState } from "react";

const AddRecipeForm =() => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [ steps, setSteps] = useState("");
    const [ errors, setErrors] = useState({});


    // validation Logic
    const validate = () => {
        let newErrors = {};

        if (!title) newErrors.title = "Title is required.";
        if (!ingredients) {
            newErrors.ingredients = "Ingredients are required.";
        } else if (ingredients.split('\n').filter(i => i.trim() !== '').length < 2) {
         newErrors.ingredients = "Please include at least two ingredients.";
        }
         if (!steps) newErrors.steps = "Preparation steps are required.";
    
         return newErrors;

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // If no errors, submit the form (e.g., send data to backend)
            console.log("Form submitted:", { title, ingredients, steps });

            // Clear form fields after submission
            setTitle("");
            setIngredients("");
            setSteps("");
            setErrors({});
            alert("Recipe added successfully! (This is a placeholder action.)");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Italian Pasta"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredient 1&#10;Ingredient 2"
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="6"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Step 1: Boil water..."
          />
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
    );
}

export default AddRecipeForm;