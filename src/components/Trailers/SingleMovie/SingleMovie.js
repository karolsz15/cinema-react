import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieModal from '../../UI/MovieModal/MovieModal';

function SingleMovie(props) {
  const { title, trailer, poster, summary } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <MovieModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        title={title}
        trailer={trailer}
      />
      <div className="content-grid">
        <div className="play-icon">
          <img className="trailerPoster" src={poster} alt="movie poster" />
        </div>
        <div className="trailerDescription">{summary}</div>
        <a onClick={() => setModalVisible(true)} className="button play-icon" href="#trailer">
          Watch trailer
        </a>
        <a className="button play-icon" href="/booking">
          Book now
        </a>
      </div>
    </>
  );
}

SingleMovie.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  trailer: PropTypes.string,
};

export default SingleMovie;
