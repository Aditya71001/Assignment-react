import React from 'react'

const HomePage = ({handleEnrollClick}) => {
    return (
        <div>
            <h1>Enter into Student Info System</h1>
            <button onClick={handleEnrollClick}>Enroll Now!</button>
        </div>
    );
};


export default HomePage;