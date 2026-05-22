import React from 'react';

const ShineBorder = ({
  borderWidth = 1,
  duration = 20,
  shineColor = "#000000",
  className = "",
  style = {},
  ...props
}) => {
  const colors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;

  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `radial-gradient(180px circle at center, ${colors}, transparent 80%)`,
        backgroundSize: "300% 300%",
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        padding: "var(--border-width)",
        ...style,
      }}
      className={`animate-shine pointer-events-none absolute inset-0 w-full h-full rounded-[inherit] will-change-[background-position] ${className}`}
      {...props}
    />
  );
};

export default ShineBorder;

