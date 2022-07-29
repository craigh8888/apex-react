import React, { Component } from 'react';
import './percentagewheel.css';
import './wheel-script.js';

export default class percentagewheel extends Component {

    render() {
        return (
            <div className='storage-preview-wrapper'>

                <div className="container-progress-bar">
                    <div className="circular-progress">
                        <div className="value-container">0%</div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        setTimeout(() => {
            let progressBar = document.querySelector(".circular-progress");
            let valueContainer = document.querySelector(".value-container");
            // console.log(valueContainer);
            let progressValue = 1;
            let progressEndValue = 66;
            let speed = 50;

            // new 
            // var progressBar = document.querySelectorAll(".circular-progress");
            // var valueContainer = document.querySelectorAll(".value-container");

            // end new

            // console.log('loaded');
            let progress = setInterval(() => {
                progressValue++;
                valueContainer.textContent = `${progressValue}%`;
                progressBar.style.background = `conic-gradient(
                    #017B95 ${progressValue * 3.6}deg,
                    #D6ECFD ${progressValue * 3.6}deg
              )`;
                if (progressValue == progressEndValue) {
                    clearInterval(progress);
                }
            }, speed);
        }, 0);
    }
}