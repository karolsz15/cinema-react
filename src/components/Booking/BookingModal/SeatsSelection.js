import React, {Component} from 'react';

class SeatsSelection extends Component {
    state = {
        activeSeats: []
    }

    render() {

        let seats = [];

        for (let i=1; i<=100; i++) {
            seats.push(<div className="seat">{i}</div>);
        }

        return (
            <React.Fragment>
                <div id="selection" className="selection">
                    {/* You are booking seats for day: {props.day} hour: {props.hour} */}
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