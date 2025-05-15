import { useEffect } from "react";
import Logo from "./Logo"
import SidebarMenu from "./SidebarMenu"



const Sidebar = ({ miniSidebar, setMiniSidebar,sidebarToggle }) => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setMiniSidebar(true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className={`max-md:w-64 ${sidebarToggle ? 'left-0' : '-left-64'} md:left-0 group h-screen top-0 fixed bg-zinc-700 transition-all duration-200 lg:block ${miniSidebar ? 'w-20 flex flex-col items-center hover:w-64' : 'w-64'}`}>

            <Logo miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />

            <SidebarMenu miniSidebar={miniSidebar} />
        </div>
    )
}
export default Sidebar