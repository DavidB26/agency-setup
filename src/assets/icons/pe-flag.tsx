interface Props {
  size?: number;
}

function PeFlag({ size }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_270_67503)'>
        <rect width='24' height='24' rx='12' fill='white' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 0H17V24H7V0Z'
          fill='#F7FCFF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M17 0H26V24H17V0Z'
          fill='#F50101'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-2 0H7V24H-2V0Z'
          fill='#F50101'
        />
      </g>
      <defs>
        <clipPath id='clip0_270_67503'>
          <rect width='24' height='24' rx='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PeFlag;
