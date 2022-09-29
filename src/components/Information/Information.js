import React from 'react';
import './Information.css'
import nasir from '../../images/nasir.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = (props) => {

    const { exerciseTime } = props;

    let totalTime = 0;
    for (const singleTime of exerciseTime) {
        totalTime = totalTime + singleTime.time;

    }

    const showToast = () => toast.success("Activity Completed. Congratulations.");


    return (
        <div className='information'>
            <div className="personal-info">
                <div className="main-info">
                    <img src={nasir} alt="" />
                    <div className="name-address">
                        <h3 className="name">Nasir Mitul</h3>
                        <p className="address">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="other-info">
                    <div className="weight">
                        <h4>70 <span>kg</span></h4>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <h4>5.9 <span>feet</span></h4>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <h4>22 <span>yrs</span></h4>
                        <p>Age</p>
                    </div>
                </div>
            </div>

            <div className="add-break">
                <p className='sec-title'>Add A Break</p>
                <div className="times">
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </div>

            <div className="exercise-details">
                <p className='sec-title'>Exercise Details</p>

                <div className="time-info">
                    <p className='info-title'>Exercise time</p>
                    <p className='info-time'>{totalTime} seconds</p>
                </div>

                <div className="break-info">
                    <p className='info-title'>Exercise time</p>
                    <p className='info-time'>{0} seconds</p>
                </div>
            </div>

            <button onClick={showToast} className="activity-btn">Activity Completed</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Information;