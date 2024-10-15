interface StackListProps {
  stack: string[];
}

function StackList({ stack }: StackListProps) {
  return (
    <ul className='flex flex-wrap gap-2 mt-2 text-xs font-medium leading-5 text-blue-600 lg:text-blue-300'>
      {stack.map((technology, index) => (
        <li key={index} className='px-3 py-1 rounded-full bg-blue-600/10 lg:bg-blue-400/10'>
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default StackList;
