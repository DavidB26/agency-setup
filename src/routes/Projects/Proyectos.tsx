import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import { ArrowLeft } from "lucide-react";
import Title from "../../components/Title";

const projects = [
  {
    name: "roxfarma",
    image: "roxfarma",
    description:
      "Somos un laboratorio farmacéutico peruano dedicado desde el año 1986 a fabricar medicamentos de calidad para la salud humana.",
    url: "https://roxfarma.com/",
    stack: ["Wordpress", "Elementor", "Php"],
  },
  {
    name: "zat",
    image: "zat",
    description:
      "Evolucionamos la inteligencia de negocios mediante la ingenería, diseño e innovación.",
    url: "https://zat.pe/",
    stack: ["Laravel", "Javascript", "Bootstrap 4", "Gsap"],
  },
  {
    name: "jokr",
    image: "jokr",
    description: "Tus compras del súper, en minutos",
    url: "https://jokr.pe/",
    stack: ["React", "Vite", "Tailwind", "Javascript"],
  },
  {
    name: "observatorio Seguridad",
    image: "observatorio",
    description:
      "La información más relevante sobre la seguridad ciudadana en nuestro Barómetro de Seguridad",
    url: "https://observatorioverisure.pe/",
    stack: ["Wordpress", "Elementor", "Php"],
  },
  {
    name: "creval",
    image: "creval",
    description:
      "Empresa especializada en el diseño, ejecución y supervisión de obras.",
    url: "https://creval.pe/",
    stack: ["Wordpress", "Elementor", "Php"],
  },
  {
    name: "Nike",
    image: "nike",
    description:
      "Campaña de Nike para mostrar los colores vivos de su marca como si fuera una gota de pintura",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Achorado Pez",
    image: "achoradopez",
    description: "Campaña el achorado pez para su nuevo lanzamiento",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Fiesta Gustozzi",
    image: "fiestagustozzi",
    description: "Gustozzi Fiesta empaques nuevos",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Gustozzi Brownie",
    image: "gustozzibrownie",
    description: "Gustozzi Brownie te acompaña en el dia a dia",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Gustozzi Relleno",
    image: "gustozzirelleno",
    description: "Gustozzi relleno te acompaña en el dia a dia",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Gustozzi",
    image: "gustozzi",
    description: "Gustozzi te acompaña en el dia a dia",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Yeezy",
    image: "yeezy",
    description: "Campaña de Marketing para Adidas Yeezy  lanzamiento",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
  {
    name: "Yofrut",
    image: "yofrut",
    description: "Campaña de Yofrut pensado en nuevos sabores",
    // url: "https://spotify-next-xi.vercel.app/",
    stack: ["Photoshop", "AI"],
  },
];

const Proyectos = () => {
  return (
    <Container>
      <div className='flex justify-end my-6'>
        <div className='flex items-center gap-1'>
          <button className='transition border rounded-md border-zinc-200 hover:bg-zinc-100 active:scale-95'>
            <Link to='/' className="flex items-center gap-2 p-2 text-sm">
              <ArrowLeft className='w-4 h-4' />
              Regresar al Home
            </Link>
          </button>
        </div>
      </div>
      <section id='projects' aria-label='projects'>
        <Title title='Proyectos' align='left' underline='left' />
        <Pagination itemsPerPage={6} items={projects} />
      </section>
    </Container>
  );
};

export default Proyectos;
