import React from 'react';
import PropTypes from 'prop-types';
import { format, add } from 'date-fns';

const bookingSelection = (props) => {
  const { changed } = props;

  const fullDate = new Date();
  const dayOfMonth = format(fullDate, 'dd');
  const dayOfWeek = format(fullDate, 'cccc');
  const month = format(fullDate, 'LL');

  String.prototype.unCapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
  };

  return (
    <select
      onChange={changed}
      defaultValue={dayOfWeek}
      className="custom-select custom-select-lg mb-4"
      id="day"
      name="daySelection"
    >
      {/* default value - current day */}
      <option value={dayOfWeek.unCapitalize()}>
        {dayOfWeek} {dayOfMonth}.{month}
      </option>

      {/* options' values - list of future six days */}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <option
          value={format(add(fullDate, { days: n }), 'cccc').unCapitalize()}
          key={format(add(fullDate, { days: n }), 'cccc')}
        >
          {format(add(fullDate, { days: n }), 'cccc')} {format(add(fullDate, { days: n }), 'dd')}.
          {format(add(fullDate, { days: n }), 'LL')}
        </option>
      ))}
    </select>
  );
};

bookingSelection.propTypes = {
  changed: PropTypes.func,
};

export default bookingSelection;
