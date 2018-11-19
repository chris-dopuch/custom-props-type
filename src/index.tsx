import { registerApplication, start } from 'single-spa';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const customProps = {
  name: 'App Name',
};

registerApplication(
  'App',
  () => import('./App'),
  () => true,
  customProps,
);

start();

registerServiceWorker();
