import { ChevronRight, LayoutDashboard } from "lucide-react"



const MenuItem = ({
    active = false,
    item = { title: 'Untitled', icon: LayoutDashboard },
    miniSidebar
}) => {
    return (
        <li>
            <a href="" className={`flex items-center justify-between ${active ? ' bg-white/10' : ''} text-white px-6 w-full h-14 cursor-pointer hover:bg-white/10 `}>
                <div className="flex gap-4 items-center ">
                    <item.icon className="" />
                    <h3 className={`text-lg capitalize max-md:block ${miniSidebar ? 'hidden group-hover:block' : 'block'}`}>
                        {item.title}
                    </h3>
                </div>
                <ChevronRight className={`max-md:block ${miniSidebar ? 'hidden group-hover:block' : ''}`} />
            </a>
        </li >
    )
}
export default MenuItem