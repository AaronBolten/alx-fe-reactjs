import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <AddRecipeForm/>
          <RecipeList/>
          </>
        } />
        <Route path="/recipe/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;

