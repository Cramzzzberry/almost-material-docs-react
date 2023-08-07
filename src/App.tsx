//misc
import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

//main pages
import HomePage from "./pages/Home"
import InstallationPage from "./pages/Installation"

//component pages
import ButtonPage from "./pages/button/Button-Page"
import BadgePage from "./pages/badge/Badge-Page"
import CardPage from "./pages/card/Card-Page"
import CheckboxPage from "./pages/checkbox/Checkbox-Page"
import DividerPage from "./pages/divider/Divider-Page"
import DrawerPage from "./pages/drawer/drawer-Page"
import DropdownPage from "./pages/dropdown/Dropdown-Page"
import ImagePage from "./pages/image/Image-Page"
import IndicatorPage from "./pages/indicator/Indicator-Page"
import InputFieldPage from "./pages/input-field/Input-Field-Page"
import MenuPage from "./pages/menu/Menu-Page"
import ModalPage from "./pages/modal/Modal-Page"
import NavbarPage from "./pages/navbar/Navbar-Page"
import ProgressbarPage from "./pages/progressbar/Progressbar-Page"
import RadiobuttonPage from "./pages/radiobutton/Radiobutton-Page"
import RailPage from "./pages/rail/Rail-Page"
import SliderPage from "./pages/slider/Slider-Page"
import SwapPage from "./pages/swap/Swap-Page"
import SwitchPage from "./pages/switch/Switch-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer xl:drawer-open">
        <input className="drawer-toggle" type="checkbox" id="drawerComponent"/>
        <div className="drawer-page-content mb-[4.75rem] md:mb-0">
          <div className="navbar"> {/* navbar */}
            <div className="navbar-start"> {/* navbar start */}
                <ul className="menu menu-horizontal">
                  <li className="xl:hidden">
                    <label htmlFor="drawerComponent" className="btn btn-circle btn-ghost">
                      <span className="material-icons-round">menu</span>
                    </label>
                  </li>
                  <li>
                    <NavLink to="/">
                      Almost Material
                      <span className="badge badge-warning">In Dev</span>
                    </NavLink>
                  </li>
                  <li className="flex items-center">
                    <div className="dropdown">
                      <button tabIndex="0" className="btn btn-ghost btn-sm">
                        0.0.0
                        <span className="material-icons-round">expand_more</span>
                      </button>
                      <div tabIndex="0" className="dropdown-content z-[1] card">
                        <ul className="menu menu-sm w-56">
                          <li>
                            <a>
                              0.0.0
                              <span></span>
                              <span className="badge badge-warning">In Dev</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                <input type="text" placeholder="Search here..." className="input w-96 hidden xl:inline-block" />
              </div>

              <div className="navbar-end"> {/* navbar end */}
                  <ul className="menu menu-horizontal">
                      <li>
                          <a href="https://github.com/Cramzzzberry/almost-material-docs" target="_blank">
                              Github
                              <span className="badge badge-warning">In Dev</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>

          <div className="p-4">
            <Routes> {/* displaying pages here */}
              <Route path="/">
                <Route index element={ <HomePage /> } />
                <Route path="how-to-install" element={ <InstallationPage /> } />
                <Route path="badge" element={ <BadgePage /> } />
                <Route path="button" element={ <ButtonPage /> } />
                <Route path="card" element={ <CardPage /> } />
                <Route path="checkbox" element={ <CheckboxPage /> } />
                <Route path="divider" element={ <DividerPage /> } />
                <Route path="drawer" element={ <DrawerPage /> } />
                <Route path="dropdown" element={ <DropdownPage /> } />
                <Route path="image" element={ <ImagePage /> } />
                <Route path="indicator" element={ <IndicatorPage /> } />
                <Route path="input-field" element={ <InputFieldPage /> } />
                <Route path="menu" element={ <MenuPage /> } />
                <Route path="modal" element={ <ModalPage /> } />
                <Route path="navbar" element={ <NavbarPage /> } />
                <Route path="progress-bar" element={ <ProgressbarPage /> } />
                <Route path="radio-button" element={ <RadiobuttonPage /> } />
                <Route path="rail" element={ <RailPage /> } />
                <Route path="slider" element={ <SliderPage /> } />
                <Route path="swap" element={ <SwapPage /> } />
                <Route path="switch" element={ <SwitchPage /> } />
              </Route>
            </Routes>
          </div>

          <div className="navbar navbar-bottom md:hidden"> {/* navbar bottom, but will remove if I will not use it */}
            <ul className="menu">
              <li><a className="menu-active"><span className="material-icons-round">home</span>home</a></li>
              <li><a><span className="material-icons-round">library_books</span>library</a></li>
              <li><a><span className="material-icons-round">favorite</span>favorites</a></li>
              <li><a><span className="material-icons-round">update</span>update</a></li>
              <li><a><span className="material-icons-round">settings</span>settings</a></li>
            </ul>
          </div>
        </div>

        <div className="drawer-sidebar"> {/* drawer sidebar */}
          <div className="drawer-sidebar-content">
            <ul className="menu menu-sm">
              <li><input type="text" placeholder="Search here..." className="input input-sm input-outline w-full xl:hidden" /></li>

              <span className="menu-title">Getting Started</span>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/how-to-install">How to install</NavLink></li>
              <li>
                <NavLink to="#">
                  Configuration
                  <span></span>
                  <span className="badge badge-error">No Page</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                Color Shades
                <span></span>
                <span className="badge badge-error">No Page</span>
                </NavLink>
              </li>
              <span className="divider"></span>

              <span className="menu-title">Inputs</span>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/button">Button</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/input-field">Text Field</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/slider">Slider</NavLink></li>
              <span className="divider"></span>

              <span className="menu-title">Containment</span>
              <li>
                <NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/card">
                  Card
                  <span></span>
                  <span className="badge badge-warning">Layout Making</span>
                </NavLink>
              </li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/dropdown">Dropdown</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/image">Image</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/menu">Menu</NavLink></li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/modal">
                  Modal
                  <span></span>
                  <span className="badge badge-warning">Layout Making</span>
                </NavLink>
              </li>
              <span className="divider"></span>

              <span className="menu-title">Toggles/States</span>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/checkbox">Checkbox</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/swap">Swap</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/switch">Switch</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/radio-button">Radio Button</NavLink></li>
              <span className="divider"></span>

              <span className="menu-title">Navigations</span>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/navbar">Navigation Bar</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/drawer">Navigation Drawer</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/rail">Navigation Rail</NavLink></li>
              <span className="divider"></span>

              <span className="menu-title">Others</span>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/badge">Badge</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/divider">Divider</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/indicator">Indicator</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? "menu-active" : ""} to="/progress-bar">Progress Bar</NavLink></li>
            </ul>
          </div>

          <label className="drawer-overlay" htmlFor="drawerComponent"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
