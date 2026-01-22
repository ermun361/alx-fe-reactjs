import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

    const handleDelete = () => {
      deleteRecipe(recipeId);
      navigate("/"); // Redirect to home after deletion
    };

return <button onClick={handleDelete} style={{ backgroundColor: '#e74c3c' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;