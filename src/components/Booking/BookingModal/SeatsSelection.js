import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';

const SeatsSelection = () => {

    //map state to consts
    const selectionDay = useSelector(state => state.bookingReducer.activeDay);
    const selectionHour = useSelector(state => state.bookingReducer.activeHour);
    const selectionActiveSeats = useSelector(state => state.bookingReducer.activeSeats);
    const selectionReservedSeats = useSelector(state => state.bookingReducer.reservedSeats);
    const selectionName = useSelector(state => state.bookingReducer.reservationName);
    const selectionSurname = useSelector(state => state.bookingReducer.reservationSurname);
    const selectionEmail = useSelector(state => state.bookingReducer.reservationEmail);
    const selectionPhone = useSelector(state => state.bookingReducer.reservationPhone);
    const selectionSummaryVisible = useSelector(state => state.bookingReducer.summaryVisible);
    const selectionBooked = useSelector(state => state.bookingReducer.booked);
    const selectionBookable = useSelector(state => state.bookingReducer.bookable);

    //map dispatch to consts
    const dispatch = useDispatch();
    const setError = useCallback( () => dispatch({type: 'ERROR'}) , [dispatch] );
    const toggleActivatedSeat = useCallback( (seat) => dispatch({type: 'TOGGLE_ACTIVATED_SEAT', seat: seat}) , [dispatch] );
    const updateName = useCallback( (name) => dispatch({type: 'UPDATE_NAME', name: name}) , [dispatch] );
    const updateSurname = useCallback( (surname) => dispatch({type: 'UPDATE_SURNAME', surname: surname}) , [dispatch] );
    const updatePhone = useCallback( (phone) => dispatch({type: 'UPDATE_PHONE', phone: phone}) , [dispatch] );
    const updateEmail = useCallback( (email) => dispatch({type: 'UPDATE_EMAIL', email: email}) , [dispatch] );
    const reserveSeats = useCallback( (seats) => dispatch({type: 'RESERVE_SEATS', seats: seats}) , [dispatch] );
    const showSummary = useCallback( (e) => dispatch({type: 'SHOW_SUMMARY', e: e}) , [dispatch] );
    const setReservedSeats = useCallback( (data) => dispatch({type: 'SET_RESERVED_SEATS', data: data}) , [dispatch] );

    //get reserved seats HTTP request
    useEffect(() => {
        axios
        .get(`https://karol-cinema.firebaseio.com/reservations/${selectionDay}/${selectionHour}/reservedSeats.json`)
        .then(response => {
            if (response.data === null) {
                setReservedSeats([]);
            } else {
                setReservedSeats(response.data);
            }
        })
        .catch(error => setError);
    }, [setReservedSeats, setError]);
        
    const bookingHandler = () => {
        let allReservedSeats = [...selectionReservedSeats, ...selectionActiveSeats];
        let customerData = {
            seats: selectionActiveSeats,
            name: selectionName,
            surname: selectionSurname,
            email: selectionEmail,
            phone: selectionPhone
        };

        axios.put(`https://karol-cinema.firebaseio.com/reservations/${selectionDay}/${selectionHour}/reservedSeats.json`, allReservedSeats)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });

        axios.post(`https://karol-cinema.firebaseio.com/reservations/${selectionDay}/${selectionHour}/customersData.json`, customerData)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });
        reserveSeats(allReservedSeats);
    };

    const seats = [];
        
    for (let i=1; i<=100; i++) {
        let classes;
        if (selectionReservedSeats && selectionReservedSeats.includes(i)) {
            classes = "seat reserved"
        } else if (selectionActiveSeats.includes(i)) {
            classes = "seat active"
        } else {
            classes = "seat";
        }
        seats.push(<div className={classes} key={i} onClick={() => toggleActivatedSeat(i)}>{i}</div>);
    };

    let summary;

    if (selectionActiveSeats.length === 0) {
        summary = (
            <div> Please choose your seats! </div>
        );
    } else if (selectionBooked) {
        summary = (
            <div> Your seats are sucessfully booked! </div>
        );
    } else if (!selectionBooked && (selectionName && selectionSurname && selectionEmail && selectionPhone) && selectionActiveSeats.length !== 0) {
        summary = (
            <div>
                <strong>Details of your booking</strong><br />
                Seats: {selectionActiveSeats.join(', ')} <br />
                Name: {selectionName} <br />
                Surname: {selectionSurname} <br />
                E-mail: {selectionEmail} <br />
                Phone number: {selectionPhone}
            </div>
        );
    } else {
        summary = (
            <div> Please fill the form correctly! </div>
        );
    };

    return (
        <React.Fragment>
            <div id="selection" className="selection">
                <div id="screen" className="screen">SCREEN</div>
                <div id="seatsContainer" className="seatsContainer">
                    {seats}
                </div>
            </div>

            {!selectionBooked ? (
                <React.Fragment>
                    <form className="bookingForm">
                        <div id="detail" className="detail">
                            <input id="name" type="text" placeholder="name" onChange={e => updateName(e.target.value)} required />
                            <input id="surname" type="text" placeholder="surname" onChange={e => updateSurname(e.target.value)} required />
                            <input id="email" type="email" placeholder="e-mail" onChange={e => updateEmail(e.target.value)} required />
                            <input id="phone" type="tel" placeholder="phone" onChange={e => updatePhone(e.target.value)}  required />
                        </div>
                        <div className="buttonsContainer">
                            <button 
                                onClick={(event) => showSummary(event)}
                                disabled={selectionSummaryVisible} 
                                className="btn btn-secondary bookingButton">Summary</button>
                            <input 
                                onClick={() => bookingHandler()} 
                                disabled={!selectionBookable || selectionActiveSeats.length === 0}

                                type="submit" 
                                className="btn btn-secondary bookingButton" 
                                value="Book!"></input>
                        </div>
                    </form>
                </React.Fragment>) : null}

            {selectionSummaryVisible ? summary : null}
        </React.Fragment>
    );
};

export default SeatsSelection;