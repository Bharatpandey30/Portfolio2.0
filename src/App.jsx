import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
function App() {
  return <div className= "bg-[#1b213a] h-auto w-full overflow-hidden" >
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    </div>
}

export default App
