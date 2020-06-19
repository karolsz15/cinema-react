import React, {Component} from 'react';
import axios from 'axios';

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
			// console.log(response.data)
          })
		  .catch(error => this.setState({ error: true }));
		  
		  axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
          .then(response => {
            this.setState({
                reservations: response.data
			});
			// console.log(response.data)
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
						clicked1={() => this.showModal(this.state.hours[22], this.state.movies.one.title)}
						clicked2={() => this.showModal(this.state.hours[24], this.state.movies.one.title)}
						title={this.state.movies.one.title} 
						summary={this.state.movies.one.summary} 
						poster={this.state.movies.one.posterUrl}
						hour1={this.state.hours[22]}
						hour2={this.state.hours[24]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[11], this.state.movies.two.title)}
						clicked2={() => this.showModal(this.state.hours[13], this.state.movies.two.title)}
						title={this.state.movies.two.title} 
						summary={this.state.movies.two.summary} 
						poster={this.state.movies.two.posterUrl}
						hour1={this.state.hours[11]}
						hour2={this.state.hours[13]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[14], this.state.movies.three.title)}
						clicked2={() => this.showModal(this.state.hours[16], this.state.movies.three.title)}
						title={this.state.movies.three.title} 
						summary={this.state.movies.three.summary} 
						poster={this.state.movies.three.posterUrl}
						hour1={this.state.hours[14]}
						hour2={this.state.hours[16]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[15], this.state.movies.four.title)}
						clicked2={() => this.showModal(this.state.hours[17], this.state.movies.four.title)}
						title={this.state.movies.four.title} 
						summary={this.state.movies.four.summary} 
						poster={this.state.movies.four.posterUrl}
						hour1={this.state.hours[15]}
						hour2={this.state.hours[17]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[18], this.state.movies.five.title)}
						clicked2={() => this.showModal(this.state.hours[20], this.state.movies.five.title)}
						title={this.state.movies.five.title} 
						summary={this.state.movies.five.summary} 
						poster={this.state.movies.five.posterUrl}
						hour1={this.state.hours[18]}
						hour2={this.state.hours[20]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[19], this.state.movies.six.title)}
						clicked2={() => this.showModal(this.state.hours[21], this.state.movies.six.title)}
						title={this.state.movies.six.title} 
						summary={this.state.movies.six.summary} 
						poster={this.state.movies.six.posterUrl}
						hour1={this.state.hours[19]}
						hour2={this.state.hours[21]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[9], this.state.movies.seven.title)}
						clicked2={() => this.showModal(this.state.hours[10], this.state.movies.seven.title)}
						title={this.state.movies.seven.title} 
						summary={this.state.movies.seven.summary} 
						poster={this.state.movies.seven.posterUrl}
						hour1={this.state.hours[9]}
						hour2={this.state.hours[10]}  />
					<OneMovie 
						clicked1={() => this.showModal(this.state.hours[23], this.state.movies.eight.title)}
						clicked2={() => this.showModal(this.state.hours[12], this.state.movies.eight.title)}
						title={this.state.movies.eight.title} 
						summary={this.state.movies.eight.summary} 
						poster={this.state.movies.eight.posterUrl}
						hour1={this.state.hours[23]}
						hour2={this.state.hours[12]}  />
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