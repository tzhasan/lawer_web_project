import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div className="w-[95%] sm:[w-93%] md:w-[90%] mx-auto">
      <div className="mt-2 md:mt-5">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;