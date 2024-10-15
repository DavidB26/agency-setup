import { twMerge } from "tailwind-merge";
import Jokr from "../assets/projects/jokr.webp";
import Creval from "../assets/projects/creval.webp";
import Roxfarma from "../assets/projects/roxfarma-com.webp";
import Zat from "../assets/projects/zat.webp";
import AchoradoPez from "../assets/projects/achorado-pez.webp";
import FiestaGustozzi from "../assets/projects/fiesta-gustozzi.webp";
import GustozziBrownie from "../assets/projects/gustozzi-brownie.webp";
import GustozziRelleno from "../assets/projects/gustozzi-relleno.webp";
import Gustozzi from "../assets/projects/gutozzi.webp";
import Yeezy from "../assets/projects/yeezy.webp";
import Yofrut from "../assets/projects/yofrut.webp";
import Nike from "../assets/projects/nike.webp";
import Observatorio from "../assets/projects/observatorio-seguridad.webp"

interface ImageProps {
  name: string;
  width: number;
  height: number;
  className?: string;
}

function Image({ name, width, height, className }: ImageProps) {
  let src: string | undefined;

  switch (name.toLowerCase()) {
    case "roxfarma":
      src = Roxfarma;
      break;
    case "jokr":
      src = Jokr;
      break;
    case "creval":
      src = Creval;
      break;
    case "zat":
      src = Zat;
      break;
    case "nike":
      src = Nike;
      break;
    case "achoradopez":
      src = AchoradoPez;
      break;
    case "fiestagustozzi":
      src = FiestaGustozzi;
      break;
    case "gustozzibrownie":
      src = GustozziBrownie;
      break;
    case "gustozzirelleno":
      src = GustozziRelleno;
      break;
    case "gustozzi":
      src = Gustozzi;
      break;
    case "yeezy":
      src = Yeezy;
      break;
    case "yofrut":
      src = Yofrut;
      break;
      case "observatorio":
        src = Observatorio;
        break;
    default:
      console.error(`Image not found for name: ${name}`);
      src = ""; // Or provide a fallback image
  }

  return (
    <img
      src={src}
      alt={`${name} image`}
      width={width}
      height={height}
      className={twMerge(" border-slate-200/10", className)}
      loading="lazy"
    />
  );
}

export default Image;
