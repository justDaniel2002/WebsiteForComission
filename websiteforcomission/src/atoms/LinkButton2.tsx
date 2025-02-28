
import { KeyIconPair } from "../types/types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type LinkButtonParam = {
  pair: KeyIconPair;
  showContent?: boolean;
};
const LinkButton2 = ({ pair, showContent }: LinkButtonParam) => {

  return (
    <>
      <Link
        to={pair.link}
        className=""
      >
        <div className="flex items-center
          hover:text-blue-500
          transition-all duration-300 ease-in-out">
          <Icon
            icon={`${pair.icon}`}
            className={`text-[30px] 
            lg:text-[50px]`}
          />
          {showContent &&
            <div className="ml-[25px]
          text-[17px]
          ">{pair.content}</div>}
        </div>
      </Link>
    </>
  );
};

export default LinkButton2;
