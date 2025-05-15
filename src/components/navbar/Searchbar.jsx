import { Search } from "lucide-react"


const Searchbar = () => {
    return (
        <div className="bg-white w-full col-span-2 rounded-md h-9 flex items-center gap-2 px-2 text-gray-500 border">
            <Search className="w-5 text-gray-500" />
            <input
                placeholder="Search"
                className="w-full bg-transparent outline-none"
            />
        </div>
    )
}
export default Searchbar