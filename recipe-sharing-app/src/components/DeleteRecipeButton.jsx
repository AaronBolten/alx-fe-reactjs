import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to homepage or recipe list after deletion
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'white', backgroundColor: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
