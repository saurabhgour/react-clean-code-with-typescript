import React, { Component } from 'react';
type MyProps = {};
type MyState = {loading: boolean}

class MovieDetail extends Component<MyProps, MyState> {

    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        if(this.state.loading){
            return <div>Loading Details Page</div>
        }
        return (
            <div><p>Movie details page data</p></div>
        );
    }

    componentDidMount(){
        let movieId  = window.location.pathname.replace("/movie/", "");
        //TODO: Add the api call to fetch the movie details and print over here
    }

    
}

export default MovieDetail;