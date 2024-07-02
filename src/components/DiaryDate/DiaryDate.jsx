import React, { useState, forwardRef } from "react";
 
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import CalendarIcon from "../../images/svg/calendar.svg"
import { useDispatch } from "react-redux";
import { setDate } from "redux/products/productsSlice";
import moment from "moment/moment";
 import css from "./DiaryDate.module.css"

export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch()
  const handleChange = (date) => {
    const formattedDate = moment(date).format("DD.MM.YYYY")
    setSelectedDate(date);
    dispatch(setDate(formattedDate)) 
  }
  
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <button className={css.dateButton} onClick={onClick} ref={ref}>
        {value}
        <img src={CalendarIcon} alt="calendar icon" />
      </button>
    </div>
  ));
  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => handleChange(date)} 
        dateFormat="dd.MM.yyyy"
        customInput={<ExampleCustomInput />}
        maxDate={new Date()}
      />
    </div>
  )
}