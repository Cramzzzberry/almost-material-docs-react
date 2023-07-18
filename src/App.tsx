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
import DrawerPage from "./pages/drawer/drawer-Page"
import RadiobuttonPage from "./pages/radiobutton/Radiobutton-Page"
import RailPage from "./pages/rail/Rail-Page"
import SwitchPage from "./pages/switch/Switch-Page"
// import ProgressbarPage from "./pages/progressbar/Progressbar-Page" //archived

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer">
        <div className="rail xl:--left-nav">
          <div className="_rail-main">
            <ul className="menu menu-primary --rail">
              <li><NavLink to="/home" className={({ isActive }) => isActive ? "_menu-active" : ""}><span className="material-icons-round">home</span>home</NavLink></li>
              <li><label htmlFor="drawerComponent"><span className="material-icons-round">add_circle_outline</span>Components</label></li>
            </ul>
          </div>
          <div className="_rail-bottom hidden xl:flex">
            <ul className="menu menu-primary --rail">
              <li><a href="https://tailwindcss.com/" target="_blank"><span className="material-icons-round">help_outline</span>help</a></li>
            </ul>
          </div>
        </div>

        <input className="_drawer-toggle" type="checkbox" id="drawerComponent"/>
        <div className="_drawer-page-content">
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
              <Route path="/drawer" element={ <DrawerPage /> } />
              <Route path="/radio-button" element={ <RadiobuttonPage /> } />
              <Route path="/rail" element={ <RailPage /> } />
              <Route path="/switch" element={ <SwitchPage /> } />
              {/* <Route path="/progress-bar" element={ <ProgressbarPage /> } /> */} {/* archived */}
            </Routes>
          </div>
        </div>

        <div className="_drawer-sidebar"> {/* drawer side:left side */}
          <div className="_drawer-sidebar-content">
            <div className="bg-white">
              <ul className="menu menu-primary">
                <li>
                  <span className="_menu-title">Components</span>
                  <ul>
                    <li><NavLink to="/badge" className={({ isActive }) => isActive ? "_menu-active" : ""}>Badge</NavLink></li>
                    <li><NavLink to="/button" className={({ isActive }) => isActive ? "_menu-active" : ""}>Button</NavLink></li>
                    <li><NavLink to="/card" className={({ isActive }) => isActive ? "_menu-active" : ""}>Card</NavLink></li>
                    <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "_menu-active" : ""}>Checkbox</NavLink></li>
                    <li><NavLink to="/divider" className={({ isActive }) => isActive ? "_menu-active" : ""}>Divider</NavLink></li>
                    <li>
                      <NavLink to="/drawer" className={({ isActive }) => isActive ? "_menu-active" : ""}>
                        Drawer
                        <span></span>
                        <span className="badge badge-error">Inc</span>
                      </NavLink>
                    </li>
                    <li><NavLink to="/dropdown" className={({ isActive }) => isActive ? "_menu-active" : ""}>Dropdown</NavLink></li>
                    <li><NavLink to="/input-field" className={({ isActive }) => isActive ? "_menu-active" : ""}>Input Field</NavLink></li>
                    <li><NavLink to="/menu" className={({ isActive }) => isActive ? "_menu-active" : ""}>Menu</NavLink></li>
                    <li><NavLink to="/modal" className={({ isActive }) => isActive ? "_menu-active" : ""}>Modal</NavLink></li>
                    <li><NavLink to="/navbar" className={({ isActive }) => isActive ? "_menu-active" : ""}>Navigation Bar</NavLink></li>
                    {/* <li><NavLink to="/progress-bar" className={({ isActive }) => isActive ? "_menu-active" : ""}>Progress Bars</NavLink></li> */} {/* archived */}
                    <li><NavLink to="/radio-button" className={({ isActive }) => isActive ? "_menu-active" : ""}>Radio Button</NavLink></li>
                    <li><NavLink to="/rail" className={({ isActive }) => isActive ? "_menu-active" : ""}>Rail</NavLink></li>
                    <li><NavLink to="/switch" className={({ isActive }) => isActive ? "_menu-active" : ""}>Switch</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <label className="_drawer-overlay" htmlFor="drawerComponent"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
