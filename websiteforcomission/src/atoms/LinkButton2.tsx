import { useState } from "react";
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
        className="my-5 mx-7 flex items-center"
      >
        <div className="w-2/3">
          <Icon
            icon={`${pair.icon}`}
            className={``}
          />
        </div>
        <div
          className={`inline-block transition-all duration-500 ease-in-out w-3/5 text-sm font-medium
                    ${showContent
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

export default LinkButton2;
