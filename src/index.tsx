import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createAppStore } from './store';
import App from './containers/App';

const store = createAppStore();

render(
	<Provider store={store}>
    <Router>
      <Route component={App}/> 
    </Router>
  </Provider>,
  document.getElementById('root')
);
