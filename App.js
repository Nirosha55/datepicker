import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
 
  return (
    <DateTimePicker
      mode="date"
      dateFormat="yyyy/MM/dd"
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      value={new Date()}
      // minimumDate={new Date()}
      maximumDate={new Date()}
    />
  );
};
export default App;
