import React from 'react';

const SvgTradeWorksIconSmall = props => (
  <svg width={41} height={48} {...props}>
    <defs>
      <path id="trade_works_icon_small_svg__a" d="M0 48h40.136V0H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M40.134 11.354c0-4.26-3.396-6.218-6.433-6.701-3.033-.487-5.58-2.861-6.364-3.495C26.555.531 25.625 0 23.547 0h-6.959c-2.077 0-3.008.531-3.79 1.158-.785.634-3.33 3.008-6.364 3.495C3.397 5.136 0 6.963 0 11.219h15.146V48h9.499V11.22l15.488.134z"
        fill="#010202"
      />
      <mask id="trade_works_icon_small_svg__b" fill="#fff">
        <use xlinkHref="#trade_works_icon_small_svg__a" />
      </mask>
      <path fill="#FEFEFE" mask="url(#trade_works_icon_small_svg__b)" d="M16.69 46.509h6.552V1.482H16.69z" />
      <path
        fill="#422063"
        mask="url(#trade_works_icon_small_svg__b)"
        d="M5.826 18.338l6.862 17.446 7.17-18.713 6.858 18.713 7.292-17.446h4.316l-11.776 27.76-6.778-18.493-7.066 18.509L1.51 18.338z"
      />
    </g>
  </svg>
);

export default SvgTradeWorksIconSmall;
