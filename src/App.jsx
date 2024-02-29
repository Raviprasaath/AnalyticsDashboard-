import BottomBoxChart from "./Components/BottomBoxChart"
import BottomPieChart from "./Components/BottomPieChart"
import MainChart from "./Components/MainChart"
import RightNavbar from "./Components/RightNavbar"
import SideNavbar from "./Components/SideNavbar"
import TopNavbar from "./Components/TopNavbar"


function App() {


  return (
    <>
        <div className="flex gap-4">
          <div className="p-4 h-dvh fixed w-[250px] bg-slate-200">
            <SideNavbar/>
          </div>
          <div className="ml-[250px] flex flex-col gap-4 bg-slate-100 px-4">
            <TopNavbar />
            <div className=" flex gap-4 justify-between items-center">
              <MainChart />
              <RightNavbar />
            </div>
            <div className="flex gap-4 justify-between items-center">
              <BottomBoxChart />
              <BottomPieChart />
            </div>
          </div>
        </div>
        <div>

        </div>
    </>
  )
}

export default App
