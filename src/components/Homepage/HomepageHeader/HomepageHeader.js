import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomepageHeader = ({ bigImage, title, cast, genres, release, summary, trailerClicked }) => (
    <div className="header" style={{ background: `no-repeat top url(${bigImage})` }}>
      <div className="top-header">
        <div className="logo">
          <a href="/">
            <img src="images/logo4.png" alt="" />
          </a>
          <p>Ticket booking app</p>
        </div>
        <div className="clearfix" />
      </div>
      <div className="header-info">
        <h1>{title}</h1>
        <p className="age">{cast}</p>
        <p className="review reviewgo">Genre: {genres} </p>
        <p className="review">Release: {release} </p>
        <p className="special"> {summary} </p>
        <div className="headerButtons">
          <div onClick={trailerClicked} className="videoButton">
            <i className="video1" />
            TRAILER
          </div>
          <Link to="/booking" className="bookButton">
            <i className="book1" />
            TICKET
          </Link>
        </div>
      </div>
    </div>
  );

HomepageHeader.propTypes = {
  bigImage: PropTypes.string,
  title: PropTypes.string,
  cast: PropTypes.string,
  genres: PropTypes.string,
  release: PropTypes.string,
  summary: PropTypes.string,
  trailerClicked: PropTypes.func,
};

export default HomepageHeader;
