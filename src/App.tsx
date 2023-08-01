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
      <div className="drawer">
        {/* nav rail */}
        <input className="rail-toggle" type="checkbox" id="railComponent"/>
        <div className="rail">
          <div className="rail-top">
            <label className="btn btn-ghost" htmlFor="railComponent">
              <span className="material-icons-round">menu</span>
              Menu
            </label>
          </div>
          <div className="rail-middle">
            <ul className="menu">
              <li>
                <a className={window.location.pathname === "/" ? "menu-active" : ""} href="/">
                  <span className="material-icons-round">home</span>
                  Home
                </a>
              </li>
              <li>
                <label className={window.location.pathname != "/" ? "menu-active" : ""} htmlFor="drawerComponent">
                  <span className="material-icons-round">add_circle_outline</span>
                  Components
                  <span className="material-icons-round">chevron_right</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <input className="drawer-toggle" type="checkbox" id="drawerComponent"/>
        <div className="drawer-page-content">
          <div className="p-4"> {/* content itself */}
            <Routes>
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
                <li>
                  <span className="menu-title">Components</span>
                  <ul>
                    <li><a className={window.location.pathname === "/badge" ? "menu-active" : ""} href="/badge">Badge</a></li>
                    <li><a className={window.location.pathname === "/button" ? "menu-active" : ""} href="/button">Button</a></li>
                    <li><a className={window.location.pathname === "/card" ? "menu-active" : ""} href="/card">Card</a></li>
                    <li><a className={window.location.pathname === "/checkbox" ? "menu-active" : ""} href="/checkbox">Checkbox</a></li>
                    <li><a className={window.location.pathname === "/divider" ? "menu-active" : ""} href="/divider">Divider</a></li>
                    <li><a className={window.location.pathname === "/drawer" ? "menu-active" : ""} href="/drawer">Drawer</a></li>
                    <li><a className={window.location.pathname === "/dropdown" ? "menu-active" : ""} href="/dropdown">Dropdown</a></li>
                    <li><a className={window.location.pathname === "/indicator" ? "menu-active" : ""} href="/indicator">Indicator</a></li>
                    <li><a className={window.location.pathname === "/input-field" ? "menu-active" : ""} href="/input-field">Input Field</a></li>
                    <li><a className={window.location.pathname === "/menu" ? "menu-active" : ""} href="/menu">Menu</a></li>
                    <li><a className={window.location.pathname === "/modal" ? "menu-active" : ""} href="/modal">Modal</a></li>
                    <li><a className={window.location.pathname === "/navbar" ? "menu-active" : ""} href="/navbar">Navigation Bar</a></li>
                    <li><a className={window.location.pathname === "/progress-bar" ? "menu-active" : ""} href="/progress-bar">Progress Bar</a></li>
                    <li><a className={window.location.pathname === "/radio-button" ? "menu-active" : ""} href="/radio-button">Radio Button</a></li>
                    <li><a className={window.location.pathname === "/rail" ? "menu-active" : ""} href="/rail">Rail</a></li>
                    <li><a className={window.location.pathname === "/swap" ? "menu-active" : ""} href="/swap">Swap</a></li>
                    <li><a className={window.location.pathname === "/switch" ? "menu-active" : ""} href="/switch">Switch</a></li>
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
