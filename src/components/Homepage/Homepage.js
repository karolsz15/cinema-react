import React, {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import HomepageHeader from './HomepageHeader/HomepageHeader';
import AutoPlay from '../AutoPlay/AutoPlay';
import Spinner from '../UI/Spinner/Spinner';
import MovieModal from '../UI/MovieModal/MovieModal';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import _ from 'lodash';

const Homepage = () => {

    //local state to show and hide trailers modal
    const [modalVisible, setModalVisible] = useState(false);

    //map state to consts
    const HPerror = useSelector(state => state.dataReducer.error);
    const HPmovies = useSelector(state => state.dataReducer.movies);

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

    let header = HPerror ? <p>Movies can't be loaded</p> : <Spinner />;
    let posters = HPerror ? <p>Posters can't be loaded</p> : <Spinner />;
    let trailerModal = HPerror ? <p>Trailer can't be loaded</p> : <Spinner />;

    if (HPmovies) {
        header = (
            <HomepageHeader 
                bigImage={HPmovies.two.bigImageUrl} 
                title={HPmovies.two.title} 
                cast={HPmovies.two.cast}
                release={HPmovies.two.release}
                genres={HPmovies.two.genres}
                summary={HPmovies.two.summary}
                trailer={HPmovies.two.trailerUrl}  
                trailerClicked={() => setModalVisible(true)}
                hideModal={() => setModalVisible(false)}  
            />
        );
            
        const moviesArray = _.values(HPmovies);
        const autoPlayPostersArray = moviesArray.map( el => el.posterUrl);

        posters = (
            <AutoPlay postersArray={autoPlayPostersArray} />
        );

        trailerModal = (  
            <MovieModal 
                show={modalVisible}
                title={HPmovies.two.title} 
                trailer={HPmovies.two.trailerUrl}  
                onHide={() => setModalVisible(false)} />
        );
    };

    return (
        <div className="main">

            {trailerModal}
            {header}
            {posters}
                        
            <div className="news">
                <div className="col-md-6 news-left-grid">
                    <h3>Book your ticket now!</h3>
                    <h2>Book your ticket now!</h2>
                    <h4>Book your ticket now!</h4>
                    <Link to="/booking"><i className="book"></i>BOOK TICKET</Link>
                </div>
                <div className="col-md-6 news-right-grid">
                    <h3>News</h3>
                    <div className="news-grid">
                        <h5>Lorem Ipsum Dolor Sit Amet</h5>
                        <label>June 15 2020</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                    <div className="news-grid">
                        <h5>Lorem Ipsum Dolor Sit Amet</h5>
                        <label>June 10 2020</label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Homepage;