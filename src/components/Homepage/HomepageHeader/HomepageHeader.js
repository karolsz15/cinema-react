import React from 'react';
import {Link} from 'react-router-dom';

const homepageHeader = props => (

    <React.Fragment>
            <div className="header" style={{background: `url(${props.bigImage})` }}>
                <div className="top-header">
                    <div className="logo">
                        <a href="/"><img src="images/logo4.png" alt="" /></a>
                        <p>Ticket booking app</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="header-info">
                    <h1>{props.title}</h1>
                    <p className="age">{props.cast}</p>
                    <p className="review reviewgo">Genre: {props.genres} </p>
                    <p className="review">Release: {props.release} </p>
                    <p className="special"> {props.summary} </p>
                    <div className="headerButtons">
                        <Link onClick={props.trailerClicked} className="video"><i className="video1"></i>TRAILER</Link>
                        <Link to="/booking" className="book"><i className="book1"></i>TICKET</Link>
                    </div>

                </div>
            </div>
    </React.Fragment>
);

export default homepageHeader;