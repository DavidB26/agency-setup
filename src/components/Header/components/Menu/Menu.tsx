import styles from "./Menu.module.css";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  active: boolean,
  handleChange: () => void;
}
function Menu({ active, handleChange }: MenuProps) {
  const toogleClass = () => {
    handleChange();
  };

  return (
    <div
      className={twMerge(
        "md:hidden z-10",
        styles.hamburguer,
        active && styles.active
      )}
      onClick={toogleClass}
    >
      <div
        className={twMerge(active ? 'bg-[#251aff]' : 'bg-white', styles["ham-bar"], styles["bar-top"])}
      ></div>
      <div
        className={twMerge('bg-white', styles["ham-bar"], styles["bar-mid"])}
      ></div>
      <div
        className={twMerge(active ? 'bg-[#251aff]' : 'bg-white', styles["ham-bar"], styles["bar-bot"])}
      ></div>
    </div>
  );
}

export default Menu;
