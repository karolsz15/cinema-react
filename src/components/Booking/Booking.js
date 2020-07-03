import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import BookingModal from './BookingModal/BookingModal';
import OneMovie from './OneMovie';
import Spinner from '../UI/Spinner/Spinner';
import BookingSelection from './BookingSelection/BookingSelection';

class Booking extends Component {

	state = {
        modalVisible: false,
        error: false,
		movies: null,
		reservations: null,
		activeDay: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()],
		hours: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
				'06:00', '07:00', '08:00', '09:00', '10:00',
				'11:00', '12:00', '13:00', '14:00', '15:00',
				'16:00', '17:00','18:00', '19:00', '20:00',
				'21:00', '22:00', '23:00', '24:00'],
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
          })
		  .catch(error => this.setState({ error: true }));
		  
		  axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
          .then(response => {
            this.setState({
                reservations: response.data
			});
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
		
		let moviesList = null;
		let reservationModal = null;
		let allMovies = null
		
		if (this.state.movies && this.state.reservations) { 
			
			const moviesArray = _.values(this.state.movies);

			{allMovies = moviesArray.map(el => {
					let hoursArray = _.values(el.hours).join('').split(',');
					return (
						<OneMovie 
							clicked1={() => this.showModal(hoursArray[0], el.title)}
							clicked2={() => this.showModal(hoursArray[1], el.title)}
							title={el.title} 
							summary={el.summary} 
							poster={el.posterUrl}
							hour1={hoursArray[0]}
							hour2={hoursArray[1]}  />
					);
				}
			)};

			moviesList = (
				<React.Fragment>
					{allMovies}
				</React.Fragment>
			);

			reservationModal = (
				<BookingModal 
					show={this.state.modalVisible} 
					onHide={this.hideModal}
					title={this.state.activeTitle}
					day={this.state.activeDay}
					hour={this.state.activeHour}
					reservations={this.state.reservations} />
			);

		} else {
			moviesList = <Spinner />;
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
						{moviesList}
						</div>
					</div>
				</div> 
			</React.Fragment>
		);
	};
};
    
export default Booking;