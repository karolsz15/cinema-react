import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class SeatsSelection extends Component {

    // NOW HANDLED WITH REDUX
    // state = {
    //     day: this.props.day,
    //     hour: this.props.hour,
    //     title: this.props.title,
    //     activeSeats: [],
    //     reservedSeats: [],
    //     reservationName: null,
    //     reservationSurname: null,
    //     reservationEmail: null,
    //     reservationPhone: null,
    //     summaryVisible: false,
    //     error: false,
    //     booked: false,
    //     bookable: false
    // }

    componentDidMount() {
        axios
        .get(`https://karol-cinema.firebaseio.com/reservations/${this.props.selectionDay}/${this.props.selectionHour}/reservedSeats.json`)
        .then(response => {
            if (response.data === null) {
                this.props.setReservedSeats([]);
            } else {
                this.props.setReservedSeats(response.data);
            }
        })
        .catch(error => this.props.setError);
    }

    bookingHandler = () => {
        
        let allReservedSeats = [...this.props.selectionReservedSeats, ...this.props.selectionActiveSeats];
        let customerData = {
            seats: this.props.selectionActiveSeats,
            name: this.props.selectionName,
            surname: this.props.selectionSurname,
            email: this.props.selectionEmail,
            phone: this.props.selectionPhone
        };

        axios.put(`https://karol-cinema.firebaseio.com/reservations/${this.props.selectionDay}/${this.props.selectionHour}/reservedSeats.json`, allReservedSeats)
          .then( response => {
            console.log(response);
          })
          .catch( error => {
            console.log(error);
          });

        axios.post(`https://karol-cinema.firebaseio.com/reservations/${this.props.selectionDay}/${this.props.selectionHour}/customersData.json`, customerData)
        .then( response => {
          console.log(response);
        })
        .catch( error => {
            console.log(error);
        });

        this.props.reserveSeats(allReservedSeats);
    }

    render() {

        let seats = [];
        
        for (let i=1; i<=100; i++) {
            let classes;

            if (this.props.selectionReservedSeats && this.props.selectionReservedSeats.includes(i)) {
                classes = "seat reserved"
            } 
            else if (this.props.selectionActiveSeats.includes(i)) {
                classes = "seat active"
            }
            else {
                classes = "seat";
            }

            seats.push(<div className={classes} key={i} onClick={() => this.props.toggleActivatedSeat(i)}>{i}</div>);
        }

        let summary;

        if (this.props.selectionActiveSeats.length === 0) {
            summary = (
                <div> Please choose your seats! </div>
            )
        } else if (this.props.selectionBooked) {
            summary = (
                <div> Your seats are sucessfully booked! </div>
            )
        } else if (!this.props.selectionBooked && (this.props.selectionName && this.props.selectionSurname && this.props.selectionEmail && this.props.selectionPhone) && this.props.selectionActiveSeats.length !== 0) {
            summary = (
                <div>
                    <strong>Details of your booking</strong><br />
                    Seats: {this.props.selectionActiveSeats.join(', ')} <br />
                    Name: {this.props.selectionName} <br />
                    Surname: {this.props.selectionSurname} <br />
                    E-mail: {this.props.selectionEmail} <br />
                    Phone number: {this.props.selectionPhone}
                </div>
            );
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

                {!this.props.selectionBooked ? (
                    <React.Fragment>
                        <form className="bookingForm">
                            <div id="detail" className="detail">
                                <input id="name" type="text" placeholder="name" onChange={e => this.props.updateName(e.target.value)} required />
                                <input id="surname" type="text" placeholder="surname" onChange={e => this.props.updateSurname(e.target.value)} required />
                                <input id="email" type="email" placeholder="e-mail" onChange={e => this.props.updateEmail(e.target.value)} required />
                                <input id="phone" type="tel" placeholder="phone" onChange={e => this.props.updatePhone(e.target.value)}  required />
                            </div>
                            <div className="buttonsContainer">
                                <button 
                                    onClick={(event) => this.props.showSummary(event)}
                                    disabled={this.props.selectionSummaryVisible} 
                                    className="btn btn-secondary bookingButton">Summary</button>
                                <input 
                                    onClick={this.bookingHandler} 
                                    disabled={!this.props.selectionBookable || this.props.selectionActiveSeats.length === 0}

                                    type="submit" 
                                    className="btn btn-secondary bookingButton" 
                                    value="Book!"></input>
                            </div>
                        </form>
                    </React.Fragment>) : null}

                {this.props.selectionSummaryVisible ? summary : null}
            </React.Fragment>
        );
    };
};

const mapStateToProps = state => {
    return {
        selectionError: state.error,
        selectionDay: state.activeDay,
        selectionHour: state.activeHour,
        selectionTitle: state.activeTitle,
        selectionActiveSeats: state.activeSeats,
        selectionReservedSeats: state.reservedSeats,
        selectionName: state.reservationName,
        selectionSurname: state.reservationSurname,
        selectionEmail: state.reservationEmail,
        selectionPhone: state.reservationPhone,
        selectionSummaryVisible: state.summaryVisible,
        selectionBooked: state.booked,
        selectionBookable: state.bookable
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch({type: 'HIDE_MODAL'}),
		setError: () => dispatch({type: 'ERROR'}),
        toggleActivatedSeat: (seat) => dispatch({type: 'TOGGLE_ACTIVATED_SEAT', seat: seat}),
        updateName: (name) => dispatch({type: 'UPDATE_NAME', name: name}),
        updateSurname: (surname) => dispatch({type: 'UPDATE_SURNAME', surname: surname}),
        updatePhone: (phone) => dispatch({type: 'UPDATE_PHONE', phone: phone}),
        updateEmail: (email) => dispatch({type: 'UPDATE_EMAIL', email: email}),
        reserveSeats: (seats) => dispatch({type: 'RESERVE_SEATS', seats: seats}),
        showSummary: (e) => dispatch({type: 'SHOW_SUMMARY', e: e}),
        setBookable: () => dispatch({type: 'SET_BOOKABLE'}),
        unSetBookable: () => dispatch({type: 'UNSET_BOOKABLE'}),
        setReservedSeats: (data) => dispatch({type: 'SET_RESERVED_SEATS', data: data})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SeatsSelection);