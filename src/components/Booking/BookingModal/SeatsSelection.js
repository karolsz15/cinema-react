import React, {Component} from 'react';

class SeatsSelection extends Component {

    state = {
        activeSeats: [],
        reservedSeats: [1, 66, 67, 68], //fetch from DB
        reservationName: null,
        reservationSurname: null,
        reservationEmail: null,
        reservationPhone: null,
        summaryVisible: false
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

    render() {

        let seats = [];
        
        for (let i=1; i<=100; i++) {
            let classes;

            if (this.state.reservedSeats.includes(i)) {
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

        let summary = (
            <div>
                Details of your booking: <br />
                Seats: {this.state.activeSeats.join(', ')} <br />
                Name: {this.state.reservationName} <br />
                Surname: {this.state.reservationSurname} <br />
                E-mail: {this.state.reservationEmail} <br />
                Phone number: {this.state.reservationPhone}
            </div>
        );

        return (
            <React.Fragment>
                <div id="selection" className="selection">
                    <div id="screen" className="screen">SCREEN</div>
                    <div id="seatsContainer" className="seatsContainer">
                        {seats}
                    </div>
                </div>
                <div id="detail" className="">
                    <input id="name" placeholder="name" onChange={e => this.updateName(e.target.value)} />
                    <input id="surname" placeholder="surname" onChange={e => this.updateSurname(e.target.value)} />
                    <input id="email" placeholder="e-mail" onChange={e => this.updateEmail(e.target.value)} />
                    <input id="phone" placeholder="phone" onChange={e => this.updatePhone(e.target.value)} />
                </div>
                <div className="buttonsContainer">
                    <button onClick={this.showSummary} id="summation" className="btn btn-secondary">Summary</button>
                    <button id="finishReservation" className="btn btn-secondary">Book!</button>
                </div>
                {this.state.summaryVisible ? summary : null}

            </React.Fragment>
        );
    };
};

export default SeatsSelection;