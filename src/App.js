import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/studentReducer';
import Page1 from './components/Page1';
import ChatbotComponent from './components/ChatbotComponent';
import Page3 from './components/Page3';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router base href='/'>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/chatbot" component={ChatbotComponent} />
          <Route path="/confirmation" component={Page3} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
