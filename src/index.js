import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/container';
import rootStore from './store/createStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Route path={['/home', '/']} component={App} />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);