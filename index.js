/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { OnBoardingScreen, LoginScreen, SignupScreen } from './src/screens';

AppRegistry.registerComponent(appName, () => SignupScreen);
