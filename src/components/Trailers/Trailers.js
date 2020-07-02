import React, {Component} from 'react';
import SingleMovie from './SingleMovie/SingleMovie';
import Spinner from '../UI/Spinner/Spinner';

import axios from 'axios';
import _ from 'lodash';

class Trailers extends Component {

    state = {
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

                return `${newDesc.join(' ')} ...`;
            }
            return desc;
        }

        if (this.state.movies) {

            const moviesArray = _.values(this.state.movies);

            movies = (
                <div className="content-grids">
                    {moviesArray.map(el => (
                        <SingleMovie 
                                title={el.title} 
                                summary={limitMovieDescriptionTitle(el.summary)} 
                                poster={el.posterUrl} 
                                trailer={el.trailerUrl}
                                key={el.title}
                        />
                    ))}
                </div>
            );
        };

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