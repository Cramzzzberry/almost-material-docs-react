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
import SwapPage from "./pages/swap/Swap-Page"
import SwitchPage from "./pages/switch/Switch-Page"
// import ProgressbarPage from "./pages/progressbar/Progressbar-Page" //archived

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer">
        {/* nav rail */}
        <div className="rail xl:rail-left">
          <div className="rail-main">
            <ul className="menu menu-primary menu-rail">
              <li><NavLink to="/home" className={({ isActive }) => isActive ? "menu-active" : ""}><span className="material-icons-round">home</span>home</NavLink></li>
              <li><label htmlFor="drawerComponent"><span className="material-icons-round">add_circle_outline</span>Components</label></li>
            </ul>
          </div>
          <div className="rail-bottom hidden xl:flex">
            <ul className="menu menu-primary">
              <li>
                <label className="swap swap-rotate">
                  <input type="checkbox" />

                  <span class="swap-off material-icons-round">light_mode</span>
                  <span class="swap-on material-icons-round">dark_mode</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <input className="drawer-toggle" type="checkbox" id="drawerComponent"/>
        <div className="drawer-page-content">
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
              <Route path="/swap" element={ <SwapPage /> } />
              <Route path="/switch" element={ <SwitchPage /> } />
              {/* <Route path="/progress-bar" element={ <ProgressbarPage /> } /> */} {/* archived */}
            </Routes>
          </div>
        </div>

        {/* drawer sidebar */}
        <div className="drawer-sidebar">
          <div className="drawer-sidebar-content">
            <div className="bg-white">
              <ul className="menu menu-primary">
                <li>
                  <span className="menu-title">Components</span>
                  <ul>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/badge">Badge</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/button">Button</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/card">Card</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/checkbox">Checkbox</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/divider">Divider</NavLink></li>
                    <li>
                      <NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/drawer">
                        Drawer
                        <span></span>
                        <span className="badge badge-error">Inc</span>
                      </NavLink>
                    </li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/dropdown">Dropdown</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/input-field">Input Field</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/menu">Menu</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/modal">Modal</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/navbar">Navigation Bar</NavLink></li>
                    {/* <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/progress-bar">Progress Bars</NavLink></li> */} {/* archived */}
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/radio-button">Radio Button</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/rail">Rail</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/swap">Swap</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/switch">Switch</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <label className="drawer-overlay" htmlFor="drawerComponent"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
