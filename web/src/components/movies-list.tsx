import { useMediaQuery } from 'react-responsive'
import React from 'react';
import MyImage from './movie-tile';
import MovieTile from './movie-tile';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const image = { alt: "logo", src: "https://image.tmdb.org/t/p/w185/kqjL17yufvn9OVLyXYpvtyrFfak.jpg", width: "200px" };

const MoviesList = ({ movies }) => (

    <div>
        <Desktop>
            <div>
                {movies.map((movie, key) =>
                    <MovieTile movie={movie} key={movie.id} />
                )}
            </div>
        </Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>
            <div>
                {movies.map((movie, key) =>
                    <MovieTile movie={movie} key={movie.id} />
                )}
            </div>
        </Mobile>
    </div>
)

export default MoviesList;