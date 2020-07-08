import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import HomepageHeader from './HomepageHeader/HomepageHeader';
import AutoPlay from '../AutoPlay/AutoPlay';
import Spinner from '../UI/Spinner/Spinner';
import MovieModal from '../UI/MovieModal/MovieModal';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import _ from 'lodash';
import {connect} from 'react-redux';

class Homepage extends Component {

    // NOW HANDLED WITH REDUX
    // state = {
    //     modalVisible: false,
    //     error: false,
    //     movies: null
    // }
    
    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            this.props.setMovies(response.data);
          })
          .catch(error => this.props.setError);
    }

    render () {

        let header = this.props.HPerror ? <p>Movies can't be loaded</p> : <Spinner />;
        let posters = this.props.HPerror ? <p>Posters can't be loaded</p> : <Spinner />;
        let trailerModal = this.props.HPerror ? <p>Trailer can't be loaded</p> : <Spinner />;

        if (this.props.HPmovies) {
            header = (
                <HomepageHeader 
                    bigImage={this.props.HPmovies.two.bigImageUrl} 
                    title={this.props.HPmovies.two.title} 
                    cast={this.props.HPmovies.two.cast}
                    release={this.props.HPmovies.two.release}
                    genres={this.props.HPmovies.two.genres}
                    summary={this.props.HPmovies.two.summary}
                    trailer={this.props.HPmovies.two.trailerUrl}  
                    trailerClicked={this.props.showModal}
                    hideModal={this.props.hideModal}  
                />
            );
            
            const moviesArray = _.values(this.props.HPmovies);
            
            const autoPlayPostersArray = moviesArray.map( el => el.posterUrl);

            posters = (
                <AutoPlay postersArray={autoPlayPostersArray} />
            );

           trailerModal = (  
                <MovieModal 
                    show={this.props.HPmodalVisible}
                    title={this.props.HPmovies.two.title} 
                    trailer={this.props.HPmovies.two.trailerUrl}  
                    onHide={this.props.hideModal} />
           );
        }

        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    };
};

const mapStateToProps = state => {
    return {
        HPmodalVisible: state.modalVisible,
        HPerror: state.error,
        HPmovies: state.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch({type: 'SHOW_MODAL'}),
        hideModal: () => dispatch({type: 'HIDE_MODAL'}),
        setMovies: (data) => dispatch({type: 'SET_MOVIES', data: data}),
        setError: () => dispatch({type: 'ERROR'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);