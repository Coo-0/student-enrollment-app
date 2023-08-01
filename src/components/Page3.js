import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const { name, age } = useSelector((state) => state);

  return (
    <div>
      <h2>
        Your name {name} aged {age} has been added to student system.
      </h2>
      <p>You may now exit.</p>
    </div>
  );
};

export default Page3;
