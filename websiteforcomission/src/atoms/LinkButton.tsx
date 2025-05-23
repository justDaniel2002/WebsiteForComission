import { useState } from "react";
import { KeyIconPair } from "../types/types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type LinkButtonParam = {
  pair: KeyIconPair;
};
const LinkButton = ({ pair }: LinkButtonParam) => {
  const [contentState, setContentState] = useState(false);

  const enterLink = () => {
    if (!contentState) setContentState(true);
    setTimeout(() => {
      setContentState(false);
    }, 3000);
  };
  return (
    <>
      <Link
        onMouseEnter={enterLink}
        to={pair.link}
        className=""
      >
        <div className={`flex items-center
          ${contentState&&'lg:text-blue-500'}`}>
          <Icon
            icon={`${pair.icon}`}
            className={`text-[20px] 
            transition-all duration-300 ease-in-out
            ${contentState ? 'lg:-translate-x-7 lg:text-[25px]'
              : 'lg:text-[30px]'
            }`}
          />
          <span className={`
              opacity-0 w-0
              text-[15px] font-medium
              transition-all duration-300 ease-in-out
              ${contentState && 'lg:opacity-100 lg:-translate-x-2'}
          `}
          >
            {pair.content}
          </span>
        </div>
      </Link>
    </>
  );
};

export default LinkButton;
