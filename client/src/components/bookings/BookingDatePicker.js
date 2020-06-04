import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import "./BookingDatePicker.scss";

const BookingDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(moment(startDate).format("YYYY/MM/DD"), moment(endDate).format("YYYY/MM/DD"));

  return (
    <>
      <div className="field">
        <div className="control customDatePickerWidth">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="input"
            type="text"
            strictParsing
          />
        </div>
      </div>
      <div className="field">
        <div className="control customDatePickerWidth">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="input"
            type="text"
            strictParsing
          />
        </div>
      </div>
    </>
  );
};

export default BookingDatePicker;
