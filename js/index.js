// jshint esversion: 6

import tabs from './parts/tabs.js';
import timer from './parts/timer.js';
import modal from './parts/modal.js';
import slider from './parts/slider.js';
import calc from './parts/calc.js';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    //Tabs
    tabs();

    // Timer
    timer();

    // Modal
    modal();

    // Slider
    slider();

    // Calc
    calc();
});