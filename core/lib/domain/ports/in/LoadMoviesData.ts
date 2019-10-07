import { Movie } from "../../entities/Movie";

export interface LoadMoviesData {
    popularMovies(cb: (repos: Movie[]) => any): any;
} 