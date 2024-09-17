import ArrowLeft from "./arrow-left";
import ArrowRight from "./arrow-right";
import Down from "./down";
import Download from "./download";
import Github from "./github";
import Heart from "./heart";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Mail from "./mail";
import Open from "./open";
import Phone from "./phone";
import Twitter from "./twitter";
import X from "./x";

interface IndexProps {
  name: string;
  size?: number;
  color?: string;
}

function Index({ name, size = 24, color = "#ffffff" }: IndexProps) {
  switch (name) {
    case "arrow-left": {
      return <ArrowLeft {...{ size, color }} />;
    }
    case "arrow-right": {
      return <ArrowRight {...{ size, color }} />;
    }
    case "down": {
      return <Down {...{ size, color }} />;
    }
    case "download": {
      return <Download {...{ size, color }} />;
    }
    case "github": {
      return <Github {...{ size, color }} />;
    }
    case "heart": {
      return <Heart {...{ size, color }} />;
    }
    case "instagram": {
      return <Instagram {...{ size, color }} />;
    }
    case "linkedin": {
      return <Linkedin {...{ size, color }} />;
    }
    case "mail": {
      return <Mail {...{ size, color }} />;
    }
    case "open": {
      return <Open {...{ size, color }} />;
    }
    case "phone": {
      return <Phone {...{ size, color }} />;
    }
    case "twitter": {
      return <Twitter {...{ size, color }} />;
    }
    case "x": {
      return <X {...{ size, color }} />;
    }
    default: {
      return null;
    }
  }
}

export default Index;
