import React from 'react';

const bookingSelection = props => {
    var fullDate = new Date();
    const dayOfMonth = fullDate.getDate();
    const dayOfWeek = fullDate.getDay();
    const month = fullDate.getMonth();

    const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
                      "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    String.prototype.Capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <select onChange={props.changed} defaultValue={weekDays[dayOfWeek]} className="custom-select custom-select-lg" id="day" name="daySelection" style={{marginBottom: '1em'}}>
            <option value={weekDays[dayOfWeek]}>
                {weekDays[dayOfWeek].Capitalize()} {dayOfMonth}.{month}
            </option>
            {/* HANDLE EDGE CASE WITH LAST DAY OF MONTH LATER! E.G. 31.06 !-> 32.06*/}
           {[1,2,3,4,5,6].map(n => (
               <option value={weekDays[dayOfWeek+n]} key={weekDays[dayOfWeek+n]}>
                  {weekDays[dayOfWeek+n].Capitalize()} {dayOfMonth+n}.{month} 
               </option>
           ))}
        </select>
    );
};

export default bookingSelection;