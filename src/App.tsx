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

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="bg-primary-90 px-4 py-2 flex flex-row justify-between items-center absolute top-0 w-full z-[0]">
        <ul className="flex flex-row items-center font-semibold">
          <li><NavLink to="/home" className={({ isActive }) => isActive ? "btn btn-primary btn-circle active" : "btn btn-circle btn-ghost"}>
            <span className="material-icons">
              home
            </span>
          </NavLink></li>
          <li><a className="btn btn-ghost">Item 2</a></li>
        </ul>

        <div className="">
          <a href="/home" className="btn btn-ghost">Almost Material</a>
        </div>
      </div>
      <div className="drawer xl:flex xl:flex-row xl:h-screen pt-[4.125rem]">
        <div className="drawer-side bg-primary-95 border-r xl:basis-[320px]"> {/* drawer side:left side */}
          <ul className="drawer-menu p-4"> {/* drawer menu */} 
            <li><NavLink to="/button" className={({ isActive }) => isActive ? "active" : ""}>Button</NavLink></li>
            <li><NavLink to="/badge" className={({ isActive }) => isActive ? "active" : ""}>Badge</NavLink></li>
            <li><NavLink to="/card" className={({ isActive }) => isActive ? "active" : ""}>Card</NavLink></li>
            <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "active" : ""}>Checkbox</NavLink></li>
            <li><NavLink to="/divider" className={({ isActive }) => isActive ? "active" : ""}>Divider</NavLink></li>
            <li><NavLink to="/dropdown" className={({ isActive }) => isActive ? "active" : ""}>Dropdown</NavLink></li>
            <li><NavLink to="/input-field" className={({ isActive }) => isActive ? "active" : ""}>Input Fields</NavLink></li>
            <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
            <li><NavLink to="/modal" className={({ isActive }) => isActive ? "active" : ""}>Modals</NavLink></li>
            <li><NavLink to="/navbar" className={({ isActive }) => isActive ? "flex flex-row justify-between items-center active" : "flex flex-row justify-between items-center"}>
              Navigation Bars 
              <span className="badge badge-error">Todo</span>
            </NavLink></li>
            <li><a href="#" className="bg-error">Navigation Drawer</a></li>
            <li><a href="#" className="bg-error">Progress Bars</a></li>
            <li><a href="#" className="bg-error">Radio Button</a></li>
            <li><a href="#" className="bg-error">Snackbar</a></li>
            <li><a href="#" className="bg-error">Switch</a></li>
          </ul>
        </div>

        <div class="drawer-content bg-primary-95 overflow-y-auto p-4 xl:basis-[calc(100vw-320px)]"> {/* content of the drawer:right side */}
          <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Navigate to="/home" /> }></Route>
            <Route path="/button" element={ <ButtonPage /> } />
            <Route path="/badge" element={ <BadgePage /> } />
            <Route path="/card" element={ <CardPage /> } />
            <Route path="/checkbox" element={ <CheckboxPage /> } />
            <Route path="/divider" element={ <DividerPage /> } />
            <Route path="/dropdown" element={ <DropdownPage /> } />
            <Route path="/input-field" element={ <InputFieldPage /> } />
            <Route path="/menu" element={ <MenuPage /> } />
            <Route path="/modal" element={ <ModalPage /> } />
            <Route path="/navbar" element={ <NavbarPage /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
