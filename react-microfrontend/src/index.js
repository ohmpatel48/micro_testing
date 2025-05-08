import React from 'react';
import { HelloWidget, GoodbyeWidget } from './app';
import ReactDOM from 'react-dom';

// Expose components
export { HelloWidget, GoodbyeWidget };

// Optional demo mount if used standalone
window.render = ({ widget, containerId }) => {
  const components = { HelloWidget, GoodbyeWidget };
  ReactDOM.render(
    React.createElement(components[widget]),
    document.getElementById(containerId)
  );
};

window.unmount = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};