import { NavLink } from "react-router-dom"

const Navbar = () => {
  return(
    <div className="navbar">
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

          <div className="input input-text w-96 hidden xl:inline-block">
            <input placeholder=" " type="text" />
            <label className="input-placeholder">Search</label>
          </div>
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
  )
}

export default Navbar