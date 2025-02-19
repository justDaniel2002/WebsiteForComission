import LinkButton from "../atoms/LinkButton";
import { KeyIconPair } from "../types/types";
import { isMobile } from "../joital/ReponsiveAtom";
import LinkButton2 from "../atoms/LinkButton2";
import { useState } from "react";
import IconButton from "../atoms/IconButtion";
import { useAtom } from "jotai";

type directions = "horizontal" | "vertical";

type NavbarParam = {
  direction?: directions;
  iconLinks: KeyIconPair[];
};

const Navbar = ({ direction, iconLinks }: NavbarParam) => {
  direction = direction || "vertical";

  const [mob, setMob] = useAtom(isMobile);
  const [showContent, setShowContent] = useState(false)

  const explore = () => {
    setShowContent(!showContent)
  }
  return (
    <>
      <div className={`${direction == "horizontal" ? "flex items-center"
        : "inline-block min-h-screen"} text-white bg-slate-900 ${showContent?'w-[calc(15vw+10px)]':'w-[calc(7vw+10px)]'} rounded-tr-xl rounded-br-xl`}>

        <div className={`md:text-6xl pl-[15vh]`}><IconButton iconKey="material-symbols:menu" action={explore}/></div>

        {mob ? <>
          {iconLinks.map((pair, index) => (
            <div className={`md:text-6xl pl-[15vh]`} key={index}>
              <div><LinkButton2 pair={pair} showContent={showContent}/></div>
            </div>
          ))}
        </>
          :
          <>
            {iconLinks.map((pair, index) => (
              <div className={`flex pl-[15vh]`} key={index}>
                <div><LinkButton pair={pair} /></div>
              </div>
            ))}
          </>}
      </div>
    </>
  );
};

export default Navbar;
