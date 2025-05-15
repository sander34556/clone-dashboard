import { GripHorizontal, LayoutDashboard, Tag, ChartNoAxesColumnIncreasing, Settings, User, Wrench, LifeBuoy } from "lucide-react"
import MenuItem from "./MenuItem"

const lists = [
    { item: { title: 'overview', icon: LayoutDashboard }, active: true },
    { item: { title: 'products', icon: GripHorizontal } },
    { item: { title: 'orders', icon: Tag } },
    { item: { title: 'reports', icon: ChartNoAxesColumnIncreasing } },
    { item: { title: 'setting', icon: Settings } },
    { item: { title: 'adminstraion', icon: User } },
    { item: { title: 'maintenance', icon: Wrench } },
    { item: { title: 'help', icon: LifeBuoy } },
]

const SidebarMenu = ({ miniSidebar }) => {
    return (
        <ul className="mt-16">
            {
                lists.map((menu, index) => <MenuItem key={index} active={menu.active} item={menu.item} miniSidebar={miniSidebar} />)
            }



        </ul>
    )
}
export default SidebarMenu