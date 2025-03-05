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

const Navbar = ({ direction, iconLinks }: NavbarParam) => {
  direction = direction || "vertical";

  //const [mob, setMob] = useAtom(isMobile);
  const [showContent, setShowContent] = useState(false)

  const explore = () => {
    setShowContent(!showContent)
  }
  return (
    <>
      <div className={`h-screen sticky top-0 bg-yellow-500
            lg:bg-white
            ${showContent?'w-[40vw]':'w-[50px]'} 
            lg:w-[6vw] 
            transition-all duration-300 ease-in-out
            navStart
            z-90`}>
        <div className={ `flex
            mx-[15px]
            my-5
            lg:hidden
            transition-all duration-300 ease-in-out iconStart`}
            onClick={() => explore()}>
          <LinkButton2 pair={openMenu} />
        </div>
        {iconLinks.map((pair, index) => (
          <div className={``} key={index}>
            <div className={`flex 
            mx-[15px]
            my-5
            lg:my-15
            lg:mx-10
            transition-all duration-300 ease-in-out iconStart`}>
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
