import React from 'react';

class comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    componentWillUnmount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad() {

        let progressBar = document.querySelector(".circular-progress");
        let valueContainer = document.querySelector(".value-container");
        console.log(valueContainer);
        let progressValue = 1;
        let progressEndValue = 100;
        let speed = 50;

        console.log('loaded');
        let progress = setInterval(() => {
            progressValue++;
            valueContainer.textContent = `${progressValue}`;
            progressBar.style.background = `conic-gradient(
              #4d5bf9 ${progressValue * 3.6}deg,
              #cadcff ${progressValue * 3.6}deg
          )`;
            if (progressValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }

}




