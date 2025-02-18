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
        className="my-5 mx-7 flex items-center"
      >
        <div className="w-2/3">
          <Icon
            icon={`${pair.icon}`}
            className={`
                transition-all duration-500 ease-in-out min-w-[3vh]
            ${contentState ? "-translate-x-[2.5vh] text-xl" : "translate-x-[2.5vh] text-6xl"}`}
          />
        </div>
        <div
          className={`inline-block transition-all duration-500 ease-in-out w-3/5 text-sm font-medium
                    ${contentState
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
            }`}
        >
          {pair.content}
        </div>
      </Link>
    </>
  );
};

export default LinkButton;
