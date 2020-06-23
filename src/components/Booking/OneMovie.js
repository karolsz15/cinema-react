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
                        <button 
                            style={{margin: '.5em'}} 
                            onClick={props.clicked1} 
                            className="btn btn-secondary">{props.hour1}</button>
                        <button 
                            style={{margin: '.5em'}} 
                            onClick={props.clicked2} 
                            className="btn btn-secondary">{props.hour2}</button>
                    </div>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
};

export default oneMovie;