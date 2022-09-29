import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div>

            <h2 className='qn-title'>Question and Answer</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How Does React Work?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly.
                            It comprises multiple components, each responsible for rendering a small, reusable piece of HTML.
                            Components can be nested within other components to allow complex application to be built out of simple building blocks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What's the Difference Between Props and State?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The 'this.setState' property is used to update the state values in the component.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is the use of 'useEffect' other than loading data?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            uses of 'useEffect' other than loading data: 
                            <ul>
                                <li>Running on state change: validating input field</li>
                                <li>Running on state change: live filtering</li>
                                <li>Running on state change: trigger animation on new array value</li>
                                <li>Running on props change: update paragraph list on fetched API data update</li>
                                <li>Running on props change: updating fetched API data to get BTC updated price</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;