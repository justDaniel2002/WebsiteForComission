import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { navbarData } from "../datas/datas"
import Banner from "../components/Banner"

const Layout = () => {

    return <>
        <div className="flex">
            <Navbar iconLinks={navbarData} />
            <div className="w-full">
                <Banner />
                <Outlet />
            </div>
        </div>

    </>
}

export default Layout