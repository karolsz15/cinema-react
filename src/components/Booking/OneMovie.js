import React from 'react';

const oneMovie = props => {
    return (
        <React.Fragment>
            <div className="booking_object">
                <img src={props.poster} alt="..." style={{margin: '.5em'}}></img>
                <div className="media-body">
                    <h5 style={{margin: '.5em'}}>{props.title}</h5>
                    {props.summary}
                    <div>
                        <a style={{margin: '.5em'}} onClick={props.clicked1} className="btn btn-secondary" href="#selection">{props.hour1}</a>
                        <a style={{margin: '.5em'}} onClick={props.clicked2} className="btn btn-secondary" href="#selection">{props.hour2}</a>
                    </div>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default oneMovie;