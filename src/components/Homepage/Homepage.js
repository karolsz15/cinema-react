import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import HomepageHeader from './HomepageHeader/HomepageHeader';
import AutoPlay from '../AutoPlay/AutoPlay';
import Spinner from '../UI/Spinner/Spinner';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

class Homepage extends Component {

    state = {
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
			console.log(response.data)
          })
          .catch(error => this.setState({ error: true }));
    }

    render () {
        let header = this.state.error ? <p>Movies can't be loaded</p> : <Spinner />;
        let posters = this.state.error ? <p>Posters can't be loaded</p> : <Spinner />;

        if (this.state.movies) {
            header = (
                <HomepageHeader 
                    bigImage={this.state.movies.one.bigImageUrl} 
                    title={this.state.movies.one.title} 
                    cast={this.state.movies.one.cast}
                    release={this.state.movies.one.release}
                    genres={this.state.movies.one.genres}
                    summary={this.state.movies.one.summary}
                    trailer={this.state.movies.one.trailerUrl} />
            );
            posters = (
                <AutoPlay 
                    poster1={this.state.movies.one.posterUrl}
                    poster2={this.state.movies.two.posterUrl} 
                    poster3={this.state.movies.three.posterUrl} 
                    poster4={this.state.movies.four.posterUrl} 
                    poster5={this.state.movies.five.posterUrl} 
                    poster6={this.state.movies.six.posterUrl} 
                    poster7={this.state.movies.seven.posterUrl} 
                    poster8={this.state.movies.eight.posterUrl} />
            );
        }

        return (
            <React.Fragment>
                <div className="main">

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

export default Homepage;