import React from 'react';

const oneMovie = props => {
    return (
        <React.Fragment>
            <div className="booking_object">
                <img src={props.poster} className="mr-3" alt="..."></img>
                <div className="media-body">
                    <h5 className="mt-0">{props.title}</h5>
                    <br />
                    {props.summary}
                    <br />
                    <div className="mt-5">
                        <a onClick={props.clicked} className="btn btn-secondary" href="#selection">10:00</a>
                        <a onClick={props.clicked} className="btn btn-secondary" href="#selection">13:00</a>
                    </div>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default oneMovie;