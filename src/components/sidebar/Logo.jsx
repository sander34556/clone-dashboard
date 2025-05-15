import { AlignLeft } from "lucide-react"



const Logo = ({ miniSidebar, setMiniSidebar }) => {

  const toggleSidebar = () => {
    setMiniSidebar(prev => !prev)
  }

  return (
    <div className="flex items-center gap-6 p-6">
      <AlignLeft onClick={toggleSidebar} className="text-white h-9 cursor-pointer" />
      <h1 className={`gap-2 px-2 py-1 bg-white w-full text-xl justify-center max-md:flex  ${miniSidebar ? 'hidden group-hover:flex' : 'flex'}`}>
        <span className="font-bold">SELLER </span>
        <span className="font-light">CENTER</span>
      </h1>
    </div>
  )
}
export default Logo