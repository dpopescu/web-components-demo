import '@web-components-demo/web-components';
import '@web-components-demo/lit-web-components';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
