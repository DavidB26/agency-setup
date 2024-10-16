interface PhoneProps {
  size?: number;
  color?: string;
}

function Phone({ size, color }: PhoneProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.099 15.348C18.6 15.436 19.393 15.473 20.023 15.488C20.568 15.501 21 15.945 21 16.49V20C21 20.438 20.672 21 20 21C15.461 21 11.126 19.16 7.966 16.034C4.84 12.874 3 8.539 3 4C3 3.328 3.562 3 4 3H7.51C8.055 3 8.499 3.432 8.512 3.977C8.528 4.607 8.564 5.4 8.653 5.901C8.748 6.443 8.935 7.095 9.077 7.553C9.189 7.913 9.09 8.305 8.824 8.572L6.62 10.79C7.427 12.322 8.367 13.549 9.412 14.588C10.451 15.633 11.678 16.573 13.21 17.38L15.427 15.176C15.694 14.91 16.086 14.811 16.446 14.923C16.905 15.066 17.557 15.252 18.099 15.348Z'
        fill={color}
      />
    </svg>
  );
}

export default Phone;
