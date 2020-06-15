import React from 'react';

const homepageHeader = props => (

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
        <p className="review reviewgo">Genre	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; {props.genres} </p>
        <p className="review">Release &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; {props.release} </p>
        <p className="special"> {props.summary} </p>
        <a className="video" href="/trailers"><i className="video1"></i>WATCH TRAILER</a>
        <a className="book" href="/booking"><i className="book1"></i>BOOK TICKET</a>
    </div>
</div>

);

export default homepageHeader;