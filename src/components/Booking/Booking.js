import React, {Component} from 'react';
import axios from 'axios';

import BookingModal from './BookingModal/BookingModal';

class Booking extends Component {
	
	state = {
        modalVisible: true,
        error: false,
        movies: null
    }

    componentDidMount() {
        axios
          .get("https://karol-cinema.firebaseio.com/reservations.json")
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
		return (
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

						{/* <!-- MOVIES POSTERS AND HOURS --> */}
						<div className="media">
							<img src="images/r11.jpg" className="mr-3" alt="..."></img>
							<div className="media-body">
							<h5 className="mt-0">Frozen II</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							<br />
							<div className="mt-5">
							<a className="btn btn-secondary" href="#selection">10:00</a>
							<a className="btn btn-secondary" href="#selection">13:00</a>
							</div>
							</div>
						</div>
						<hr/>

						<div className="media">
							<img src="images/r12.jpg" className="mr-3" alt="..." />
							<div className="media-body">
							<h5 className="mt-0">Joker</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							<br />
							<div className="mt-5">
							<a className="btn btn-secondary" href="#selection">20:00</a>
							<a className="btn btn-secondary" href="#selection">22:00</a>
							</div>
							</div>
						</div>
						<hr/>

						<div className="media">
							<img src="images/r13.jpg" className="mr-3" alt="..." />
							<div className="media-body">
							<h5 className="mt-0">Knives Out</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							<br />
							<div className="mt-5">
							<a className="btn btn-secondary" href="#selection">16:00</a>
							<a className="btn btn-secondary" href="#selection">21:00</a>
							</div>
							</div>
						</div>
						<hr/>
					</div>
				</div>
			</div> 
		)
	}
}
    
export default Booking;