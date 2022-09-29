import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Information from '../Information/Information';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const addToList = (activity) =>{
        const totalTime = [...exerciseTime, activity];
        setExerciseTime(totalTime);
    }

    return (
        <div className='activity-container'>
            <div className="all-activities">
                <p className='title'>Select today's activities</p>
                <div className="activities">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            addToList = {addToList}
                        ></Activity>)
                    }
                </div>
            </div>

            <div className="info">
                <Information exerciseTime ={exerciseTime}></Information>
            </div>
        </div>
    );
};

export default Activities;