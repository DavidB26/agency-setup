import { twMerge } from "tailwind-merge";
import { navigation } from "../../../../utils/navigation";
import { Link } from "react-router-dom";

interface NavbarProps {
  active: boolean;
  handleChange: () => void;
}

function Navbar({ active, handleChange }: NavbarProps) {
  return (
    <nav
      className={twMerge(
        "fixed top-0 -right-full flex items-center justify-center w-3/4 h-screen bg-white transition-[right] duration-500 ease-out z-10 rounded-tl-xl rounded-bl-xl lg:static lg:w-auto lg:h-auto lg:bg-transparent",
        active && "right-0"
      )}
    >
      <ol className='flex flex-col gap-6 lg:flex-row lg:text-base lg:gap-5'>
        {navigation.map((item, index) => (
          <li
            className='font-semibold uppercase lg:py-4 text-slate-900 lg:text-white lg:px-6 active:scale-95'
            key={index}
          >
            {item.blank ? (
              <Link to={item.url} onClick={handleChange}>
                {item.name}
              </Link>
            ) : (
              <a href={item.url} onClick={handleChange}>
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Navbar;
