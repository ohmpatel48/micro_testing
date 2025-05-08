import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const DateTimePickerComponent = ({ onChange }) => {
  const [value, setValue] = useState(new Date());
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        // Close the picker or perform any desired action
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div ref={pickerRef}>
      <DateTimePicker onChange={handleChange} value={value} />
    </div>
  );
};

export default DateTimePickerComponent;
