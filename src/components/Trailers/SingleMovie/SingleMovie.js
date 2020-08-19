import React, {useState} from 'react';
import PropTypes from 'prop-types';

import MovieModal from '../../UI/MovieModal/MovieModal';

const SingleMovie = props => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            
            <MovieModal 
                show={modalVisible} 
                onHide={() => setModalVisible(false)} 
                title={props.title} 
                trailer={props.trailer} 
            />

            <div className="content-grid">
                <div className="play-icon"><img className="trailerPoster" src={props.poster} alt="movie poster" /></div>
                <div className="trailerDescription">{props.summary}</div>
                <a onClick={() => setModalVisible(true)} className="button play-icon" href="#trailer">Watch trailer</a>
                <a className="button play-icon" href="/booking">Book now</a>
            </div>

        </React.Fragment>
    );
};

SingleMovie.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    trailer: PropTypes.string
};

export default SingleMovie;