import 'material-icons/iconfont/material-icons.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import Home from "./pages/Home"
import ButtonsPage from "./pages/buttons/Buttons-Page"
import BadgesPage from "./pages/badges/Badges-Page"
import CardsPage from "./pages/cards/Cards-Page"

export default function App() {
  return(
    <BrowserRouter>
      {/* the whole drawer */}
      <div className="drawer xl:flex xl:flex-row">
        <div className="drawer-side xl:h-screen border-r xl:basis-[320px]"> {/* drawer side */}
          <ul className="drawer-menu p-4"> {/* drawer menu */} 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buttons">Buttons</Link></li>
            <li><Link to="/badges">Badges</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="#" className="bg-error">Checkbox</Link></li>
            <li><Link to="#" className="bg-error">Chips</Link></li>
            <li><Link to="#" className="bg-error">Divider</Link></li>
            <li><Link to="#" className="bg-error">Dropdown</Link></li>
            <li><Link to="#" className="bg-error">Input Fields</Link></li>
            <li><Link to="#" className="bg-error">Modals</Link></li>
            <li><Link to="#" className="bg-error">Navigation Bars</Link></li>
            <li><Link to="#" className="bg-error">Navigation Drawer</Link></li>
            <li><Link to="#" className="bg-error">Progress Bars</Link></li>
            <li><Link to="#" className="bg-error">Radio Button</Link></li>
            <li><Link to="#" className="bg-error">Snackbar</Link></li>
            <li><Link to="#" className="bg-error">Switch</Link></li>
          </ul>
        </div>

        <div class="drawer-content overflow-y-auto p-4 xl:basis-[calc(100vw-320px)] xl:h-screen"> {/* content of the drawer */}
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
