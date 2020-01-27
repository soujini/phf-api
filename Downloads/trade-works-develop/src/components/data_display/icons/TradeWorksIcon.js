import React from 'react';

const SvgTradeWorksIcon = props => (
  <svg width={61} height={74} {...props}>
    <defs>
      <path id="trade_works_icon_svg__a" d="M0 .154h60.988V74H0z" />
      <path id="trade_works_icon_svg__c" d="M0 74h61V0H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="trade_works_icon_svg__b" fill="#fff">
        <use xlinkHref="#trade_works_icon_svg__a" />
      </mask>
      <path
        d="M60.988 17.62c0-6.549-5.163-9.563-9.776-10.31-4.612-.745-8.48-4.4-9.67-5.37-1.19-.97-2.604-1.786-5.76-1.786H25.206c-3.156 0-4.57.816-5.76 1.786-1.19.97-5.058 4.625-9.67 5.37C5.162 8.058 0 10.869 0 17.418h23.017V74h14.431V17.417l23.54.203z"
        fill="#422063"
        mask="url(#trade_works_icon_svg__b)"
      />
      <mask id="trade_works_icon_svg__d" fill="#fff">
        <use xlinkHref="#trade_works_icon_svg__c" />
      </mask>
      <path fill="#FEFEFE" mask="url(#trade_works_icon_svg__d)" d="M25 72h10V3H25z" />
      <path
        fill="#422063"
        mask="url(#trade_works_icon_svg__d)"
        d="M8.568 27.964l10.437 27.032L29.91 26l10.437 28.996 11.086-27.032H58l-17.914 43.01L29.78 42.32 19.031 71 2 27.964z"
      />
    </g>
  </svg>
);

export default SvgTradeWorksIcon;
