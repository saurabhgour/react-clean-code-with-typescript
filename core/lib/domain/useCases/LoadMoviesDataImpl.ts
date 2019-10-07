import { LoadMoviesData } from "../ports/in/LoadMoviesData";
import * as request from "request";
import { Config } from "../../application/config";
import { Movie } from "../entities/Movie";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class LoadMoviesDataImpl implements LoadMoviesData {

    popularMovies(cb: (repos: Movie[]) => any) {
        let config = new Config();
        request.get(config.baseUrl + config.popularMovies + '?api_key=' +
        config.apiKey + '&language=en-US&page=1', OPTIONS, (error: any, response: any, body: any) => {
            var repos = body.results.map((movieJson: any) => new Movie(movieJson.id, config.imageUrl + movieJson.poster_path));
            cb(repos);
        });
    }

}