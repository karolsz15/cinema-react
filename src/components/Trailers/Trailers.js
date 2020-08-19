import React, { useEffect, useCallback } from 'react';
import SingleMovie from './SingleMovie/SingleMovie';
import Spinner from '../UI/Spinner/Spinner';

import axios from 'axios';
import _ from 'lodash';
import {useSelector, useDispatch } from 'react-redux';

const Trailers = () => {

    //map state to consts
    const trailersError = useSelector(state => state.error);
    const trailersMovies = useSelector(state => state.movies);

    //map dispatch to consts
    const dispatch = useDispatch();
    const setMovies = useCallback( (data) => dispatch({type: 'SET_MOVIES', data: data}) , [dispatch] );
    const setError = useCallback( () => dispatch({type: 'ERROR'}) , [dispatch] );

    useEffect(() => {
        axios
        .get("https://karol-cinema.firebaseio.com/test.json")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => setError);
    }, [setMovies, setError]);

    let movies = trailersError ? <p>Ingredients cant be loaded</p> : <Spinner />;

    // limitMovieDescriptionTitle()
    // e.g. 'Pasta with tomato and spinach' -> 'Pasta with tomato'
    // acc: 0 / acc + cur.length = 5 / newDescriptionArray = ['Pasta']
    // acc: 5 / acc + cur.length = 9 / newDescriptionArray = ['Pasta', 'with']
    // acc: 9 / acc + cur.length = 15 / newDescriptionArray = ['Pasta', 'with', 'tomato']
    // acc: 15 / acc + cur.length = 18 / newDescriptionArray = ['Pasta', 'with', 'tomato']
    // acc: 18 / acc + cur.length = 24 / newDescriptionArray = ['Pasta', 'with', 'tomato']

    const limitMovieDescriptionTitle = (description, limit = 350) => {
        const newDescriptionArray = [];
        if (description.length > limit) {
            description.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newDescriptionArray.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newDescriptionArray.join(' ')} ...`;
        };
        return description;
    };

    if (trailersMovies) {

        const moviesArray = _.values(trailersMovies);

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
};

export default Trailers;