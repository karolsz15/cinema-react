import React from 'react';

const bookingSelection = props => {
    var fullDate = new Date();
    const dayOfMonth = fullDate.getDate();
    const dayOfWeek = fullDate.getDay();
    const month = fullDate.getMonth();

    const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
                      "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    return (
        <select onChange={props.changed} className="custom-select custom-select-lg" id="day" name="daySelection" style={{marginBottom: '1em'}}>
            <option selected value={weekDays[dayOfWeek]}>
                {weekDays[dayOfWeek]} {dayOfMonth}.{month}
            </option>
            {/* HANDLE EDGE CASE WITH LAST DAY OF MONTH LATER! E.G. 31.06 !-> 32.06*/}
           {[1,2,3,4,5,6].map(n => (
               <option value={weekDays[dayOfWeek+n]}>
                  {weekDays[dayOfWeek+n]} {dayOfMonth+n}.{month} 
               </option>
           ))}
        </select>
    );
};

export default bookingSelection;