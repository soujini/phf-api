import React from 'react';

const SvgProfileWithStar = props => (
  <svg width={13} height={31} {...props}>
    <g stroke="#000" fill="none" fillRule="evenodd">
      <path
        strokeWidth={1.604}
        strokeLinejoin="round"
        d="M6.447.802l1.745 3.535 3.901.567L9.27 7.656l.666 3.885-3.489-1.835-3.489 1.835.666-3.885L.801 4.904l3.901-.567z"
      />
      <path d="M10.063 18.995a3.485 3.485 0 11-6.97 0 3.485 3.485 0 016.97 0z" strokeWidth={2} />
      <path
        d="M11.636 29.14c0-3.65-2.323-6.608-5.19-6.608-2.865 0-5.188 2.959-5.188 6.609v.924h10.378v-.924z"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgProfileWithStar;
