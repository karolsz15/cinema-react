import React, {Component} from 'react';
import axios from 'axios';

import BookingModal from './BookingModal/BookingModal';
import OneMovie from './OneMovie';
import Spinner from '../UI/Spinner/Spinner';

class Booking extends Component {
	
	state = {
        modalVisible: false,
        error: false,
        movies: null
    }

    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            this.setState({
                movies: response.data
			});
			console.log(response.data)
          })
          .catch(error => this.setState({ error: true }));
    }

	showModal =() => {
        this.setState({modalVisible: true})
    };

    hideModal = () => {
        this.setState({modalVisible: false})
    }

	render() {

		let singleMovie = null;
		if (this.state.movies) { 
			singleMovie = (
				<React.Fragment>
					<OneMovie 
						clicked={this.showModal}
						title={this.state.movies.one.title} 
						summary={this.state.movies.one.summary} 
						poster={this.state.movies.one.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.two.title} 
						summary={this.state.movies.two.summary} 
						poster={this.state.movies.two.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.three.title} 
						summary={this.state.movies.three.summary} 
						poster={this.state.movies.three.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.four.title} 
						summary={this.state.movies.four.summary} 
						poster={this.state.movies.four.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.five.title} 
						summary={this.state.movies.five.summary} 
						poster={this.state.movies.five.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.six.title} 
						summary={this.state.movies.six.summary} 
						poster={this.state.movies.six.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.seven.title} 
						summary={this.state.movies.seven.summary} 
						poster={this.state.movies.seven.posterUrl} />
					<OneMovie
						clicked={this.showModal} 
						title={this.state.movies.eight.title} 
						summary={this.state.movies.eight.summary} 
						poster={this.state.movies.eight.posterUrl} />
				</React.Fragment>
			);

		} else {
			singleMovie = <Spinner />;
		}

		return (
			<React.Fragment>
				<div className="main">
					<div className="error-content">
						<div className="top-header span_top">
							<div className="logo">
								<a href="index.html"><img src="images/logo4.png" alt="" /></a>
								<p>Ticket booking app</p>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="container">
								
						<BookingModal 
							show={this.state.modalVisible} 
							onHide={this.hideModal} 
						/>
						{singleMovie}
						</div>
					</div>
				</div> 
			</React.Fragment>
		)
	}
}
    
export default Booking;