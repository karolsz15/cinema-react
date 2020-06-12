import React, {Component} from 'react';
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
                    <div className="play-icon"><img src={this.props.poster} alt="movie poster" /></div>
                    <h3>{this.props.summary}</h3>
                    <a onClick={this.showModal} className="button play-icon" href="#small-dialog3">Watch trailer</a>
                    <a className="button play-icon" href="/booking">Book now</a>
                </div>    
            </React.Fragment>
        );
    }
};

export default SingleMovie;