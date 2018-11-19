import { EventEmitter } from 'events';
import { registerApplication, start } from 'single-spa';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const customProps = {
  name: 'App Name',
  system:  new EventEmitter(),
};

registerApplication(
  'App',
  () => import('./App'),
  () => true,
  customProps,
);

start();

registerServiceWorker();
