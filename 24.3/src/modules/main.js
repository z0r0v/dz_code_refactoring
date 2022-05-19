import {Login} from './login.js';
import {Slider} from './slider.js';
import {Tabs} from './tabs.js';

import {Xhr} from './xhr.js';



const tabs = new Tabs();
const newSlider = new Slider();
const newLogin = new Login();



function init(){
  newSlider.init();
}

init();