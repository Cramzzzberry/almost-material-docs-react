import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ButtonPage from "./pages/button/Button-Page"
import BadgePage from "./pages/badge/Badge-Page"
import CardPage from "./pages/card/Card-Page"
import CheckboxPage from "./pages/checkbox/Checkbox-Page"
import DividerPage from "./pages/divider/Divider-Page"
import MenuPage from "./pages/menu/Menu-Page"
import InputFieldPage from "./pages/input-field/Input-Field-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer xl:flex xl:flex-row">
        <div className="drawer-side bg-primary-90 xl:h-screen border-r xl:basis-[320px]"> {/* drawer side */}
          <ul className="drawer-menu p-4"> {/* drawer menu */} 
            <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li>
              <div className="flex flex-row justify-between py-0">
                Components
                <div className="menu menu-right">
                  <label tabIndex="0" className="btn btn-circle btn-ghost">
                    <span class="material-icons">navigate_next</span>
                  </label>
                  <ul tabIndex="0" className="menu-content z-[1] h-[600px] overflow-y-auto">
                    <li><NavLink to="/button" className={({ isActive }) => isActive ? "active" : ""}>Button</NavLink></li>
                    <li><NavLink to="/badge" className={({ isActive }) => isActive ? "active" : ""}>Badge</NavLink></li>
                    <li><NavLink to="/card" className={({ isActive }) => isActive ? "active" : ""}>Card</NavLink></li>
                    <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "active" : ""}>Checkbox</NavLink></li>
                    <li><NavLink to="/divider" className={({ isActive }) => isActive ? "active" : ""}>Divider</NavLink></li>
                    <li><NavLink to="/input-field" className={({ isActive }) => isActive ? "active" : ""}>Input Fields</NavLink></li>
                    <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
                    <li><NavLink to="#">Modals</NavLink></li>
                    <li><NavLink to="#">Navigation Bars</NavLink></li>
                    <li><NavLink to="#">Navigation Drawer</NavLink></li>
                    <li><NavLink to="#">Progress Bars</NavLink></li>
                    <li><NavLink to="#">Radio Button</NavLink></li>
                    <li><NavLink to="#">Snackbar</NavLink></li>
                    <li><NavLink to="#">Switch</NavLink></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="drawer-content bg-primary-90 overflow-y-auto p-4 xl:basis-[calc(100vw-320px)] xl:h-screen"> {/* content of the drawer */}
          <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Navigate to="/home" /> }></Route>
            <Route path="/button" element={ <ButtonPage /> } />
            <Route path="/badge" element={ <BadgePage /> } />
            <Route path="/card" element={ <CardPage /> } />
            <Route path="/checkbox" element={ <CheckboxPage /> } />
            <Route path="/divider" element={ <DividerPage /> } />
            <Route path="/menu" element={ <MenuPage /> } />
            <Route path="/input-field" element={ <InputFieldPage /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
