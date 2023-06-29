import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ButtonsPage from "./pages/buttons/Buttons-Page"
import BadgesPage from "./pages/badges/Badges-Page"
import CardsPage from "./pages/cards/Cards-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer xl:flex xl:flex-row">
        <div className="drawer-side bg-primary80 xl:h-screen border-r xl:basis-[320px]"> {/* drawer side */}
          <ul className="drawer-menu p-4"> {/* drawer menu */} 
            <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/buttons" className={({ isActive }) => isActive ? "active" : ""}>Buttons</NavLink></li>
            <li><NavLink to="/badges" className={({ isActive }) => isActive ? "active" : ""}>Badges</NavLink></li>
            <li><NavLink to="/cards" className={({ isActive }) => isActive ? "active" : ""}>Cards</NavLink></li>
            <li><NavLink to="#">Checkbox</NavLink></li>
            <li><NavLink to="#">Chips</NavLink></li>
            <li><NavLink to="#">Divider</NavLink></li>
            <li><NavLink to="#">Dropdown</NavLink></li>
            <li><NavLink to="#">Input Fields</NavLink></li>
            <li><NavLink to="#">Modals</NavLink></li>
            <li><NavLink to="#">Navigation Bars</NavLink></li>
            <li><NavLink to="#">Navigation Drawer</NavLink></li>
            <li><NavLink to="#">Progress Bars</NavLink></li>
            <li><NavLink to="#">Radio Button</NavLink></li>
            <li><NavLink to="#">Snackbar</NavLink></li>
            <li><NavLink to="#">Switch</NavLink></li>
          </ul>
        </div>

        <div class="drawer-content bg-primary90 overflow-y-auto p-4 xl:basis-[calc(100vw-320px)] xl:h-screen"> {/* content of the drawer */}
          <Routes>
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Navigate to="/home" /> }></Route>
            <Route path="/buttons" element={ <ButtonsPage /> } />
            <Route path="/badges" element={ <BadgesPage /> } />
            <Route path="/cards" element={ <CardsPage /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
