/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';



/*RN HelloWorld*/
//import App from './scr/App';
/*入门基础*/
// import App from './scr/IntroductionToBasic';
/*电影demo*/
import App from './scr/MovieDemo';
/*酒店demo*/
// import App from './scr/HotelDemo';




import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
