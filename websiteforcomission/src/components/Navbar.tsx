import LinkButton from "../atoms/LinkButton";
import { KeyIconPair } from "../types/types";

type directions = "horizontal" | "vertical";

type NavbarParam = {
  direction?: directions;
  iconLinks: KeyIconPair[];
};

const Navbar = ({ direction, iconLinks }: NavbarParam) => {
  direction = direction || "vertical";
  return (
    <>
      <div className={`${direction == "horizontal" ? "flex items-center" 
        : "inline-block min-h-screen"} text-white bg-slate-900 w-[calc(7vw+10px)] rounded-tr-xl rounded-br-xl`}>
        {iconLinks.map((pair, index) => (
          <div key={index}>
            <div><LinkButton pair={pair} /></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
