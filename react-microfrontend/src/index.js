import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWidget, GoodbyeWidget } from './app';


const components = {
  HelloWidget,
  GoodbyeWidget
};

function mount(widgetName, container, props = {}) {
  const Component = components[widgetName];
  if (!Component) {
    console.error(`Component "${widgetName}" not found.`);
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<Component  {...props}/>);
}

export { mount };
