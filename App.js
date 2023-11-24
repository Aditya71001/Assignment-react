import React from 'react'
import HomePage from './Components/HomePage'
import {useState} from 'react'
import Chatbot from './Components/Chatbot'
import Calender from './Components/Calender'
import TimeSlot from './Components/TimeSlot'


const App = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimeSlot, setShowTimeSlot] = useState(false);
  
    const handleEnrollClick = () => {
      setShowChatbot(true);
    };
  
    const handleChatbotGotIt = () => {
      if (showChatbot) setShowCalendar(true);
    };
  
    const handleCalendarSelection = () => {
      // Logic for handling calendar selection
      setShowTimeSlot(true);
    };
  
    const handleTimeSlotSelection = (selectedSlot) => {
      // Logic for handling time slot selection
      console.log('Selected Time Slot:', selectedSlot);
    };
  
    return (
      <div className="App">
        {!showChatbot && (
          <div>
            <h1>Enter into Student Info System</h1>
            <button onClick={handleEnrollClick}>Enroll Now!</button>
          </div>
        )}
        {showChatbot && (
          <Chatbot
            onGotIt={handleChatbotGotIt}
            showCalendar={showCalendar}
            showTimeSlot={showTimeSlot}
          />
        )}
        {showCalendar && <calendar onDateSelect={handleCalendarSelection} />}
        {showTimeSlot && <TimeSlot onTimeSlotSelect={handleTimeSlotSelection} />}
      </div>
    );
  };
  
  export default App;