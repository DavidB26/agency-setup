//Assets
import Zat from "../assets/clients/zat.png";
import ZatOpt from "../assets/clients/zat.webp";
import Win from "../assets/clients/win.png";
import WinOpt from "../assets/clients/win.webp";
import Fong from "../assets/clients/fong.png";
import FongOpt from "../assets/clients/fong.webp";
import Jokr from "../assets/clients/jokr.png";
import JokrOpt from "../assets/clients/jokr.webp";
import Roxfarma from "../assets/clients/roxfarma.png";
import RoxfarmaOpt from "../assets/clients/roxfarma.webp";
import Ultra from "../assets/clients/ultra.png";
import UltraOpt from "../assets/clients/ultra.webp";
import Creval from "../assets/clients/creval.png";
import CrevalOpt from "../assets/clients/creval.webp";

function Clients() {
  return (
    <section id='clients'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex items-center justify-center align-middle border-t-2 lg:w-full lg:max-w-xs h-44 filter grayscale hover:filter-none lg:border-r-2'>
          <picture>
            <source srcSet={ZatOpt} type="image/webp"/>
            <img src={Zat} alt='Logo cliente Zat' className='max-w-40' />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-t-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs lg:border-r-2'>
          <picture>
            <source srcSet={WinOpt} type="image/webp"/>
            <img src={Win} alt='Logo cliente Win' className='max-w-40' />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-t-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs lg:border-r-2'>
          <picture>
            <source srcSet={FongOpt} type="image/webp"/>
            <img src={Fong} alt='Logo cliente Fong' className='max-w-40' />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-t-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs lg:border-r-2'>
          <picture>
            <source srcSet={JokrOpt} type="image/webp"/>
            <img src={Jokr} alt='Logo cliente Jokr' className='max-w-40' />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-t-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs lg:border-r-2'>
          <picture>
            <source srcSet={RoxfarmaOpt} type="image/webp"/>
            <img
              src={Roxfarma}
              alt='Logo cliente Roxfarma'
              className='max-w-40'
            />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-t-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs lg:border-r-2'>
          <picture>
            <source srcSet={UltraOpt} type="image/webp"/>
            <img src={Ultra} alt='Logo cliente Ultra' className='max-w-40' />
          </picture>
        </div>
        <div className='flex items-center justify-center align-middle border-y-2 h-44 filter grayscale hover:filter-none lg:w-full lg:max-w-xs'>
          <picture>
            <source srcSet={CrevalOpt} type="image/webp"/>
            <img src={Creval} alt='Logo cliente Creval' className='max-w-40' />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Clients;
