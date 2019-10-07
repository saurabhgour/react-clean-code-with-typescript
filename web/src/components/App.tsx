import React from 'react';
import { Switch, Route } from "react-router-dom";
import MovieDetail from './movie-detail';
import PopularMovies from './popular-movies';


const App = () => (
  <Switch>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/">
          <PopularMovies />
        </Route>
      </Switch>
);

export default App;
