import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Information from '../Information/Information';
import './Activities.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div className='activity-container'>
            <div className="all-activities">
                <p className='title'>Select today's activities</p>
                <div className="activities">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
            </div>

            <div className="info">
                <Information></Information>
            </div>
        </div>
    );
};

export default Activities;