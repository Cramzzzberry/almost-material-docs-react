import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ButtonsPage from "./pages/button/Buttons-Page"
import BadgesPage from "./pages/badge/Badges-Page"
import CardsPage from "./pages/card/Cards-Page"
import CheckboxPage from "./pages/checkbox/Checkbox-Page"
import DividerPage from "./pages/divider/Divider-Page"
import MenuPage from "./pages/menu/Menu-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer xl:flex xl:flex-row">
        <div className="drawer-side bg-primary-90 xl:h-screen border-r xl:basis-[320px]"> {/* drawer side */}
          <ul className="drawer-menu p-4"> {/* drawer menu */} 
            <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/buttons" className={({ isActive }) => isActive ? "active" : ""}>Buttons</NavLink></li>
            <li><NavLink to="/badges" className={({ isActive }) => isActive ? "active" : ""}>Badges</NavLink></li>
            <li><NavLink to="/cards" className={({ isActive }) => isActive ? "active" : ""}>Cards</NavLink></li>
            <li><NavLink to="/checkbox" className={({ isActive }) => isActive ? "active" : ""}>Checkbox</NavLink></li>
            <li><NavLink to="/divider" className={({ isActive }) => isActive ? "active" : ""}>Divider</NavLink></li>
            <li><NavLink to="#">Input Fields</NavLink></li>
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

        <div class="drawer-content bg-primary-90 overflow-y-auto p-4 xl:basis-[calc(100vw-320px)] xl:h-screen"> {/* content of the drawer */}
          <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Navigate to="/home" /> }></Route>
            <Route path="/buttons" element={ <ButtonsPage /> } />
            <Route path="/badges" element={ <BadgesPage /> } />
            <Route path="/cards" element={ <CardsPage /> } />
            <Route path="/checkbox" element={ <CheckboxPage /> } />
            <Route path="/divider" element={ <DividerPage /> } />
            <Route path="/menu" element={ <MenuPage /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
