import React, {Component} from 'react';
import SingleMovie from './SingleMovie/SingleMovie';
import Spinner from '../UI/Spinner/Spinner';

import axios from 'axios';

class Trailers extends Component {

    state ={
        showModal: false,
        error: false,
        movies: null
    }

    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            this.setState({
                movies: response.data
            });
          })
          .catch(error => this.setState({ error: true }));
    }

    renderModal = () => {
        this.setState({showModal: true});
    }

    render() {

        let movies = this.state.error ? <p>Ingredients cant be loaded</p> : <Spinner />;

        if (this.state.movies) {

            movies = (
                <div className="content-grids">
                    <SingleMovie 
                        title={this.state.movies.one.title} 
                        summary={this.state.movies.one.summary} 
                        poster={this.state.movies.one.posterUrl} 
                        trailer={this.state.movies.one.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.two.title} 
                        summary={this.state.movies.two.summary} 
                        poster={this.state.movies.two.posterUrl} 
                        trailer={this.state.movies.two.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.three.title} 
                        summary={this.state.movies.three.summary} 
                        poster={this.state.movies.three.posterUrl} 
                        trailer={this.state.movies.three.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.four.title} 
                        summary={this.state.movies.four.summary} 
                        poster={this.state.movies.four.posterUrl} 
                        trailer={this.state.movies.four.trailerUrl}
                    />
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className="main">
                    <div className="video-content">
                        <div className="top-header span_top">
                            <div className="logo">
                                <a href="/"><img src="images/logo4.png" alt="" /></a>
                                <p>Ticket booking app</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="right-content">
                            <div className="right-content-heading">
                                <div className="right-content-heading-left">
                                    <h3 className="head">Trailers of latest movies</h3>
                                </div>
                            </div>
                        </div>
                            {movies}
                        </div>
                    </div>   
            </React.Fragment>
        );
    }
};

export default Trailers;