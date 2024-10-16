interface OpenProps {
  size?: number;
  color?: string;
}

function Open({ size, color }: OpenProps) {
  return (
    <svg
      height={size}
      viewBox='0 0 48 48'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h48v48h-48z' fill='none' />
      <path
        d='M38 38h-28v-28h14v-4h-14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-14h-4v14zm-10-32v4h7.17l-19.66 19.66 2.83 2.83 19.66-19.66v7.17h4v-14h-14z'
        fill={color}
      />
    </svg>
  );
}

export default Open;
