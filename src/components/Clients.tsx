//Assets
import Zat from "../assets/clients/zat.png";
import ZatOpt from "../assets/clients/zat.webp";
import AndreaSkin from "../assets/clients/andreaskin.png";
import AndreaSkinOpt from "../assets/clients/andreaskin.webp";
import Fong from "../assets/clients/fong.png";
import FongOpt from "../assets/clients/fong.webp";
import Jokr from "../assets/clients/jokr.png";
import JokrOpt from "../assets/clients/jokr.webp";
import Roxfarma from "../assets/clients/roxfarma.png";
import RoxfarmaOpt from "../assets/clients/roxfarma.webp";
import Creval from "../assets/clients/creval.png";
import CrevalOpt from "../assets/clients/creval.webp";
import Interbank from "../assets/clients/interbank.png";
import InterbankOpt from "../assets/clients/interbank.webp";
import Ibkbenefit from "../assets/clients/ibkbenefit.png";
import IbkbenefitOpt from "../assets/clients/ibkbenefit.webp";
import Gustozzi from "../assets/clients/gustozzi.png";
import GustozziOpt from "../assets/clients/gustozzi.webp";
import Shopstar from "../assets/clients/shopstar.png";
import ShopstarOpt from "../assets/clients/shopstar.webp";
import Luxemobiliaria from "../assets/clients/luxemobiliaria.png";
import LuxemobiliariaOpt from "../assets/clients/luxemobiliaria.webp";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay} from 'swiper/modules';

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Clients() {
  return (
    <section id='clients'>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000, // Cambia cada 3 segundos
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          // responsive breakpoints
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {[{
          image: Zat, webp: ZatOpt, alt: 'Zat Logo'
        }, {
          image: AndreaSkin, webp: AndreaSkinOpt, alt: 'AndreaSkin Logo'
        }, {
          image: Fong, webp: FongOpt, alt: 'Fong Logo'
        }, {
          image: Jokr, webp: JokrOpt, alt: 'Jokr Logo'
        }, {
          image: Roxfarma, webp: RoxfarmaOpt, alt: 'Roxfarma Logo'
        },{
          image: Creval, webp: CrevalOpt, alt: 'Creval Logo'
        },
        {
          image: Interbank, webp: InterbankOpt, alt: 'Interbank Logo'
        },
        {
          image: Ibkbenefit, webp: IbkbenefitOpt, alt: 'IBK Benefit Logo'
        },
        {
          image: Gustozzi, webp: GustozziOpt, alt: 'Gustozzi Logo'
        }, {
          image: Shopstar, webp: ShopstarOpt, alt: 'Gustozzi Logo'
        },
        {
          image: Luxemobiliaria, webp: LuxemobiliariaOpt, alt: 'Gustozzi Logo'
        }].map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center border-y-2 lg:border-r-2 h-44 filter grayscale hover:filter-none">
              <picture>
                <source srcSet={client.webp} type="image/webp" />
                <img src={client.image} alt={client.alt} className="max-w-40" />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Clients;
