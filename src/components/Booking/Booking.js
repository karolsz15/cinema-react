import React, {Component} from 'react';
import axios from 'axios';

import BookingModal from './BookingModal/BookingModal';
import OneMovie from './OneMovie';
import Spinner from '../UI/Spinner/Spinner';
import BookingSelection from './BookingSelection/BookingSelection';

class Booking extends Component {

	// let fullDate = new Date();

	state = {
        modalVisible: false,
        error: false,
		movies: null,
		reservations: null,
		activeDay: new Date().getDay(),
		hours: ['08:00', '10:00', '12:00', '14:00', '18:00', '20:00', '22:00'],
		activeHour: null,
		activeTitle: null
    }

    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            this.setState({
                movies: response.data
			});
			// console.log(response.data)
          })
		  .catch(error => this.setState({ error: true }));
		  
		  axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
          .then(response => {
            this.setState({
                reservations: response.data
			});
			console.log(response.data)
          })
          .catch(error => this.setState({ error: true }));
    }

	showModal = (hour, title) => {
        this.setState({
			modalVisible: true,
			activeHour: hour,
			activeTitle: title
		})
    }

    hideModal = () => {
        this.setState({modalVisible: false})
	}
	
	changeActiveDay = day => {
		this.setState({activeDay: day})
	}

	render() {
		
		let singleMovie = null;
		let reservationModal = null;
		
		if (this.state.movies && this.state.reservations) { 
			singleMovie = (
				<React.Fragment>
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[0], this.state.movies.one.title)}
						clicked2={() => this.showModal(this.state.hours[1], this.state.movies.one.title)}
						title={this.state.movies.one.title} 
						summary={this.state.movies.one.summary} 
						poster={this.state.movies.one.posterUrl}
						hour1={this.state.hours[0]}
						hour2={this.state.hours[1]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[2], this.state.movies.two.title)}
						clicked2={() => this.showModal(this.state.hours[3], this.state.movies.two.title)}
						title={this.state.movies.two.title} 
						summary={this.state.movies.two.summary} 
						poster={this.state.movies.two.posterUrl}
						hour1={this.state.hours[2]}
						hour2={this.state.hours[3]}  />
				</React.Fragment>
			);

			reservationModal = (
				<BookingModal 
					show={this.state.modalVisible} 
					onHide={this.hideModal}
					title={this.state.activeTitle}
					day={this.state.activeDay}
					hour={this.state.activeHour} 
				/>
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
								
						{reservationModal}
						<BookingSelection changed={e => this.changeActiveDay(e.target.value)}/>
						{singleMovie}
						</div>
					</div>
				</div> 
			</React.Fragment>
		);
	};
};
    
export default Booking;