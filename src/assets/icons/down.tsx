interface DownProps {
  size?: number;
  color?: string;
}

function Down({ size, color }: DownProps) {
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
        d='M6.42969 12.5L11 17.0703V3H13V17.0703L17.5703 12.5L19.0703 14L12 21.0703L4.92969 14L6.42969 12.5Z'
        fill={color}
      />
    </svg>
  );
}

export default Down;
