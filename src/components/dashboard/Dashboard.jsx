


const Dashboard = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 p-4 min-h-screen md:h-screen">
            <div className="grid gap-4 md:col-span-2">
                <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-4">
                    <div className="h-60 rounded-xl bg-red-200/50">1</div>
                    <div className="h-60 rounded-xl bg-red-300/50">2</div>
                    <div className="h-60 rounded-xl bg-red-400/50">3</div>
                    <div className="h-60 rounded-xl bg-red-500/50">4</div>
                </div>
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="h-80 rounded-xl bg-blue-200/50">5</div>
                    <div className="h-80 rounded-xl bg-blue-300/50">6</div>
                </div>
                <div className="h-[500px] md:h-96 rounded-xl bg-green-300/50">7</div>
            </div>
            <div className="flex flex-nowrap overflow-x-scroll max-md:row-start-1 md:grid gap-4 md:overflow-y-scroll">
                <div className="max-md:w-[calc(100vw-32px)] shrink-0 h-80 rounded-xl bg-yellow-300/50">8</div>
                <div className="max-md:w-[calc(100vw-32px)] shrink-0 h-80 rounded-xl bg-yellow-300/50">9</div>
                <div className="max-md:w-[calc(100vw-32px)] shrink-0 h-80 rounded-xl bg-yellow-300/50">10</div>
                <div className="max-md:w-[calc(100vw-32px)] shrink-0 h-80 rounded-xl bg-yellow-300/50">11</div>
            </div>
        </div>
    )
}
export default Dashboard