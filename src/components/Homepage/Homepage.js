import React, {Component} from 'react';

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
        }

        return (
            <React.Fragment>
                <div className="main">
                   {header}
                    <AutoPlay />
    
                <div className="video" id="video">
                    <iframe  src="https://www.youtube.com/embed/bwzLiQZDw2I" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="news">
                    <div className="col-md-6 news-left-grid">
                        <h3>Book your ticket now!</h3>
                        <h2>Book your ticket now!</h2>
                        <h4>Book your ticket now!</h4>
                        <a href="/book"><i className="book"></i>BOOK TICKET</a>
                    </div>
                    <div className="col-md-6 news-right-grid">
                        <h3>News</h3>
                        <div className="news-grid">
                            <h5>Lorem Ipsum Dolor Sit Amet</h5>
                            <label>Jan 05 2020</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        </div>
                        <div className="news-grid">
                            <h5>Lorem Ipsum Dolor Sit Amet</h5>
                            <label>Jan 01 2020</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        </div>
                        <a className="more" href="#">MORE</a>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div>EMPTY DIV FOR SOME SPACING (PICTURES ANIMATION HERE)</div>
                {/* <div className="more-reviews">
                    <li><img src="images/m11.jpg" alt=""/></li>
                    <li><img src="images/m12.jpg" alt=""/></li>
                    <li><img src="images/m13.jpg" alt=""/></li>
                    <li><img src="images/m14.jpg" alt=""/></li>
                    <li><img src="images/m15.jpg" alt=""/></li>
                    <li><img src="images/m16.jpg" alt=""/></li>
                </div>	 */}
                </div>
            </React.Fragment>
        );
    };
};

export default Homepage;