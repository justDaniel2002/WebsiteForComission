import { useEffect } from "react";
import { snowflake } from "../datas/images";


const Banner = () => {

    useEffect(() => {
        setInterval(spawnImage, 1000);
    },[])

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
            <div className="lg:h-[40px] w-full"></div>
            <div className="bg-[url('banners/banner.jpg')] bg-cover bg-center w-full h-[40vh]
        lg:h-[70vh]
        shadow-[inset_0_-100px_100px_rgba(0,0,0,0.5)]
        lg:w-[95%]
        ">
                <div id="snowflakeContainer" className="absolute z-0 opacity-40 bg-blue-950 h-[inherit] w-[inherit] z-0">

                </div>
                <div className="absolute flex flex-col justify-end text-white z-10 h-[inherit] px-[13vh] pb-[20px]">
                    <div className="text-[7vh]
                    lg:text-[10vh]">Smol Lazuli</div>
                    <div>Thank you for supporting!</div>
                </div>
            </div>
        </div>
    </>
}

export default Banner