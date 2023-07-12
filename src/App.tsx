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

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="navdrawer">
        <div className="navdrawer-content">
          {/* page content here */}

          <div className="navbar bg-white"> {/* navbar */}
            <ul className="menu menu-horizontal">
              <li>
                <label htmlFor="myDrawer" className="btn btn-ghost btn-circle">
                  <span class="material-icons-round">menu</span>
                </label>
              </li>
              <li><a href="/home">home</a></li>
            </ul>

            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>

          <div class="p-4"> {/* content itself */}
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
              <Route path="/navdrawer" element={ <NavdrawerPage /> } />
            </Routes>
          </div>
        </div>

        <input type="checkbox" className="navdrawer-toggle" id="myDrawer"/>
        <div className="navdrawer-sidebar"> {/* drawer side:left side */}
          <div className="navdrawer-sidebar-content p-4">
            <div className="card">
              <ul className="menu menu-primary">
                <li><NavLink to="/button" className={({ isActive }) => isActive ? "active" : ""}>Button</NavLink></li>
                <li><NavLink to="/badge" className={({ isActive }) => isActive ? "active" : ""}>Badge</NavLink></li>
                <li><NavLink to="/card" className={({ isActive }) => isActive ? "active" : ""}>Card</NavLink></li>
                <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "active" : ""}>Checkbox</NavLink></li>
                <li><NavLink to="/divider" className={({ isActive }) => isActive ? "active" : ""}>Divider</NavLink></li>
                <li><NavLink to="/dropdown" className={({ isActive }) => isActive ? "active" : ""}>Dropdown</NavLink></li>
                <li><NavLink to="/input-field" className={({ isActive }) => isActive ? "active" : ""}>Input Fields</NavLink></li>
                <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
                <li><NavLink to="/modal" className={({ isActive }) => isActive ? "active" : ""}>Modals</NavLink></li>
                <li><NavLink to="/navbar" className={({ isActive }) => isActive ? "active" : ""}>Navigation Bars</NavLink></li>
                <li><NavLink to="/navdrawer" className={({ isActive }) => isActive ? "active" : ""}>Navigation Drawer</NavLink></li>
                <li><a href="#" className="bg-error">Progress Bars</a></li>
                <li><a href="#" className="bg-error">Radio Button</a></li>
                <li><a href="#" className="bg-error">Snackbar</a></li>
                <li><a href="#" className="bg-error">Switch</a></li>
              </ul>
            </div>
          </div>

          <label htmlFor="myDrawer" className="navdrawer-overlay"></label>
        </div>
      </div>
    </BrowserRouter>
  )
}
