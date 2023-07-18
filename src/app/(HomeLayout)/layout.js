import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div>
      <div className='mt-2 md:mt-5'>
      <Navbar />

      </div>
      <div className="w:[95%] sm:[w-93%] md:w-[90%]">{children}</div>
    </div>
  );
};

export default layout;