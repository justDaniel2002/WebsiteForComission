import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { navbarData } from "../datas/datas"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

const Layout = () => {

    return <>
        <div className="flex bgStart">
            <Navbar iconLinks={navbarData} />
            <div className="w-full">
                <Banner />
                <div className="px-[12vw]
                xl:px-[10vw]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>

    </>
}

export default Layout