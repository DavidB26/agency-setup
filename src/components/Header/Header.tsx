//React
import { useState } from 'react';

//Components
import Navbar from './components/Menu/Navbar';
import Menu from './components/Menu/Menu';

//Assets
import Logo from '../../assets/logo.png'
import LogoOpt from '../../assets/logo.webp'

function Header() {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = () => setActive(!active);

  return (
    <header className='flex items-center justify-between p-6'>
        <picture>
          <source srcSet={LogoOpt} type="image/webp"/>
          <img src={Logo} alt="Logo Brandable" width={100} height={70} className='w-32 md:w-44'/>
        </picture>
        <Navbar active={active} handleChange={handleChange}/>
        <Menu handleChange={handleChange} active={active}/>
    </header>
  );
}

export default Header;
