import React from 'react';
import PropTypes from 'prop-types';

const oneMovie = props => {

    const {poster, title, summary, clicked1, clicked2, hour1, hour2} = props;

    return (
        <React.Fragment>
            <div className="booking_object">
                <img src={poster} alt="..." style={{margin: '.5em'}}></img>
                <div className="media-body">
                    <h5 style={{margin: '.5em'}}>{title}</h5>
                    {props.summary}
                    <div>
                        <button style={{margin: '.5em'}} onClick={clicked1} className="btn btn-secondary">{hour1}</button>
                        <button style={{margin: '.5em'}} onClick={clicked2} className="btn btn-secondary">{hour2}</button>
                    </div>
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
};

oneMovie.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    clicked1: PropTypes.func,
    clicked2: PropTypes.func,
    hour1: PropTypes.string,
    hour2: PropTypes.string
}

export default oneMovie;