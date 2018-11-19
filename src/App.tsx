import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './App.css';
import logo from './logo.svg';

interface IAppProps {
  name: string;
  system: EventEmitter;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const domElementGetter = () => document.getElementById('root') as Element;

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
