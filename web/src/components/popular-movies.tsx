import React, {Component} from 'react';
import { Movie } from 'core/dist/domain/entities/Movie';
import MoviesList from './movies-list';
import loadMoviesData from 'core';

type MyProps = {};
type MyState = { loading: boolean, movies: Movie[] };

class PopularMovies extends Component<MyProps, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {loading: true, movies: []};
  }
  render() {
    if(this.state.loading){
      return(
        <div>Loading...</div>
      );
    }
    return (
      <div className="App">
        <MoviesList movies={this.state.movies} />
      </div>);
  }

  componentDidMount() {
    loadMoviesData.popularMovies((movies: Movie[]) => {
      console.log(movies);
      this.setState({
        movies: movies,
        loading: false
      });
    });
  }

}


export default PopularMovies;