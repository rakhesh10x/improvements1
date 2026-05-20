import React from 'react';

const Logo10X = ({ className, fetchPriority, fetchpriority, ...props }) => (
  <svg 
    viewBox="380 320 500 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image 
      href="/10Xtechnologies logo.png" 
      x="0" 
      y="0" 
      width="1280" 
      height="720" 
      fetchPriority={fetchPriority || fetchpriority}
    />
  </svg>
);

export default Logo10X;
