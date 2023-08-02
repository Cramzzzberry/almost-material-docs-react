import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import ButtonPage from "./pages/button/Button-Page"
import BadgePage from "./pages/badge/Badge-Page"
import CardPage from "./pages/card/Card-Page"
import CheckboxPage from "./pages/checkbox/Checkbox-Page"
import DividerPage from "./pages/divider/Divider-Page"
import DrawerPage from "./pages/drawer/drawer-Page"
import DropdownPage from "./pages/dropdown/Dropdown-Page"
import IndicatorPage from "./pages/indicator/Indicator-Page"
import InputFieldPage from "./pages/input-field/Input-Field-Page"
import MenuPage from "./pages/menu/Menu-Page"
import ModalPage from "./pages/modal/Modal-Page"
import NavbarPage from "./pages/navbar/Navbar-Page"
import ProgressbarPage from "./pages/progressbar/Progressbar-Page"
import RadiobuttonPage from "./pages/radiobutton/Radiobutton-Page"
import RailPage from "./pages/rail/Rail-Page"
import SwapPage from "./pages/swap/Swap-Page"
import SwitchPage from "./pages/switch/Switch-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className={ window.location.pathname === "/" ? "drawer" : "drawer xl:drawer-open" }>

        <input className="drawer-toggle" type="checkbox" id="drawerComponent"/>
        <div className="drawer-page-content">
          {/* navbar */}
          <div className="navbar"> 
            <div className="navbar-start">
              <ul className="menu menu-horizontal">
                <li className={ window.location.pathname === "/" ? "" : "xl:hidden"}>
                  <label htmlFor="drawerComponent" className="btn btn-circle btn-ghost">
                    <span className="material-icons-round">menu</span>
                  </label>
                </li>
                <li>
                  <a href="/">Almost Material</a>
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
                            <span></span>
                            0.0.0
                            <span className="badge badge-error">dev</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>

              <input type="text" placeholder="Search here..." className="input w-96 hidden xl:inline-block" />
            </div>

            <div className="navbar-end">
              <ul className="menu menu-horizontal">
                <li><a href="https://github.com/Cramzzzberry/almost-material-docs" target="_blank">Github</a></li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <Routes> {/* content itself */}
              <Route path="/">
                <Route index element={ <Home /> } />
                <Route path="badge" element={ <BadgePage /> } />
                <Route path="button" element={ <ButtonPage /> } />
                <Route path="card" element={ <CardPage /> } />
                <Route path="checkbox" element={ <CheckboxPage /> } />
                <Route path="divider" element={ <DividerPage /> } />
                <Route path="drawer" element={ <DrawerPage /> } />
                <Route path="dropdown" element={ <DropdownPage /> } />
                <Route path="indicator" element={ <IndicatorPage /> } />
                <Route path="input-field" element={ <InputFieldPage /> } />
                <Route path="menu" element={ <MenuPage /> } />
                <Route path="modal" element={ <ModalPage /> } />
                <Route path="navbar" element={ <NavbarPage /> } />
                <Route path="progress-bar" element={ <ProgressbarPage /> } />
                <Route path="radio-button" element={ <RadiobuttonPage /> } />
                <Route path="rail" element={ <RailPage /> } />
                <Route path="swap" element={ <SwapPage /> } />
                <Route path="switch" element={ <SwitchPage /> } />
              </Route>
            </Routes>
          </div>
        </div>

        {/* drawer sidebar */}
        <div className="drawer-sidebar">
          <div className="drawer-sidebar-content">
            <div>
              <ul className="menu">
                <li><input type="text" placeholder="Search here..." className="input input-sm w-full xl:hidden" /></li>
                <span className="menu-title">Getting Started</span>
                <li><a href="#">How to install</a></li>
                <li><a href="#">Configuration</a></li>
                <li><a href="#">Color Shades</a></li>
                <span className="divider"></span>

                <span className="menu-title">Inputs</span>
                <li><a className={window.location.pathname === "/button" ? "menu-active" : ""} href="/button">Button</a></li>
                <li><a className={window.location.pathname === "/input-field" ? "menu-active" : ""} href="/input-field">Input Field</a></li>
                <span className="divider"></span>

                <span className="menu-title">Containment</span>
                <li><a className={window.location.pathname === "/card" ? "menu-active" : ""} href="/card">Card</a></li>
                <li><a className={window.location.pathname === "/dropdown" ? "menu-active" : ""} href="/dropdown">Dropdown</a></li>
                <li><a className={window.location.pathname === "/menu" ? "menu-active" : ""} href="/menu">Menu</a></li>
                <li><a className={window.location.pathname === "/modal" ? "menu-active" : ""} href="/modal">Modal</a></li>
                <span className="divider"></span>

                <span className="menu-title">Toggles/States</span>
                <li><a className={window.location.pathname === "/checkbox" ? "menu-active" : ""} href="/checkbox">Checkbox</a></li>
                <li><a className={window.location.pathname === "/swap" ? "menu-active" : ""} href="/swap">Swap</a></li>
                <li><a className={window.location.pathname === "/switch" ? "menu-active" : ""} href="/switch">Switch</a></li>
                <li><a className={window.location.pathname === "/radio-button" ? "menu-active" : ""} href="/radio-button">Radio Button</a></li>
                <span className="divider"></span>

                <span className="menu-title">Navigations</span>
                <li><a className={window.location.pathname === "/navbar" ? "menu-active" : ""} href="/navbar">Navigation Bar</a></li>
                <li><a className={window.location.pathname === "/drawer" ? "menu-active" : ""} href="/drawer">Navigation Drawer</a></li>
                <li><a className={window.location.pathname === "/rail" ? "menu-active" : ""} href="/rail">Navigation Rail</a></li>
                <span className="divider"></span>

                <span className="menu-title">Others</span>
                <li><a className={window.location.pathname === "/badge" ? "menu-active" : ""} href="/badge">Badge</a></li>
                <li><a className={window.location.pathname === "/divider" ? "menu-active" : ""} href="/divider">Divider</a></li>
                <li><a className={window.location.pathname === "/indicator" ? "menu-active" : ""} href="/indicator">Indicator</a></li>
                <li><a className={window.location.pathname === "/progress-bar" ? "menu-active" : ""} href="/progress-bar">Progress Bar</a></li>
              </ul>
            </div>
          </div>

          <label className="drawer-overlay" htmlFor="drawerComponent"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
