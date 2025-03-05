import { useEffect } from "react";
import { snowflake } from "../datas/images";
import { Icon } from "@iconify/react/dist/iconify.js";


const Banner = () => {

    useEffect(() => {
        setInterval(spawnImage, 1000);
    }, [])

    function spawnImage() {
        console.log("spawing snow")
        const container = document.getElementById("snowflakeContainer");
        const img = document.createElement("img");
        img.src = snowflake; // Change to your image path
        img.className = "floating-image";

        // Random starting position near center
        const startX = (Math.random() * container!.clientWidth - 25);
        const startY = (Math.random() * container!.clientHeight - 25);

        img.style.left = `${startX}px`;
        img.style.top = `${startY}px`;

        // Random outward direction
        const angle = Math.random() * 2 * Math.PI;
        const distance = 150; // How far the image moves
        img.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        img.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        container!.appendChild(img);

        // Remove image after animation
        setTimeout(() => img.remove(), 5000);
    }

    return <>
        <div className="flex flex-col items-center">
            <div className="lg:h-[40px]"></div>
            <div className="bg-[url('/banners/banner.jpg')] invisible bg-cover bg-center w-full h-[40vh]
        lg:h-[70vh]
        shadow-[inset_0_-100px_100px_rgba(0,0,0,0.5)]
        lg:w-[95%]
        bannerAni
        ">
            <div className="absolute flex flex-col justify-end text-white z-10 h-[inherit] px-[5vw] pb-[20px]">
                    <div className="text-[5vh] mb-[10px]
                    lg:mb-[20px]
                    lg:text-[10vh]
                    kaushan-script-regular">Smol Lazuli</div>
                    <div className="font-thin text-[2.7vh] mb-[15px]
                    lg:mb-[30px]
                    ">Thank you for supporting!</div>
                    <div className="flex justify-between items-center text-white mb-[5px]
                    lg:mb-[20px]
                    text-[4vh] w-[17vh]">
                        <a target="_blank" href={'https://www.facebook.com/yunshen0208'}><Icon icon="ic:baseline-facebook" /></a>
                        <a target="_blank" href={'https://www.instagram.com/zunxennn/'}><Icon icon="lets-icons:insta" /></a>
                        <a target="_blank" href={'https://x.com/zunxennn?s=21'}><Icon icon="prime:twitter" /></a>
                    </div>
                </div>
                <div id="snowflakeContainer" className="opacity-40 bg-blue-950 h-[inherit] w-full z-0">

                </div>
                
            </div>
        </div>
    </>
}

export default Banner