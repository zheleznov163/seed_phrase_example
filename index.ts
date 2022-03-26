import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {configure} from 'mobx';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

configure({useProxies: 'ifavailable'});

AppRegistry.registerComponent(appName, () => App);
