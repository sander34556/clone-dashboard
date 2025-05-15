import Dashboard from "@/components/dashboard/Dashboard"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { useState } from "react"



const Layout = () => {
    const [miniSidebar, setMiniSidebar] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);


    return (
        <main className="flex">

            <div><Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} sidebarToggle={sidebarToggle} /></div>

            <div className={`flex-1 transition-all max-md:ml-0 ${miniSidebar ? 'ml-20' : 'ml-64'} bg-neutral-100`}>
                {/* navbar */}
                <Navbar />
                <Dashboard />
                {/* footer */}
            </div>

        </main>
    )
}
export default Layout