import React from 'react';

const SvgSchool = props => (
  <svg width={15} height={15} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#D8D8D8" d="M0 0h15v15H0z" />
      <g transform="translate(4 4)">
        <circle fill="#FFF" cx={1} cy={1.5} r={1} />
        <circle fill="#FFF" cx={7} cy={1.5} r={1} />
        <path stroke="#FFF" fill="#FFF" d="M2.5 1h3v7.5h-3z" />
        <path stroke="#D8D8D8" strokeWidth={0.5} strokeLinecap="square" d="M4 .5V9" />
      </g>
      <g stroke="#FFF" strokeLinecap="square">
        <path d="M4.5 3.714H11M3 2.5h9.5" />
      </g>
    </g>
  </svg>
);

export default SvgSchool;
