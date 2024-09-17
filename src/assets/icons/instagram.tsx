interface InstagramProps {
  size?: number;
  color?: string;
}

function Instagram({ size, color }: InstagramProps) {
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
        d='M3 8C3 5.239 5.239 3 8 3H16C18.761 3 21 5.239 21 8V16C21 18.761 18.761 21 16 21H8C5.239 21 3 18.761 3 16V8ZM19 6C19 5.448 18.552 5 18 5C17.448 5 17 5.448 17 6C17 6.552 17.448 7 18 7C18.552 7 19 6.552 19 6ZM17 12C17 9.239 14.761 7 12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12ZM9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868Z'
        fill={color}
      />
    </svg>
  );
}

export default Instagram;
