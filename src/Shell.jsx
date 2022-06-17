import React, { Component } from 'react';
import './ShellCss.css';

const StarMatch = () => {
    return(
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">

                <div className="left">
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                </div>

                <div className="right">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                    <div className="number">7</div>
                    <div className="number">8</div>
                    <div className="number">9</div>
                </div>
            </div>
            <div className="timer">
                Time Remaining: 10
            </div>
        </div>
    )
};

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

const utils = {
    //sum an array
    sum: arr => arr.reduce((acc,curr) => acc + curr, 0),

    //create an array of numbers between min and max (edges included)
    range: (min,max) => Array.from({length: max - min + 1}, (_, i) => min + i),

    //pick random number between min and max (edges included)
    random: (min,max) => min + Math.floor(Math.random() * (max - min + 1)),

    //Given an array of numbers and a max..
    //Pick a number sum (<max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
        }
        }
    }
    return sums[utils.random(0, sums.length - 1)];
    },
}

export default StarMatch;