import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

import BookingModal from './BookingModal/BookingModal';
import OneMovie from './OneMovie';
import Spinner from '../UI/Spinner/Spinner';
import BookingSelection from './BookingSelection/BookingSelection';
import {connect} from 'react-redux';

class Booking extends Component {

    // NOW HANDLED WITH REDUX
	// state = {
    //     modalVisible: false,
    //     error: false,
	// 	movies: null,
	// 	reservations: null,
	// 	activeDay: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()],
	// 	activeHour: null,
	// 	activeTitle: null
    // }

    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            this.props.setMovies(response.data);
          })
          .catch(error => this.props.setError);
		  
		  axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
          .then(response => {
            this.props.setReservations(response.data);
          })
          .catch(error => this.props.setError);
    }

	// showModal = (hour, title) => {
    //     this.setState({
	// 		modalVisible: true,
	// 		activeHour: hour,
	// 		activeTitle: title
	// 	})
    // }

    // hideModal = () => {
    //     this.setState({modalVisible: false})
	// }
	
	// changeActiveDay = day => {
	// 	this.setState({activeDay: day})
	// }

	render() {
		
		let moviesList = null;
		let reservationModal = null;
		let allMovies = null
		
		if (this.props.bookingMovies && this.props.bookingReservations) { 
			
			const moviesArray = _.values(this.props.bookingMovies);

			allMovies = moviesArray.map(el => {
					let hoursArray = _.values(el.hours).join('').split(',');
					return (
						<OneMovie 
							clicked1={() => this.props.showBookingModal(hoursArray[0], el.title)}
							clicked2={() => this.props.showBookingModal(hoursArray[1], el.title)}
							title={el.title} 
							summary={el.summary} 
							poster={el.posterUrl}
							key={el.id}
							hour1={hoursArray[0]}
							hour2={hoursArray[1]}  />
					);
			});

			moviesList = (
				<React.Fragment>
					{allMovies}
				</React.Fragment>
			);

			reservationModal = (
				<BookingModal 
					show={this.props.bookingModalVisible} 
					onHide={this.props.hideModal}
					title={this.props.bookingActiveTitle}
					day={this.props.bookingActiveDay}
					hour={this.props.bookingActiveHour}
					reservations={this.props.bookingReservations} />
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
						<BookingSelection changed={e => this.props.changeActiveDay(e.target.value)}/>
						{moviesList}
						</div>
					</div>
				</div> 
			</React.Fragment>
		);
	};
};

const mapStateToProps = state => {
    return {
        bookingModalVisible: state.modalVisible,
        bookingError: state.error,
		bookingMovies: state.movies,
		bookingReservations: state.reservations,
		bookingActiveDay: state.activeDay,
		bookingActiveHour: state.activeHour,
		bookingActiveTitle: state.activeTitle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showBookingModal: (hour, title) => dispatch({type: 'SHOW_BOOKING_MODAL', hour: hour , title: title}),
        hideModal: () => dispatch({type: 'HIDE_MODAL'}),
		setMovies: (data) => dispatch({type: 'SET_MOVIES', data: data}),
		setReservations: (data) => dispatch({type: 'SET_RESERVATIONS', data: data}),
		setError: () => dispatch({type: 'ERROR'}),
		changeActiveDay: (day) => dispatch({type: 'CHANGE_ACTIVE_DAY', day: day}),
    };
};

    
export default connect(mapStateToProps,mapDispatchToProps)(Booking);