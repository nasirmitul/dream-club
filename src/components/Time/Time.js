import React from 'react';
import './Time.css'

const Time = (props) => {
    const {time} = props.time;

    return (
        <div>
            <button onClick={() => props.handleTime(props.time)}>{time}s</button>
        </div>
    );
};

export default Time;