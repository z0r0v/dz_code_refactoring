import { BackgroundImageSliders } from './BackgroundImageSliders.js';
import { Login } from './login.js';
import { Logout } from './Logout.js';

import {Tabs} from './tabs.js';
// import {Xhr} from './xhr.js';
const tabs = new Tabs();


const backgroundImageSliders = new BackgroundImageSliders('body', 7000);
const login = new Login();
const logout = new Logout();

class MainApp {
    constructor(backgroundImageSliders, login, logout) {
        this.backgroundImageSliders = backgroundImageSliders
        this.login = login
        this.logout = logout
    }

    init(){
        this.backgroundImageSliders.init();
        this.login.init();
        this.logout.init();
    }
}

const App = new MainApp(
    backgroundImageSliders,
    login,
    logout
);

App.init();