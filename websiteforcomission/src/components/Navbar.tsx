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
      <div className={`top-0 fixed
            lg:sticky
            lg:bg-white
            ${showContent ? 'bg-blue-900' : 'bg-transparent'}
            ${showContent && 'w-[30vw] h-screen'} 
            lg:h-screen
            lg:w-[6vw] 
            transition-all duration-300 ease-in-out
            navStart
            z-90`}>
        <div className={`flex
            mx-[15px]
            my-5
            lg:hidden
            ${showContent ? 'text-white':'text-blue-900'}
            transition-all duration-300 ease-in-out iconStart`}
          onClick={() => explore()}>
          <LinkButton2 pair={openMenu} />
        </div>
        {iconLinks.map((pair, index) => (
          <div className={``} key={index}>
            <div className={` 
            mx-[15px]
            my-5
            ${showContent ? 'flex' : 'hidden'}
            lg:flex
            lg:my-15
            lg:mx-10
            text-white
            lg:text-black
            transition-all duration-300 ease-in-out iconStart`}>
              {showContent ?
                <div onClick={() => setShowContent(!showContent)}><LinkButton2 pair={pair} showContent={showContent} /></div>
                : <LinkButton pair={pair} />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
