import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingDatePicker.scss";

const BookingDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
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
            className="input"
            type="text"
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
          />
        </div>
      </div>
    </>
  );
};

export default BookingDatePicker;
