import { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "./Image";
import StackList from "./StackList";

interface ItemsProps {
  currentItems: any[];
}
interface PaginationProps {
  itemsPerPage: number;
  items: any[];
}

function Items({ currentItems }: ItemsProps) {
  return (
    <ul className='flex flex-col gap-12 mt-6 md:mt-10 group/list lg:grid lg:grid-cols-2 lg:items-center lg:gap-10'>
      {currentItems &&
        currentItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='grid relative gap-4 md:grid-cols-8 md:gap-4 group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition-all lg:block lg:overflow-hidden'
            >
              <div className='absolute hidden lg:block transition inset-0 motion-reduce:transition-none group-hover:bg-gradient-to-b from-white/10 from-10% to-black/80 to-70% group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg group-hover:cursor-pointer'></div>
              <div className='z-10 flex flex-col gap-2 transition-all duration-300 lg:-bottom-full md:order-2 md:col-span-6 lg:absolute lg:group-hover:bottom-0 lg:p-4'>
                <h3 className='text-base font-medium leading-tight text-blue-600 capitalize lg:group-hover:text-blue-300 lg:focus-visible:text-blue-300'>
                  {item.name}
                </h3>
                <p className='text-sm leading-normal text-gray-800 lg:group-hover:text-slate-300'>
                  {item.description}
                </p>
                {item.stack.length > 0 && <StackList stack={item.stack} />}
              </div>
              <Image
                name={item.image}
                width={200}
                height={48}
                className='z-10 lg:mx-auto lg:h-full md:order-1 md:col-span-2 max-h-96 lg:w-fit'
              />
            </a>
          </li>
        ))}
    </ul>
  );
}

function Pagination({ items, itemsPerPage }: PaginationProps) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handleClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        containerClassName='flex items-center gap-x-1 justify-center my-12'
        pageLinkClassName='min-h-9 min-w-9 flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 focus:bg-gray-100'
        breakLinkClassName='min-h-9 min-w-9 flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 focus:bg-gray-100'
        activeLinkClassName='bg-gray-200 focus:bg-gray-300 hover:bg-gray-200'
        disabledLinkClassName='opacity-50 pointer-events-none'
        previousLinkClassName='min-h-9 min-w-9 flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 focus:bg-gray-100'
        nextLinkClassName='min-h-9 min-w-9 flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 focus:bg-gray-100'
        breakLabel='...'
        nextLabel='Siguiente'
        onPageChange={handleClick}
        pageCount={pageCount}
        previousLabel='Anterior'
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
