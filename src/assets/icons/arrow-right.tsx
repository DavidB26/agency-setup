interface ArrowRightProps {
  size?: number;
  color?: string;
}

function ArrowRight({ size, color }: ArrowRightProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.56812 39.4L8.18359 37.7812L28.5362 20.4L8.18359 3.01886L9.56812 1.40002L31.8164 20.4'
        fill={color}
      />
    </svg>
  );
}

export default ArrowRight;
