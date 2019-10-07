import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const MovieTile = (props) => {
  let { image_url, id } = props.movie;
  let movieDetailUrl = "/movie/" + id;
  return (
    <Link to={movieDetailUrl}>
      <span >
        <LazyLoadImage
          alt="Logo"
          src={image_url}
          width={window.screen.width / 2} />
      </span>
    </Link>);
}


export default MovieTile;