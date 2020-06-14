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

        /*
        limitMovieDescriptionTitle
        // 'Pasta with tomato and spinach'
        acc: 0 / acc + cur.length = 5 / newDesc = ['Pasta']
        acc: 5 / acc + cur.length = 9 / newDesc = ['Pasta', 'with']
        acc: 9 / acc + cur.length = 15 / newDesc = ['Pasta', 'with', 'tomato']
        acc: 15 / acc + cur.length = 18 / newDesc = ['Pasta', 'with', 'tomato']
        acc: 18 / acc + cur.length = 24 / newDesc = ['Pasta', 'with', 'tomato']
        */

        const limitMovieDescriptionTitle = (desc, limit = 350) => {
            const newDesc = [];
            if (desc.length > limit) {
                desc.split(' ').reduce((acc, cur) => {
                    if (acc + cur.length <= limit) {
                        newDesc.push(cur);
                    }
                    return acc + cur.length;
                }, 0);

                // return the result
                return `${newDesc.join(' ')} ...`;
            }
            return desc;
        }

        if (this.state.movies) {

            movies = (
                <div className="content-grids">
                    <SingleMovie 
                        title={this.state.movies.one.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.one.summary)} 
                        poster={this.state.movies.one.posterUrl} 
                        trailer={this.state.movies.one.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.two.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.two.summary)} 
                        poster={this.state.movies.two.posterUrl} 
                        trailer={this.state.movies.two.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.three.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.three.summary)} 
                        poster={this.state.movies.three.posterUrl} 
                        trailer={this.state.movies.three.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.four.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.four.summary)} 
                        poster={this.state.movies.four.posterUrl} 
                        trailer={this.state.movies.four.trailerUrl}
                    />


                    <SingleMovie 
                        title={this.state.movies.one.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.one.summary)} 
                        poster={this.state.movies.one.posterUrl} 
                        trailer={this.state.movies.one.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.two.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.two.summary)} 
                        poster={this.state.movies.two.posterUrl} 
                        trailer={this.state.movies.two.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.three.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.three.summary)} 
                        poster={this.state.movies.three.posterUrl} 
                        trailer={this.state.movies.three.trailerUrl}
                    />
                    <SingleMovie 
                        title={this.state.movies.four.title} 
                        summary={limitMovieDescriptionTitle(this.state.movies.four.summary)} 
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