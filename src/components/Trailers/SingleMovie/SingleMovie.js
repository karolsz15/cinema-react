import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MovieModal from '../../UI/MovieModal/MovieModal';

class SingleMovie extends Component {

    state = {
        modalVisible: false
    }

    showModal =() => {
        this.setState({modalVisible: true})
    };

    hideModal = () => {
        this.setState({modalVisible: false})
    }

    render() {
        return (
            <React.Fragment>

                <MovieModal 
                    show={this.state.modalVisible} 
                    onHide={this.hideModal} 
                    title={this.props.title} 
                    trailer={this.props.trailer} 
                />

                <div className="content-grid">
                    <div className="play-icon"><img className="trailerPoster" src={this.props.poster} alt="movie poster" /></div>
                    <div className="trailerDescription">{this.props.summary}</div>
                    <a onClick={this.showModal} className="button play-icon" href="#trailer">Watch trailer</a>
                    <a className="button play-icon" href="/booking">Book now</a>
                </div>

            </React.Fragment>
        );
    }
};

SingleMovie.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    trailer: PropTypes.string
};

export default SingleMovie;