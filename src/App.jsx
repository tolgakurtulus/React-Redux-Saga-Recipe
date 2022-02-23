import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./redux/actionTypes";
import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.data);
  const data = useSelector((state) => state.data);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_START, query });
  }, [query]);

  return (
    <div className="c-app">
      <header className="c-app__header">
        <h1>Header</h1>
      </header>
      <div className="c-app__search">
      <div className="c-app__search-container">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          required
        />
        <button type="submit" onClick={updateSearch}>
          Search
        </button>
      </div>
      </div>
      <div className="c-app__card">
        {recipes &&
          recipes.hits &&
          recipes.hits.map((item) => {
            return (
              <div className="c-app__card-item">
                <div className="c-app__card-item-title">
                  <p>{item.recipe.label}</p>
                </div>
                <div className="c-app__card-item-img">
                  <img src={item.recipe.image} alt={item.recipe.label} />
                </div>
                <div className="c-app__card-item-standart">
                  <p>
                    <strong>Calories: </strong>
                    {item.recipe.calories}
                  </p>
                </div>
                <div className="c-app__card-item-standart">
                  <p>
                    <strong>Localization: </strong>
                    {item.recipe.cuisineType[0]}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
