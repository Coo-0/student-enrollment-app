import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/studentReducer';
import Page1 from '../components/Page1';
import ChatbotComponent from '../components/ChatbotComponent'; // Update the import path with the correct file name
import Page3 from '../components/Page3';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* Only one top-level Router */}
        <Routes>
          {/* Use Routes component for nested routes */}
          <Route path="/" element={<Page1 />} />
          <Route path="/chatbot" element={<ChatbotComponent />} />
          <Route path="/confirmation" element={<Page3 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
