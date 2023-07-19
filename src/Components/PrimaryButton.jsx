import React from 'react';

// This is a Dynamic Component
// Use it fllowing- <PrimaryButton link="/contact">Click</PrimaryButton>
// Pass link and Button Title
const PrimaryButton = ({link,children}) => {
  return (
    <div>
      <a
        href={link}
        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-gray text-white border rounded-md shadow-sm hover:bg-blue-gray-900 focus:outline-none focus:shadow-none"
      >
       {children}
      </a>
    </div>
  );
};

export default PrimaryButton;