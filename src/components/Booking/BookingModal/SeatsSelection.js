import React, {Component} from 'react';
import axios from 'axios';

class SeatsSelection extends Component {

    state = {
        day: this.props.day,
        hour: this.props.hour,
        title: this.props.title,
        activeSeats: [],
        reservedSeats: [], //fetch from DB
        reservationName: null,
        reservationSurname: null,
        reservationEmail: null,
        reservationPhone: null,
        summaryVisible: false,
        error: false,
        booked: false,
    }

    //get up to date reserved seats
    componentDidMount() {
        axios
        .get(`https://karol-cinema.firebaseio.com/reservations/monday/10/reservedSeats.json`)
        .then(response => {
            this.setState({
                reservedSeats: response.data
            });
        })
        .catch(error => this.setState({ error: true }));
    }

    toggleActivatedSeat = seat => {
        if (this.state.activeSeats.includes(seat)) {
            let newActiveSeats = [...this.state.activeSeats];
            newActiveSeats = newActiveSeats.filter(item => item !== seat);
            this.setState({
                activeSeats: newActiveSeats
            });
        } else {
            let newActiveSeats = [...this.state.activeSeats];
            newActiveSeats.push(seat);
            this.setState({
                activeSeats: newActiveSeats
            });
        };
    }

    updateName = newName => {
        this.setState({
            reservationName: newName
        });
    }

    updateSurname = newSurname => {
        this.setState({
            reservationSurname: newSurname
        });
    }

    updateEmail = newEmail => {
        this.setState({
            reservationEmail: newEmail
        });
    }

    updatePhone = newPhone => {
        this.setState({
            reservationPhone: newPhone
        });
    }

    showSummary = () => {
        this.setState({
            summaryVisible: true
        });
    }


    bookingHandler = () => {

        let allReservedSeats = [...this.state.reservedSeats, ...this.state.activeSeats];
        let customerData = {
            seats: this.state.activeSeats,
            name: this.state.reservationName,
            surname: this.state.reservationSurname,
            email: this.state.reservationEmail,
            phone: this.state.reservationPhone
        };

        axios.put(`https://karol-cinema.firebaseio.com/reservations/monday/10/reservedSeats.json`, allReservedSeats)
        .then( response => {
          console.log(response);
        })
        .catch( error => {
          console.log(error);
        });

        // axios.put(`https://karol-cinema.firebaseio.com/reservations/${this.state.day}/${this.state.hour}/reservedSeats.json`, allReservedSeats)
        //   .then( response => {
        //     console.log(response);
        //   })
        //   .catch( error => {
        //     console.log(error);
        //   });

        axios.post(`https://karol-cinema.firebaseio.com/reservations/monday/10/customersData.json`, customerData)
        .then( response => {
          console.log(response);
        })
        .catch( error => {
            console.log(error);
        });

        this.setState({
            reservedSeats: allReservedSeats,
            booked: true
        })
    }

    render() {

        let seats = [];
        
        for (let i=1; i<=100; i++) {
            let classes;

            if (this.state.reservedSeats && this.state.reservedSeats.includes(i)) {
                classes = "seat reserved"
            } 
            else if (this.state.activeSeats.includes(i)) {
                classes = "seat active"
            }
            else {
                classes = "seat";
            }

            seats.push(<div className={classes} id={i} onClick={() => this.toggleActivatedSeat(i)}>{i}</div>);
        }

        let summary;

        if (this.state.activeSeats.length === 0) {
            summary = (
                <div> Please choose your seats! </div>
            )
        } else if (this.state.booked) {
            summary = (
                <div> Your seats are sucessfully booked! </div>
            )
        } else if (!this.state.booked && (this.state.reservationName && this.state.reservationSurname && this.state.reservationEmail && this.state.reservationPhone) && this.state.activeSeats.length !== 0) {
            summary = (
                <div>
                    <strong>Details of your booking</strong><br />
                    Seats: {this.state.activeSeats.join(', ')} <br />
                    Name: {this.state.reservationName} <br />
                    Surname: {this.state.reservationSurname} <br />
                    E-mail: {this.state.reservationEmail} <br />
                    Phone number: {this.state.reservationPhone}
                </div>
            )
        } else {
            summary = (
                <div> Please fill the form correctly! </div>
            )
        }

        return (
            <React.Fragment>
                <div id="selection" className="selection">
                    <div id="screen" className="screen">SCREEN</div>
                    <div id="seatsContainer" className="seatsContainer">
                        {seats}
                    </div>
                </div>

                {!this.state.booked ? (
                    <React.Fragment>
                        <form className="bookingForm">
                            <div id="detail" className="detail">
                                <input id="name" type="text" placeholder="name" onChange={e => this.updateName(e.target.value)} required />
                                <input id="surname" type="text" placeholder="surname" onChange={e => this.updateSurname(e.target.value)} required />
                                <input id="email" type="email" placeholder="e-mail" onChange={e => this.updateEmail(e.target.value)} required />
                                <input id="phone" type="tel" placeholder="phone" onChange={e => this.updatePhone(e.target.value)}  required />
                            </div>
                            <div className="buttonsContainer">
                                <button onClick={this.showSummary} id="summation" className="btn btn-secondary bookingButton">Summary</button>
                                <input type="submit" onClick={this.bookingHandler} id="finishReservation" className="btn btn-secondary bookingButton" value="Book!"></input>
                            </div>
                        </form>
                    </React.Fragment>) : null}

                {this.state.summaryVisible ? summary : null}
            </React.Fragment>
        );
    };
};

export default SeatsSelection;