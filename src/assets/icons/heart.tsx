interface HeartProps {
  size?: number;
  color?: string;
}

function Heart({ size, color }: HeartProps) {
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
        d='M12 5.09C12 5.09 13.605 3 16.5 3C19.538 3 22 5.462 22 8.5C22 12.3049 17.9125 16.0024 16.1557 17.5916C15.9866 17.7445 15.8392 17.8779 15.719 17.99C14.142 19.46 12 21.35 12 21.35C12 21.35 9.858 19.46 8.281 17.99C8.16083 17.8779 8.01337 17.7445 7.84433 17.5916C6.08753 16.0024 2 12.3049 2 8.5C2 5.462 4.462 3 7.5 3C10.395 3 12 5.09 12 5.09Z'
        fill={color}
      />
    </svg>
  );
}

export default Heart;
