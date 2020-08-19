import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import BookingModal from './BookingModal/BookingModal';
import OneMovie from './OneMovie';
import Spinner from '../UI/Spinner/Spinner';
import BookingSelection from './BookingSelection/BookingSelection';

const Booking = () => {

	//map state to consts
	const bookingModalVisible = useSelector(state => state.modalVisible);
	const bookingMovies = useSelector(state => state.movies);
	const bookingReservations = useSelector(state => state.reservations);
	const bookingActiveDay = useSelector(state => state.activeDay);
	const bookingActiveHour = useSelector(state => state.activeHour);
	const bookingActiveTitle = useSelector(state => state.activeTitle);

	//map dispatch to consts
	const dispatch = useDispatch();
    const showBookingModal = useCallback( (hour, title) => dispatch({type: 'SHOW_BOOKING_MODAL', hour: hour , title: title}) , [dispatch] );
	const hideModal = useCallback( () => dispatch({type: 'HIDE_MODAL'}) , [dispatch] );
	const setMovies = useCallback( (data) => dispatch({type: 'SET_MOVIES', data: data}) , [dispatch] );
	const setReservations = useCallback( (data) => dispatch({type: 'SET_RESERVATIONS', data: data}) , [dispatch] );
	const setError = useCallback( () => dispatch({type: 'ERROR'}) , [dispatch] );
	const changeActiveDay = useCallback( (day) => dispatch({type: 'CHANGE_ACTIVE_DAY', day: day}) , [dispatch] );

	useEffect(() => {
		axios
          .get("https://karol-cinema.firebaseio.com/test.json")
          .then(response => {
            setMovies(response.data);
          })
          .catch(error => setError);
		  
		axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
          .then(response => {
            setReservations(response.data);
          })
          .catch(error => setError);
	}, [setMovies, setReservations, setError]);
    
	let moviesList, reservationModal, allMovies;
		
	if (bookingMovies && bookingReservations) { 
			
		const moviesArray = _.values(bookingMovies);

		allMovies = moviesArray.map(el => {
			let hoursArray = _.values(el.hours).join('').split(',');
			return (
				<OneMovie 
					clicked1={() => showBookingModal(hoursArray[0], el.title)}
					clicked2={() => showBookingModal(hoursArray[1], el.title)}
					title={el.title} 
					summary={el.summary} 
					poster={el.posterUrl}
					key={el.id}
					hour1={hoursArray[0]}
					hour2={hoursArray[1]}  
				/>
			);
		});

		moviesList = (
			<React.Fragment>
				{allMovies}
			</React.Fragment>
		);

		reservationModal = (
			<BookingModal 
				show={bookingModalVisible} 
				onHide={hideModal}
				title={bookingActiveTitle}
				day={bookingActiveDay}
				hour={bookingActiveHour}
			/>
		);

	} else {
		moviesList = <Spinner />;
	};

	return (
		<React.Fragment>
			<div className="main">
				<div className="error-content">
					<div className="top-header span_top">
						<div className="logo">
							<a href="index.html"><img src="images/logo4.png" alt="logo" /></a>
							<p>Ticket booking app</p>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="container">

						{reservationModal}
						<BookingSelection changed={e => changeActiveDay(e.target.value)} />
						{moviesList}

					</div>
				</div>
			</div> 
		</React.Fragment>
	);
};
    
export default Booking;