import { LoadMoviesData } from "./domain/ports/in/LoadMoviesData";
import { LoadMoviesDataImpl } from "./domain/useCases/LoadMoviesDataImpl";

let loadMoviesData: LoadMoviesData;

loadMoviesData = new LoadMoviesDataImpl();

export default loadMoviesData;