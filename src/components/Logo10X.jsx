import React from 'react';

const Logo10X = ({ className, ...props }) => (
  <img 
    src="/10Xtechnologies logo.png" 
    alt="10X Technologies" 
    className={`${className || ''} object-contain`}
    {...props}
  />
);

export default Logo10X;
