import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ButtonPage from "./pages/button/Button-Page"
import BadgePage from "./pages/badge/Badge-Page"
import CardPage from "./pages/card/Card-Page"
import CheckboxPage from "./pages/checkbox/Checkbox-Page"
import DividerPage from "./pages/divider/Divider-Page"
import DropdownPage from "./pages/dropdown/Dropdown-Page"
import InputFieldPage from "./pages/input-field/Input-Field-Page"
import MenuPage from "./pages/menu/Menu-Page"
import ModalPage from "./pages/modal/Modal-Page"
import NavbarPage from "./pages/navbar/Navbar-Page"
import NavdrawerPage from "./pages/navdrawer/Navdrawer-Page"
import RadiobuttonPage from "./pages/radiobutton/Radiobutton-Page"
import SwitchPage from "./pages/switch/Switch-Page"
// import ProgressbarPage from "./pages/progressbar/Progressbar-Page" //archived

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="navdrawer xl:--open">
        <input type="checkbox" className="navdrawer-toggle" id="myDrawer"/>
        <div className="navdrawer-page-content">
          {/* page content here */}
          <div className="navbar bg-white xl:hidden"> {/* navbar */}
            <div className="navbar-start">
              <ul className="menu --horizontal">
                <li>
                  <label htmlFor="myDrawer" className="btn --ghost --circle xl:hidden">
                    <span className="material-icons-round">menu</span>
                  </label>
                </li>
                <li><NavLink to="/home">home</NavLink></li>
              </ul>
            </div>

            <div className="navbar-end">
              <ul className="menu --horizontal">
                <li className="px-5">Almost Material</li>
              </ul>
            </div>
          </div>

          <div className="p-4"> {/* content itself */}
            <Routes>
              <Route path="/home" element={ <Home /> } />
              <Route path="/" element={ <Navigate to="/home" /> }></Route>
              <Route path="/badge" element={ <BadgePage /> } />
              <Route path="/button" element={ <ButtonPage /> } />
              <Route path="/card" element={ <CardPage /> } />
              <Route path="/checkbox" element={ <CheckboxPage /> } />
              <Route path="/divider" element={ <DividerPage /> } />
              <Route path="/dropdown" element={ <DropdownPage /> } />
              <Route path="/input-field" element={ <InputFieldPage /> } />
              <Route path="/menu" element={ <MenuPage /> } />
              <Route path="/modal" element={ <ModalPage /> } />
              <Route path="/navbar" element={ <NavbarPage /> } />
              <Route path="/navdrawer" element={ <NavdrawerPage /> } />
              <Route path="/radio-button" element={ <RadiobuttonPage /> } />
              <Route path="/switch" element={ <SwitchPage /> } />
              {/* <Route path="/progress-bar" element={ <ProgressbarPage /> } /> */} {/* archived */}
            </Routes>
          </div>
        </div>

        <div className="navdrawer-sidebar"> {/* drawer side:left side */}
          <div className="navdrawer-sidebar-content">
            <div>
              <ul className="menu menu-primary">
                <li className="hidden xl:block"><NavLink to="/home" className={({ isActive }) => isActive ? "--active" : ""}>home</NavLink></li>
                <li>
                  <span className="menu-title">Components</span>
                  <ul>
                    <li><NavLink to="/badge" className={({ isActive }) => isActive ? "--active" : ""}>Badge</NavLink></li>
                    <li><NavLink to="/button" className={({ isActive }) => isActive ? "--active" : ""}>Button</NavLink></li>
                    <li><NavLink to="/card" className={({ isActive }) => isActive ? "--active" : ""}>Card</NavLink></li>
                    <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "--active" : ""}>Checkbox</NavLink></li>
                    <li><NavLink to="/divider" className={({ isActive }) => isActive ? "--active" : ""}>Divider</NavLink></li>
                    <li><NavLink to="/dropdown" className={({ isActive }) => isActive ? "--active" : ""}>Dropdown</NavLink></li>
                    <li><NavLink to="/input-field" className={({ isActive }) => isActive ? "--active" : ""}>Input Fields</NavLink></li>
                    <li><NavLink to="/menu" className={({ isActive }) => isActive ? "--active" : ""}>Menu</NavLink></li>
                    <li><NavLink to="/modal" className={({ isActive }) => isActive ? "--active" : ""}>Modals</NavLink></li>
                    <li><NavLink to="/navbar" className={({ isActive }) => isActive ? "--active" : ""}>Navigation Bars</NavLink></li>
                    <li><NavLink to="/navdrawer" className={({ isActive }) => isActive ? "--active" : ""}>Navigation Drawer</NavLink></li>
                    {/* <li><NavLink to="/progress-bar" className={({ isActive }) => isActive ? "--active" : ""}>Progress Bars</NavLink></li> */} {/* archived */}
                    <li><NavLink to="/radio-button" className={({ isActive }) => isActive ? "--active" : ""}>Radio Button</NavLink></li>
                    <li><NavLink to="/switch" className={({ isActive }) => isActive ? "--active" : ""}>Switch</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <label htmlFor="myDrawer" className="navdrawer-overlay"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
