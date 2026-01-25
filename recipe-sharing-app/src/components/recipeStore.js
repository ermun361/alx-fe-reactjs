import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [], 
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) => set({ searchTerm: term }),

  // This function filters the recipes based on search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Function to add a new recipe
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      // Update filteredRecipes 
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // Add these for favorites logic
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.4
    );
    return { recommendations: recommended };
  }),
}));