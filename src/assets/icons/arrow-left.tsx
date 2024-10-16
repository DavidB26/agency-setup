interface ArrowLeftProps {
  size?: number;
  color?: string;
}

function ArrowLeft({ size, color }: ArrowLeftProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.4319 39.4L8.18359 20.4L30.4319 1.40002L31.8164 3.01886L11.4639 20.4L31.8164 37.7812'
        fill={color}
      />
    </svg>
  );
}

export default ArrowLeft;
