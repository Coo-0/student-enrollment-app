import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <Link to="/chatbot">
        <button>Enroll Now!</button>
      </Link>
    </div>
  );
};

export default Page1;
