import React from 'react';
import './Activity.css'

const Activity = (props) => {

    const {id, picture, age, time, name, about} = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <h3 className='name'>{name}</h3>
            <p className='about'>{about}</p>
            <p className='age'>For age: {age}</p>
            <p className='time'>Time required: {time}s</p>
            <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default Activity;