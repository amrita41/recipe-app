import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'b823dde8';
  const APP_KEY = 'd05508559a864a457645194ea62c6cb6';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Mango');

  useEffect ( () => 
  {
      getRecipes();
  }, [query]);


  const getRecipes = async () => 
  {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" placeholder="Write here to search.." value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} 
        title={recipe.recipe.label}
         calories={recipe.recipe.calories} 
         image={recipe.recipe.image} 
         ingredients={recipe.recipe.ingredients}
         url={recipe.recipe.url}/>
      ) 
      )}
    </div>
    </div>
  );
}

export default App;
