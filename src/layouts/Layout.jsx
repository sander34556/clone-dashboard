import Dashboard from "@/components/dashboard/Dashboard"
import Sidebar from "@/components/sidebar/Sidebar"
import { AlignJustify, AlignLeft } from "lucide-react"
import { useState } from "react"



const Layout = () => {
    const [miniSidebar, setMiniSidebar] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);


    return (
        <main className="flex">

            <div><Sidebar miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} sidebarToggle={sidebarToggle} /></div>

            <div className={`flex-1 transition-all max-md:ml-0 ${miniSidebar ? 'ml-20' : 'ml-64'}`}>
                {/* navbar */}
                <nav className="flex w-full px-4 bg-amber-100 justify-between">
                    <AlignLeft onClick={() => setMiniSidebar(prev => !prev)} />
                    <AlignJustify onClick={() => setSidebarToggle(prev => !prev)} />
                </nav>
                <Dashboard />
                {/* footer */}
            </div>

        </main>
    )
}
export default Layout