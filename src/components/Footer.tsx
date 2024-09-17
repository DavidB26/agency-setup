//Assets
import Logo from "../assets/logo.png";
import LogoOpt from "../assets/logo.webp";

//Utils
import { navigation } from "../utils/navigation";

//Components
import Container from "./Container";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='text-white bg-black'>
      <Container className='py-16 lg:py-24'>
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-96'>
          <div className='flex flex-col gap-8'>
            <picture>
              <source srcSet={LogoOpt} type="image/webp"/>
              <img src={Logo} alt='Logo Brandable' width={185} height={40} />
            </picture>
            <address className='flex flex-col gap-6 not-italic'>
              <div>
                <h4 className='text-lg font-bold uppercase'>Email</h4>
                <p className='text-sm'>contacto@brandable.pe</p>
              </div>
              <div>
                <h4 className='text-lg font-bold uppercase'>Telefono</h4>
                <a href="tel:+51923363645" className='text-sm'>+51 923363645</a>
              </div>
            </address>
          </div>
          <div>
            <ul className='flex flex-col gap-6'>
              {navigation.map((item, index) => (
                <li key={index} className='text-sm font-bold uppercase'>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className='py-6 text-center border-t border-slate-400'>
        <small className='text-sm text-center'>
          Copyright © {currentYear} Brandable
        </small>
      </div>
    </footer>
  );
}

export default Footer;
