interface XProps {
  size?: number;
  color?: string;
}

function X({ size, color }: XProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 72 72'
    >
      <path
        fill={color}
        d='M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z'
      ></path>
    </svg>
  );
}

export default X;
