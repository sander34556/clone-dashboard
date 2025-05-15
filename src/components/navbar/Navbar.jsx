import { AlignJustify, AlignLeft, Search } from "lucide-react"
import Searchbar from "./Searchbar"
import UserIcon from "./UserIcon"


const Navbar = () => {
    return (
        <nav>
            <div className="grid grid-cols-3 gap-4 px-4 py-3 mt-2 mx-4 rounded-md bg-white">
                <Searchbar />
                <UserIcon />
            </div>
        </nav>
    )
}
export default Navbar

// <AlignLeft onClick={() => setMiniSidebar(prev => !prev)} />
// <AlignJustify onClick={() => setSidebarToggle(prev => !prev)} />