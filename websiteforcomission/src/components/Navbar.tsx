import LinkButton from "../atoms/LinkButton";
import { KeyIconPair } from "../types/types";
//import { isMobile } from "../joital/ReponsiveAtom";
import LinkButton2 from "../atoms/LinkButton2";
import { useState } from "react";
//import { useAtom } from "jotai";
import { openMenu } from "../datas/datas";

type directions = "horizontal" | "vertical";

type NavbarParam = {
  direction?: directions;
  iconLinks: KeyIconPair[];
  absolute?: boolean
};

const Navbar = ({ direction, iconLinks, absolute }: NavbarParam) => {
  direction = direction || "vertical";

  //const [mob, setMob] = useAtom(isMobile);
  const [showContent, setShowContent] = useState(false)

  const explore = () => {
    setShowContent(!showContent)
  }
  return (
    <>
      <div className={`min-h-screen bg-yellow-500
            lg:bg-white
            ${showContent?'w-[50vh]':'w-[10vh]'} 
            lg:w-[15vh] 
            transition-all duration-300 ease-in-out
            opacity-70
            lg:opacity-80
            ${absolute||'absolute z-90'}`}>
        <div className={ `flex
            mx-7
            my-5
            lg:hidden
            transition-all duration-300 ease-in-out`}
            onClick={() => explore()}>
          <LinkButton2 pair={openMenu} />
        </div>
        {iconLinks.map((pair, index) => (
          <div className={``} key={index}>
            <div className={`flex 
            mx-7
            my-5
            lg:my-15
            lg:mx-10
            transition-all duration-300 ease-in-out`}>
              {showContent?
              <LinkButton2 pair={pair} showContent={showContent}/>
              :<LinkButton pair={pair} />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
