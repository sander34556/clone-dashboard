import { Bell } from "lucide-react"

const profileImageUrl = 'https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg'

const UserIcon = () => {
    return (
        <div className="flex items-center justify-end gap-4 ml-2 rounded-md ">
            <div className="mx-4 relative">
                <Bell className="text-gray-600"/>
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
            </div>

            <div className="flex flex-col text-xs items-end font-bold">
                <span className="block ">Puma Official Store</span>
                <span className="block text-gray-500">Change Seller</span>
            </div>
            <div className="relative">
                <img
                    src={profileImageUrl} alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
        </div>
    )
}
export default UserIcon