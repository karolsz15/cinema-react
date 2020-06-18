import React, {Component} from 'react';

class SeatsSelection extends Component {

    state = {
        inactiveSeats: [],
        activeSeats: [],
        reservedSeats: [1, 66, 67, 68]
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

        return (
            <React.Fragment>
                <div id="selection" className="selection">
                    <div id="screen" className="screen">SCREEN</div>
                    <div id="seatsContainer" className="seatsContainer">
                        {seats}
                    </div>
                </div>
                <div id="detail" className="">
                    <input id="name" placeholder="name"/>
                    <input id="surname" placeholder="surname"/>
                    <input id="email" placeholder="e-mail"/>
                    <input id="phone" placeholder="phone"/>
                </div>
                <div id="summation" className="summation">Summary</div>
                <div id="summationList" className="summationList"></div>
                <div id="finishReservation" className="finishReservation">Book!</div>
            </React.Fragment>
        );
    };
};

export default SeatsSelection;