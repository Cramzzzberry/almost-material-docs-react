import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <label className="btn btn-icon" htmlFor="my-drawer">
          <span className="material-icons-round">
            menu
          </span>
        </label>

        <Link to="/home"><button className="btn btn-text">Almost Material</button></Link>
      </div>

      <input className="drawer-toggle" type="checkbox" id="my-drawer" />
      <div className="drawer">
        <label className="drawer-overlay" htmlFor="my-drawer"></label>
        <div className="drawer-side">
          <ul>
            <li><Link to="/buttons">Buttons</Link></li>
            <li><Link to="#" className="bg-error">Badges</Link></li>
            <li><Link to="#" className="bg-error">Cards</Link></li>
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
      </div>
    </>
  )
}